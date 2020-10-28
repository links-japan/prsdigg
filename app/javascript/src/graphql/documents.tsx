import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** An ISO 8601-encoded datetime */
  ISO8601DateTime: any;
};

export type Article = {
  __typename?: 'Article';
  assetId: Scalars['String'];
  author: User;
  authorized?: Maybe<Scalars['Boolean']>;
  content?: Maybe<Scalars['String']>;
  createdAt: Scalars['ISO8601DateTime'];
  intro: Scalars['String'];
  ordersCount: Scalars['Int'];
  price: Scalars['Float'];
  readers: UserConnection;
  revenue: Scalars['Float'];
  title: Scalars['String'];
  updatedAt?: Maybe<Scalars['ISO8601DateTime']>;
  uuid: Scalars['ID'];
};


export type ArticleReadersArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

/** The connection type for Article. */
export type ArticleConnection = {
  __typename?: 'ArticleConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<ArticleEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<Article>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** Total # of objects returned from this Plural Query */
  totalCount: Scalars['Int'];
};

/** An edge in a connection. */
export type ArticleEdge = {
  __typename?: 'ArticleEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node?: Maybe<Article>;
};

/** Autogenerated input type of CreateArticleMutation */
export type CreateArticleMutationInput = {
  title: Scalars['String'];
  intro: Scalars['String'];
  content: Scalars['String'];
  price: Scalars['Float'];
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
};

/** Autogenerated return type of CreateArticleMutation */
export type CreateArticleMutationPayload = {
  __typename?: 'CreateArticleMutationPayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  createdAt: Scalars['ISO8601DateTime'];
  error?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['ISO8601DateTime']>;
};


export type Mutation = {
  __typename?: 'Mutation';
  createArticle?: Maybe<CreateArticleMutationPayload>;
  createdAt: Scalars['ISO8601DateTime'];
  updatedAt?: Maybe<Scalars['ISO8601DateTime']>;
};


export type MutationCreateArticleArgs = {
  input: CreateArticleMutationInput;
};

export type Order = {
  __typename?: 'Order';
  createdAt: Scalars['ISO8601DateTime'];
  item: Article;
  payer: User;
  receiver: User;
  state: Scalars['String'];
  total: Scalars['Float'];
  traceId: Scalars['ID'];
  updatedAt?: Maybe<Scalars['ISO8601DateTime']>;
};

/** Information about pagination in a connection. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

export type Payment = {
  __typename?: 'Payment';
  amount: Scalars['Float'];
  assetId: Scalars['String'];
  createdAt: Scalars['ISO8601DateTime'];
  memo?: Maybe<Scalars['String']>;
  order: Order;
  payer: User;
  snapshotId: Scalars['String'];
  state: Scalars['String'];
  traceId: Scalars['ID'];
  updatedAt?: Maybe<Scalars['ISO8601DateTime']>;
};

/** The connection type for Payment. */
export type PaymentConnection = {
  __typename?: 'PaymentConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<PaymentEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<Payment>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** Total # of objects returned from this Plural Query */
  totalCount: Scalars['Int'];
};

/** An edge in a connection. */
export type PaymentEdge = {
  __typename?: 'PaymentEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node?: Maybe<Payment>;
};

export type Query = {
  __typename?: 'Query';
  article?: Maybe<Article>;
  articleConnection: ArticleConnection;
  createdAt: Scalars['ISO8601DateTime'];
  myArticleConnection: ArticleConnection;
  myPaymentConnection: PaymentConnection;
  myTransferConnection: TransferConnection;
  updatedAt?: Maybe<Scalars['ISO8601DateTime']>;
};


export type QueryArticleArgs = {
  uuid: Scalars['ID'];
};


