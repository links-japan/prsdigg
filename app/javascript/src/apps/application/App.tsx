import { ApolloProvider } from '@apollo/client';
import { User } from '@graphql';
import { apolloClient, mixinUtils } from '@shared';
import { Col, Layout, Row } from 'antd';
import React, { Suspense } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.less';
import LoadingComponent from './components/LoadingComponent/LoadingComponent';
import './i18n';
import Menus from './Menus';
import Routes from './Routes';
import { CurrentUserContext, MixinContext, PrsdiggContext } from './shared';

export default function App(props: {
  csrfToken: string;
  currentUser?: Partial<User>;
  prsdigg: {
    appId: string;
  };
}) {
  const { csrfToken, currentUser, prsdigg } = props;
  return (
    <Suspense fallback={<LoadingComponent />}>
      <ApolloProvider client={apolloClient('/graphql', csrfToken)}>
        <PrsdiggContext.Provider value={prsdigg}>
          <MixinContext.Provider
            value={{
              mixinAppversion: mixinUtils.appVersion(),
              mixinConversationId: mixinUtils.conversationId(),
              mixinEnv: mixinUtils.environment(),
              mixinImmersive: mixinUtils.immersive(),
            }}
          >
            <CurrentUserContext.Provider value={currentUser}>
              <Router>
                <Layout>
                  <Menus />
                  <Layout.Content
                    style={{ background: '#fff', padding: '1rem 1rem ' }}
                  >
                    <Row justify='center'>
                      <Col
                        flex={1}
                        xs={24}
                        sm={24}
                        md={18}
                        lg={16}
                        xl={14}
                        xxl={12}
                      >
                        <Routes />
                      </Col>
                    </Row>
                  </Layout.Content>
                </Layout>
              </Router>
            </CurrentUserContext.Provider>
          </MixinContext.Provider>
        </PrsdiggContext.Provider>
      </ApolloProvider>
    </Suspense>
  );
}
