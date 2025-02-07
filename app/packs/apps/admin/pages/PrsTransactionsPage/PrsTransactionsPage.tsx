import { Avatar, Button, PageHeader, Select, Space, Table } from 'antd';
import { ColumnProps } from 'antd/lib/table';
import LoadingComponent from 'apps/admin/components/LoadingComponent/LoadingComponent';
import {
  PrsTransaction,
  useAdminPrsTransactionConnectionQuery,
} from 'graphqlTypes';
import React, { useState } from 'react';

export default function PrsTransactionsPage() {
  const [type, setType] = useState('all');
  return (
    <>
      <PageHeader title='Prs Transactions' />
      <div className='flex mb-4 space-x-4'>
        <Select
          className='w-72'
          value={type}
          onChange={(value) => setType(value)}
        >
          <Select.Option value='all'>All</Select.Option>
          <Select.Option value='ArticleSnapshotPrsTransaction'>
            Article
          </Select.Option>
          <Select.Option value='PrsAccountAuthorizationTransaction'>
            Authorization
          </Select.Option>
        </Select>
      </div>
      <PrsTransactionsComponent type={type} />
    </>
  );
}

export function PrsTransactionsComponent(props: { type?: string }) {
  const { type } = props;
  const { data, loading, fetchMore } = useAdminPrsTransactionConnectionQuery({
    variables: { type },
  });

  if (loading) {
    return <LoadingComponent />;
  }

  const {
    adminPrsTransactionConnection: {
      nodes: transactions,
      pageInfo: { hasNextPage, endCursor },
    },
  } = data;

  const columns: Array<ColumnProps<PrsTransaction>> = [
    {
      dataIndex: 'id',
      key: 'id',
      title: 'ID',
    },
    {
      dataIndex: 'type',
      key: 'type',
      title: 'type',
    },
    {
      dataIndex: 'userAddress',
      key: 'userAddress',
      render: (_, transition) => transition.userAddress || '-',
      title: 'userAddress',
    },
    {
      dataIndex: 'user',
      key: 'user',
      render: (_, transaction) => (
        <>
          {transaction.prsAccount ? (
            <span>
              {transaction.prsAccount.user.name}(
              {transaction.prsAccount.user.mixinId})
            </span>
          ) : (
            '-'
          )}
        </>
      ),
      title: 'User',
    },
    {
      dataIndex: 'data',
      key: 'data',
      title: 'data',
    },
    {
      dataIndex: 'processedAt',
      key: 'processedAt',
      title: 'Processed At',
    },
    {
      dataIndex: 'createdAt',
      key: 'createdAt',
      title: 'Created At',
    },
  ];

  return (
    <div>
      <Table
        scroll={{ x: true }}
        columns={columns}
        dataSource={transactions}
        rowKey='id'
        pagination={false}
        size='small'
      />
      <div className='mb-4 text-center'>
        <Button
          type='link'
          loading={loading}
          disabled={!hasNextPage}
          onClick={() => {
            fetchMore({
              variables: {
                type,
                after: endCursor,
              },
            });
          }}
        >
          {hasNextPage ? 'Load More' : 'No More'}
        </Button>
      </div>
    </div>
  );
}
