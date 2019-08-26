import React, {Component} from 'react';
import './App.css';
import Users from './Components/Users';
import axios from 'axios';

export default class App extends Component {
  constructor (props) {
    super (props);
    this.state = {
      users: [],
    };
    this.server = 'https://koreanjson.com/';
  }

  componentDidMount () {
    axios
      .get (this.server + 'users')
      .then (res => {
        console.log (res.data);
        this.setState ({users: res.data});
      })
      .catch (err => {
        console.log (err);
      });
  }

  render () {
    return (
      <div className="App">
        <Users userinfo={this.state.users} />
      </div>
    );
  }
}
