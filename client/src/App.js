import React, { Component } from 'react';
import './App.css';
import Home from './components/home/home';
import About from './components/about/about';
import Contact from './components/contact/contact';
import Users from './components/users/users';
import UsersRedux from './components/users/usersRedux';
import NewUser from './components/new-user/newUser';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Home />
        <About />
        <Users />
        <UsersRedux />
        <NewUser />
        <Contact />
      </div>

    );
  }
}

export default App;
