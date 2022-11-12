import React from 'react';

// component
import { IsMobileProvider } from './provider/IsMobileProvider';
import { Layout } from './Layout/Layout';
import { Index } from './page/Index';

function App() {
  document.title = "2022 F2E 互動式網頁設計";
  return (
    <>
      <IsMobileProvider>
        <Layout>
          <Index/>
        </Layout>
      </IsMobileProvider>
    </>
  );
}

export default App;
