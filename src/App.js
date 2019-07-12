import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import HelloUser from './Card';


class App extends React.Component {
  
    render() {

    return <div className="App">
      {/* <Card/> */}
      <HelloUser />
    </div>
    }
  };


export default App;

