import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import './App.css';
import Dashboard from './pages/Dashboard.tsx'

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql'
});

function App() {
  return (
    <div className="App">
      <ApolloProvider client={client}>
        <Dashboard />
      </ApolloProvider>
    </div>
  );
}

export default App;
