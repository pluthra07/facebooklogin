import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login';

class App extends Component {
  componentClicked = (e) => {
    e.preventDefault();
    console.log("in componentClicked");
  }

  responseFacebook = (response) => {
    console.log("in responseFacebook " + response);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome</h1>
        </header>
        <p>
          <FacebookLogin
            appId="158541188185887"
            fields="name,email,picture"
            scope="public_profile,user_friends,user_actions.books"
            onClick={this.componentClicked}
            callback={this.responseFacebook} />
        </p>
      </div>
    );
  }
}

export default App;
