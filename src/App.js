import React, { Component } from 'react';

import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

import InfoPage from './components/pages/InfoPage';
import OperationsPage from './components/pages/OperationsPage';
import DataPage from './components/pages/DataPage';
import ContactPage from './components/pages/ContactPage';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <DataPage />
        <Footer />
      </div >
    );
  }
}

export default App;
