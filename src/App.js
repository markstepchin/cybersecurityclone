import React, { Component } from 'react';
import Header from './components/Header';
import ProgressBar from './components/ProgressBar';
import Form from './components/Form';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <ProgressBar />
        <Form />
        <Footer />
      </div >
    );
  }
}

export default App;
