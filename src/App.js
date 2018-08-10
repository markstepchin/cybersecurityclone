import React, { Component } from 'react';
import Header from './components/Header';
import ProgressBar from './components/ProgressBar';
import InfoPage from './components/InfoPage';
import Footer from './components/Footer';

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
