import React, { Component } from 'react';
import Header from './components/Header';
import ProgressBar from './components/ProgressBar';
import PageContent from './components/PageContent';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <ProgressBar />
        <PageContent />
        <Footer />
      </div >
    );
  }
}

export default App;
