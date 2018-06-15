import React, { Component } from 'react';
import moment from 'moment';

class Comment extends Component {
  constructor({ id, username, date, body }) {
    super()
    this.id = id;
    this.username = username;
    this.body = body;
    this.date = date;
  }
  render() {
    return (
      <div className="Comment">
        <div className="Comment-text">
          <div key={this.id} className="card">
            <div className="card-body">
              <h5 className="card-title">{this.username} {moment(this.date)
                .format('MM-DD-YYYY - hh:mm a')
                .toString()}</h5>
              <p className="card-text">{this.body}</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}


export default Comment;