export type QueryArticleConnectionArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryMyArticleConnectionArgs = {
  type: Scalars['String'];
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryMyPaymentConnectionArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryMyTransferConnectionArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

export type Transfer = {
  __typename?: 'Transfer';
  amount: Scalars['Float'];
  assetId: Scalars['String'];
  createdAt: Scalars['ISO8601DateTime'];
  memo?: Maybe<Scalars['String']>;
  processedAt: Scalars['ISO8601DateTime'];
  receiver: User;
  snapshotId: Scalars['String'];
  traceId: Scalars['ID'];
  transferType: Scalars['String'];
  updatedAt?: Maybe<Scalars['ISO8601DateTime']>;
};

/** The connection type for Transfer. */
export type TransferConnection = {
  __typename?: 'TransferConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<TransferEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<Transfer>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** Total # of objects returned from this Plural Query */
  totalCount: Scalars['Int'];
};

/** An edge in a connection. */
export type TransferEdge = {
  __typename?: 'TransferEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node?: Maybe<Transfer>;
};

export type User = {
  __typename?: 'User';
  avatarUrl: Scalars['String'];
  createdAt: Scalars['ISO8601DateTime'];
  id: Scalars['Int'];
  mixinId: Scalars['String'];
  mixinUuid: Scalars['String'];
  name: Scalars['String'];
  updatedAt?: Maybe<Scalars['ISO8601DateTime']>;
};

/** The connection type for User. */
export type UserConnection = {
  __typename?: 'UserConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<UserEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<User>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** Total # of objects returned from this Plural Query */
  totalCount: Scalars['Int'];
};

/** An edge in a connection. */
export type UserEdge = {
  __typename?: 'UserEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node?: Maybe<User>;
};


export const CreateArticleDocument = gql`
    mutation CreateArticle($input: CreateArticleMutationInput!) {
  createArticle(input: $input) {
    error
  }
}
    `;
export type CreateArticleMutationFn = Apollo.MutationFunction<CreateArticleMutation, CreateArticleMutationVariables>;

/**
 * __useCreateArticleMutation__
 *
 * To run a mutation, you first call `useCreateArticleMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateArticleMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createArticleMutation, { data, loading, error }] = useCreateArticleMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateArticleMutation(baseOptions?: Apollo.MutationHookOptions<CreateArticleMutation, CreateArticleMutationVariables>) {
        return Apollo.useMutation<CreateArticleMutation, CreateArticleMutationVariables>(CreateArticleDocument, baseOptions);
      }
export type CreateArticleMutationHookResult = ReturnType<typeof useCreateArticleMutation>;
export type CreateArticleMutationResult = Apollo.MutationResult<CreateArticleMutation>;
export type CreateArticleMutationOptions = Apollo.BaseMutationOptions<CreateArticleMutation, CreateArticleMutationVariables>;
export const ArticleConnectionDocument = gql`
    query ArticleConnection($after: String) {
  articleConnection(after: $after) {
    nodes {
      uuid
      title
      intro
      price
      revenue
      ordersCount
      author {
        name
        avatarUrl
      }
      createdAt
    }
    pageInfo {
      hasNextPage
      endCursor
    }
  }
}
    `;

/**
 * __useArticleConnectionQuery__
 *
 * To run a query within a React component, call `useArticleConnectionQuery` and pass it any options that fit your needs.
 * When your component renders, `useArticleConnectionQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useArticleConnectionQuery({
 *   variables: {
 *      after: // value for 'after'
 *   },
 * });
 */
export function useArticleConnectionQuery(baseOptions?: Apollo.QueryHookOptions<ArticleConnectionQuery, ArticleConnectionQueryVariables>) {
        return Apollo.useQuery<ArticleConnectionQuery, ArticleConnectionQueryVariables>(ArticleConnectionDocument, baseOptions);
      }
export function useArticleConnectionLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ArticleConnectionQuery, ArticleConnectionQueryVariables>) {
          return Apollo.useLazyQuery<ArticleConnectionQuery, ArticleConnectionQueryVariables>(ArticleConnectionDocument, baseOptions);
        }
export type ArticleConnectionQueryHookResult = ReturnType<typeof useArticleConnectionQuery>;
export type ArticleConnectionLazyQueryHookResult = ReturnType<typeof useArticleConnectionLazyQuery>;
export type ArticleConnectionQueryResult = Apollo.QueryResult<ArticleConnectionQuery, ArticleConnectionQueryVariables>;
export const ArticleDocument = gql`
    query Article($uuid: ID!, $readerAfter: String) {
  article(uuid: $uuid) {
    uuid
    title
    intro
    content
    price
    assetId
    authorized
    author {
      name
      avatarUrl
    }
    readers(after: $readerAfter) {
      nodes {
        name
        avatarUrl
      }
      pageInfo {
        hasNextPage
        endCursor
      }
    }
    createdAt
  }
}
    `;

/**
 * __useArticleQuery__
 *
 * To run a query within a React component, call `useArticleQuery` and pass it any options that fit your needs.
 * When your component renders, `useArticleQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useArticleQuery({
 *   variables: {
 *      uuid: // value for 'uuid'
 *      readerAfter: // value for 'readerAfter'
 *   },
 * });
 */
export function useArticleQuery(baseOptions?: Apollo.QueryHookOptions<ArticleQuery, ArticleQueryVariables>) {
        return Apollo.useQuery<ArticleQuery, ArticleQueryVariables>(ArticleDocument, baseOptions);
      }
export function useArticleLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ArticleQuery, ArticleQueryVariables>) {
          return Apollo.useLazyQuery<ArticleQuery, ArticleQueryVariables>(ArticleDocument, baseOptions);
        }
export type ArticleQueryHookResult = ReturnType<typeof useArticleQuery>;
export type ArticleLazyQueryHookResult = ReturnType<typeof useArticleLazyQuery>;
export type ArticleQueryResult = Apollo.QueryResult<ArticleQuery, ArticleQueryVariables>;
export const MyArticleConnectionDocument = gql`
    query MyArticleConnection($type: String!, $after: String) {
  myArticleConnection(type: $type, after: $after) {
    nodes {
      uuid
      title
      intro
      price
      revenue
      ordersCount
      author {
        name
        avatarUrl
      }
      createdAt
    }
    pageInfo {
      hasNextPage
      endCursor
    }
  }
}
    `;

