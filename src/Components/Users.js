import React, {Component} from 'react';
import axios from 'axios';
import {BrowserRouter as Link} from 'react-router-dom';

export default class Users extends Component {
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
        // console.log (res.data);
        this.setState ({users: res.data});
      })
      .catch (err => {
        console.log (err);
      });
  }

  render () {
    return (
      <ul>
        <h1>유저리스트</h1>
        {this.state.users.map (user => (
          <li key={user.id} userinfo={user}>
            <Link to={`/user/${user.id}`}>{user.name}</Link>
          </li>
        ))}
      </ul>
    );
  }
}
