import React from 'react';
import Routes from './routes';
import { BrowserRouter as Router } from 'react-router-dom';
import { ApolloProvider } from 'react-apollo';
import client from './apollo';
import styled from 'styled-components';

import AppLayout from './components/Layouts/AppLayout';
import Navbar from './containers/Navbar';
import Sidebar from './containers/Sidebar/Sidebar';
import ResponsiveSidebar from './containers/Sidebar/ResponsiveSidebar';
import ResponsiveNavbar from './containers/ResponsiveNavbar';

const RouteLayout = styled.div`
  width: 94% !important;
`

class App extends React.Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Router>
          <Navbar />
          <ResponsiveNavbar />
          <ResponsiveSidebar />
          <AppLayout>
            <RouteLayout>
              <Routes />
            </RouteLayout>
          </AppLayout>
        </Router>
      </ApolloProvider>
    )
  }
}

export default App;
