import React, {Component} from 'react';

export default class Users extends Component {
  constructor (props) {
    super (props);
  }

  render () {
    return (
      <ul>
        {this.props.userinfo.map (user => <li>{user.name}</li>)}
      </ul>
    );
  }
}
