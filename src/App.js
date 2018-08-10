import React, { Component } from 'react';
import Header from './components/layout/Header';
import ProgressBar from './components/layout/ProgressBar';
import InfoPage from './components/pages/InfoPage';
import Footer from './components/layout/Footer';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <ProgressBar />
        <InfoPage />
        <Footer />
      </div >
    );
  }
}

export default App;