/**
 * __useMyArticleConnectionQuery__
 *
 * To run a query within a React component, call `useMyArticleConnectionQuery` and pass it any options that fit your needs.
 * When your component renders, `useMyArticleConnectionQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMyArticleConnectionQuery({
 *   variables: {
 *      type: // value for 'type'
 *      after: // value for 'after'
 *   },
 * });
 */
export function useMyArticleConnectionQuery(baseOptions?: Apollo.QueryHookOptions<MyArticleConnectionQuery, MyArticleConnectionQueryVariables>) {
        return Apollo.useQuery<MyArticleConnectionQuery, MyArticleConnectionQueryVariables>(MyArticleConnectionDocument, baseOptions);
      }
export function useMyArticleConnectionLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MyArticleConnectionQuery, MyArticleConnectionQueryVariables>) {
          return Apollo.useLazyQuery<MyArticleConnectionQuery, MyArticleConnectionQueryVariables>(MyArticleConnectionDocument, baseOptions);
        }
export type MyArticleConnectionQueryHookResult = ReturnType<typeof useMyArticleConnectionQuery>;
export type MyArticleConnectionLazyQueryHookResult = ReturnType<typeof useMyArticleConnectionLazyQuery>;
export type MyArticleConnectionQueryResult = Apollo.QueryResult<MyArticleConnectionQuery, MyArticleConnectionQueryVariables>;
export const MyPaymentConnectionDocument = gql`
    query MyPaymentConnection($after: String) {
  myPaymentConnection(after: $after) {
    nodes {
      traceId
      snapshotId
      amount
      assetId
      state
    }
    pageInfo {
      hasNextPage
      endCursor
    }
  }
}
    `;

/**
 * __useMyPaymentConnectionQuery__
 *
 * To run a query within a React component, call `useMyPaymentConnectionQuery` and pass it any options that fit your needs.
 * When your component renders, `useMyPaymentConnectionQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMyPaymentConnectionQuery({
 *   variables: {
 *      after: // value for 'after'
 *   },
 * });
 */
export function useMyPaymentConnectionQuery(baseOptions?: Apollo.QueryHookOptions<MyPaymentConnectionQuery, MyPaymentConnectionQueryVariables>) {
        return Apollo.useQuery<MyPaymentConnectionQuery, MyPaymentConnectionQueryVariables>(MyPaymentConnectionDocument, baseOptions);
      }
export function useMyPaymentConnectionLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MyPaymentConnectionQuery, MyPaymentConnectionQueryVariables>) {
          return Apollo.useLazyQuery<MyPaymentConnectionQuery, MyPaymentConnectionQueryVariables>(MyPaymentConnectionDocument, baseOptions);
        }
export type MyPaymentConnectionQueryHookResult = ReturnType<typeof useMyPaymentConnectionQuery>;
export type MyPaymentConnectionLazyQueryHookResult = ReturnType<typeof useMyPaymentConnectionLazyQuery>;
export type MyPaymentConnectionQueryResult = Apollo.QueryResult<MyPaymentConnectionQuery, MyPaymentConnectionQueryVariables>;
export const MyTransferConnectionDocument = gql`
    query MyTransferConnection($after: String) {
  myTransferConnection(after: $after) {
    nodes {
      traceId
      snapshotId
      amount
      assetId
      transferType
    }
    pageInfo {
      hasNextPage
      endCursor
    }
  }
}
    `;

/**
 * __useMyTransferConnectionQuery__
 *
 * To run a query within a React component, call `useMyTransferConnectionQuery` and pass it any options that fit your needs.
 * When your component renders, `useMyTransferConnectionQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMyTransferConnectionQuery({
 *   variables: {
 *      after: // value for 'after'
 *   },
 * });
 */
export function useMyTransferConnectionQuery(baseOptions?: Apollo.QueryHookOptions<MyTransferConnectionQuery, MyTransferConnectionQueryVariables>) {
        return Apollo.useQuery<MyTransferConnectionQuery, MyTransferConnectionQueryVariables>(MyTransferConnectionDocument, baseOptions);
      }
export function useMyTransferConnectionLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MyTransferConnectionQuery, MyTransferConnectionQueryVariables>) {
          return Apollo.useLazyQuery<MyTransferConnectionQuery, MyTransferConnectionQueryVariables>(MyTransferConnectionDocument, baseOptions);
        }
export type MyTransferConnectionQueryHookResult = ReturnType<typeof useMyTransferConnectionQuery>;
export type MyTransferConnectionLazyQueryHookResult = ReturnType<typeof useMyTransferConnectionLazyQuery>;
export type MyTransferConnectionQueryResult = Apollo.QueryResult<MyTransferConnectionQuery, MyTransferConnectionQueryVariables>;