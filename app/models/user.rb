# frozen_string_literal: true

# == Schema Information
#
# Table name: users
#
#  id                          :bigint           not null, primary key
#  authoring_subscribers_count :integer          default(0)
#  avatar_url                  :string
#  banned_at                   :datetime
#  locale                      :integer          default(0)
#  mixin_uuid                  :uuid
#  name                        :string
#  reading_subscribers_count   :integer          default(0)
#  statistics                  :jsonb
#  created_at                  :datetime         not null
#  updated_at                  :datetime         not null
#  mixin_id                    :string
#
# Indexes
#
#  index_users_on_mixin_id    (mixin_id) UNIQUE
#  index_users_on_mixin_uuid  (mixin_uuid) UNIQUE
#  index_users_on_statistics  (statistics) USING gin
#
class User < ApplicationRecord
  include Authenticatable

  store :statistics, accessors: %i[articles_count bought_articles_count author_revenue_total reader_revenue_total revenue_total payment_total comments_count]

  has_one :mixin_authorization, -> { where(provider: :mixin) }, class_name: 'UserAuthorization', inverse_of: :user

  has_many :articles, foreign_key: :author_id, inverse_of: :author, dependent: :nullify
  has_many :payments, foreign_key: :opponent_id, primary_key: :mixin_uuid, inverse_of: :payer, dependent: :nullify
  has_many :transfers, foreign_key: :opponent_id, primary_key: :mixin_uuid, inverse_of: :recipient, dependent: :nullify
  has_many :snapshots, foreign_key: :opponent_id, primary_key: :mixin_uuid, inverse_of: :opponent, dependent: :nullify
  has_many :author_revenue_transfers, -> { where(transfer_type: :author_revenue) }, class_name: 'Transfer', foreign_key: :opponent_id, primary_key: :mixin_uuid, inverse_of: :recipient, dependent: :nullify
  has_many :reader_revenue_transfers, -> { where(transfer_type: :reader_revenue) }, class_name: 'Transfer', foreign_key: :opponent_id, primary_key: :mixin_uuid, inverse_of: :recipient, dependent: :nullify
  has_many :revenue_transfers, -> { where(transfer_type: %w[author_revenue reader_revenue]) }, class_name: 'Transfer', foreign_key: :opponent_id, primary_key: :mixin_uuid, inverse_of: :recipient, dependent: :nullify
  has_many :orders, foreign_key: :buyer_id, inverse_of: :buyer, dependent: :nullify
  has_many :bought_articles, -> { distinct.order(created_at: :desc) }, through: :orders, source: :item, source_type: 'Article'
  has_many :comments, foreign_key: :author_id, inverse_of: :author, dependent: :nullify
  has_many :swap_orders, through: :payments
  has_many :notifications, as: :recipient, dependent: :destroy

  has_one :wallet, class_name: 'MixinNetworkUser', as: :owner, dependent: :nullify
  has_one :notification_setting, dependent: :destroy

  before_validation :setup_attributes

  validates :name, presence: true
  enum locale: { en: 0, 'zh-CN': 1 }

  after_commit :create_wallet!, :update_statistics_cache, :create_notification_setting!, on: :create

  default_scope { includes(:mixin_authorization) }
  scope :only_banned, -> { where.not(banned_at: nil) }
  scope :without_banned, -> { where(banned_at: nil) }
  scope :order_by_revenue_total, lambda {
    joins(:revenue_transfers)
      .group(:id)
      .select(
        <<~SQL.squish
          users.*,
          SUM(transfers.amount) AS revenue_total
        SQL
      ).order(revenue_total: :desc)
  }
  scope :order_by_payment_total, lambda {
    joins(:payments)
      .group(:id)
      .select(
        <<~SQL.squish
          users.*,
          SUM(payments.amount) AS payment_total
        SQL
      ).order(payment_total: :desc)
  }
  scope :order_by_articles_count, lambda {
    joins(:articles)
      .group(:id)
      .select(
        <<~SQL.squish
          users.*,
          COUNT(articles.id) AS articles_count
        SQL
      ).order(articles_count: :desc)
  }
  scope :order_by_comments_count, lambda {
    joins(:comments)
      .group(:id)
      .select(
        <<~SQL.squish
          users.*,
          COUNT(comments.id) AS comments_count
        SQL
      ).order(comments_count: :desc)
  }

  # subscribe user for new articles
  action_store :authoring_subscribe, :user, counter_cache: 'authoring_subscribers_count'
  # subscribe user for buying or rewarding articles
  action_store :reading_subscribe, :user, counter_cache: 'reading_subscribers_count'
  # subscribe for article's comment
  action_store :commenting_subscribe, :article, counter_cache: 'commenting_subscribers_count'
  # upvote article
  action_store :upvote, :article, counter_cache: true
  # downvote article
  action_store :downvote, :article, counter_cache: true
  # upvote comment
  action_store :upvote, :comment, counter_cache: true
  # downvote comment
  action_store :downvote, :comment, counter_cache: true
  # subscribe for tag's articles
  action_store :subscribe, :tag, counter_cache: 'subscribers_count'

  def unread_notifications_count
    notifications.unread.count
  end

  def bio
    mixin_authorization&.raw&.[]('biography')
  end

  def banned?
    banned_at?
  end

  def ban!
    update banned_at: Time.current

    UserBannedNotification.with(user: self).deliver(self)
  end

  def unban!
    update banned_at: nil

    UserUnbannedNotification.with(user: self).deliver(self)
  end

  def update_statistics_cache
    update statistics: {
      articles_count: articles.count,
      author_revenue_total: author_revenue_transfers.sum(:amount).to_f,
      bought_articles_count: bought_articles.count,
      comments_count: comments.count,
      reader_revenue_total: reader_revenue_transfers.sum(:amount).to_f,
      revenue_total: revenue_transfers.sum(:amount).to_f,
      payment_total: orders.sum(:total).to_f
    }
  end

  def update_profile(profile = {})
    profile ||= mixin_authorization.raw
    return if profile.blank?

    update(
      avatar_url: profile['avatar_url'],
      name: profile['full_name']
    )
  end

  def wallet_id
    @wallet_id = (wallet.presence || create_wallet)&.uuid
  end

  def avatar
    avatar_url || generated_avatar_url
  end

  def generated_avatar_url
    format('https://api.multiavatar.com/%<mixin_uuid>s.svg', mixin_uuid: mixin_uuid)
  end

  private

  def setup_attributes
    return if mixin_authorization.blank?

    assign_attributes(
      avatar_url: mixin_authorization.raw['avatar_url'],
      name: mixin_authorization.raw['full_name'],
      mixin_id: mixin_authorization.raw['identity_number'],
      mixin_uuid: mixin_authorization.raw['user_id']
    )
  end
end
