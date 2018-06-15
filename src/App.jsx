import React, { Component } from 'react';
import './App.css';
import Comment from './components/Comment';
import Data from './components/Data.js';
import lodash from 'lodash';
import shortid from 'short-id';


class App extends Component {
  constructor() {
    super();
    this.state = {
      chirps: Data,
      username: '',
      body: '',
    };
  }
  handleChangeUserName(ev) {
    this.setState({
      username: ev.target.value,
    });
  }
  handleChangeBody(ev) {
    this.setState({
      body: ev.target.value,
    });
  }

  handleClick() {
    let id = shortid.generate();
    let username = this.state.username;
    let body = this.state.body;
    let date = new Date();

    if(username === ''|| body === '') {
      alert('Please insert a username and/or comment!');
      return;
    }

    let chirp = {
      id,
      body,
      date,
      username,
    };

    let chirps = [...this.state.chirps, chirp];
    
    // this clears out the input fields
    this.setState({
      username: '',
      body: '',
      chirps,
    });
  }

  render() {
    return (
      <div className="App">
        <div className="custom">
          <img src="https://upload.wikimedia.org/wikipedia/commons/3/33/Vanamo_Logo.png" className="App-logo" alt="logo" />
          <header className="App-header d-flex justify-content-center align-items-center">
            <h1 className="App-title">Welcome to Chirper</h1>
          </header>
          <div>
            The purpose of this site is to be a simplistic version of what Twitter is.
          </div>
        </div>
        <br/>
        <div>
          <input
            placeholder='Insert Username!'
            type="text"
            value={this.state.username}
            onChange={(ev) => {
              this.handleChangeUserName(ev);
            }}
          />
          <input
            placeholder='Insert Comment!'
            type="text"
            value={this.state.body}
            onChange={(ev) => {
              this.handleChangeBody(ev);
            }}
          />
          <button
            onClick={() => {
              this.handleClick();
            }}>
            SUBMIT
                  </button>
        </div>
        <br />
        {lodash.map(
          this.state.chirps,
          ({ id, username, body, date }) => {
            return (
              <Comment
                key={id}
                id={id}
                username={username}
                body={body}
                date={date}
              />
            );
          },
        )}
      </div>
    );
  }
}
export default App;
