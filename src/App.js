import React, { Component } from 'react';
import Menu from './components/js/Menu'
import Navbar from './components/js/Navbar'
import Footer from './components/js/Footer'
import Content from './contents/Content'
import './components/css/page.css'

class App extends Component {
  render() {
    return (
        <div className="App">
            <Menu />
            <Navbar />
            <div id="page">
                <Content />
            </div>
            <Footer />
        </div>
    );
  }
}

export default App;
