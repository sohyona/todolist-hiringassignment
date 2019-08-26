import React, {Component} from 'react';
import axios from 'axios';
// import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
// import TodoListItem from './TodoListItem';
import {Dropdown} from 'react-bootstrap';

export default class Userinfo extends Component {
  constructor (props) {
    super (props);
    this.state = {
      userinfo: [],
      todoList: [],
    };
    this.server = 'https://koreanjson.com';
  }

  componentDidMount () {
    axios
      .get (this.server + this.props.location.pathname)
      .then (res => {
        // console.log (res.data);
        this.setState ({userinfo: res.data});
      })
      .catch (err => {
        console.log (err);
      });

    axios
      .get (this.server + '/todos?userId=' + this.props.match.params.id)
      .then (res => {
        this.setState ({todoList: res.data});
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

        <div className="todoListTable">
          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              Todo List
            </Dropdown.Toggle>

            <Dropdown.Menu>
              {this.state.todoList.map (item => (
                <Dropdown.Item key={item.id}>
                  {item.title}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
    );
  }
}
