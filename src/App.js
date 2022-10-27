import React from 'react';
import { Container } from 'react-bootstrap';

// component
import { Layout } from './Layout/Layout';
import { Index } from './page/Index';

function App() {
  document.title = "2022 F2E 互動式網頁設計"
  return (
    <div className="App">
      <Layout>
        <Index/>
      </Layout>
    </div>
  );
}

export default App;
