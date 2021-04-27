# frozen_string_literal: true

# == Schema Information
#
# Table name: prs_transactions
#
#  id              :bigint           not null, primary key
#  block_num       :integer
#  block_type      :string
#  data            :jsonb
#  hash_str        :string
#  meta            :jsonb
#  raw             :jsonb
#  signature       :string
#  type(STI)       :string
#  user_address    :string
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  transation_id   :string
#  tx_id           :string
#
# Indexes
#
#  index_prs_transactions_on_block_num      (block_num) UNIQUE
#  index_prs_transactions_on_transation_id  (transation_id) UNIQUE
#  index_prs_transactions_on_tx_id          (tx_id) UNIQUE
#
class PrsAccountAllowTransaction < PrsTransaction
end
