import React, {Component} from 'react';
import axios from 'axios';

export default class Userinfo extends Component {
  constructor (props) {
    super (props);
    this.state = {
      userinfo: [],
    };
    this.server = 'https://koreanjson.com';
  }

  componentDidMount () {
    axios
      .get (this.server + this.props.location.pathname)
      .then (res => {
        console.log (res.data);
        this.setState ({userinfo: res.data});
      })
      .catch (err => {
        console.log (err);
      });
  }

  render () {
    return (
      <div>
        <div className="userInfo">
          <h1>{this.state.userinfo.name}</h1>
          <p>{this.state.userinfo.email}</p>
          <p>{this.state.userinfo.phone}</p>
          <p>{this.state.userinfo.street}</p>
        </div>

        <div className="todoList" />
      </div>
    );
  }
}
