import React from 'react';
import { Container } from 'react-bootstrap';

// component
import { Layout } from './Layout/Layout';
import { Index } from './page/Index';

function App() {
  return (
    <div className="App">
      <Layout>
        <Index/>
      </Layout>
    </div>
  );
}

export default App;
