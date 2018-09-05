import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      picture: "",
      name: "",
      friends: [
        {
          name: "404 not found",
          picture: "https://http.cat/404"
        },
        {
          name: "200 ok",
          picture: "https://http.cat/200"
        }
      ]
    };
  }

  handlePictureChange = e => {
    this.setState({ picture: e.target.value });
  };

  handleNameChange = e => {
    this.setState({ name: e.target.value });
  };

  handleAddFriendClick = () => {
    // destructuring to get three variable off stte
    const { friends, picture, name } = this.state;
    // making a copy of friends so we don't mutate state
    let friendsCopy = this.state.friends.slice();
    //pushing a new object to the copy array, the object
    //has two keys:
    friendsCopy.push({ name, picture });

    this.setState({ friends: friendsCopy });
  };

  render() {
    return (
      <div className="container">
        <div>
          <label>Picture:</label>
          <input onChange={this.handlePictureChange} />
        </div>

        <div>
          <label>Name:</label>
          <input onChange={this.handleNameChange} />
        </div>

        <button onClick={this.handleAddFriendClick}>Add Friend</button>

        <div>
          {this.state.friends.map(friend => {
            return (
              <div>
                <h3>Name: {friend.name}</h3>
                <img src={friend.picture} />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default App;
