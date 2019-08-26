import React, {Component} from 'react';
import './App.css';
import Users from './Components/Users';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Nav from './Components/Nav';
import Userinfo from './Components/Userinfo';

export default class App extends Component {
  render () {
    return (
      <Router>
        <div className="App">
          <Nav />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/users" component={Users} />
            <Route path="/user/:id" component={Userinfo} />
          </Switch>
        </div>
      </Router>
    );
  }
}

const Home = () => (
  <div className="container">
    <h1>어플리케이션을 골라주세요</h1>
    <a href="/users"><h1>투두</h1></a>
    <a href="/users"><h1>게시판</h1></a>
  </div>
);
