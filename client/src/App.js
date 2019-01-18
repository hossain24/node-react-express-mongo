import React, { Component } from 'react';
import './App.css';
import Home from './components/home/home';
import About from './components/about/about';
import Contact from './components/contact/contact';
import Users from './components/users/users';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Home />
        <About />
        <Users />
        <Contact />
      </div>
    );
  }
}

export default App;
