import React, { Component } from "react";
import "./App.css";
import ListItems from "./components/ListItems";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [], //array to store my todos
      currentItem: {
        text: "", // initialize to empty text
        key: "",
      },
    };
  }
  handleInput = event => {
    this.setState({
      currentItem: {
        text: event.target.value, // value enetered
        key: Date.now(), //generates a distinct number everytime it is called.
      },
    });
  };

  addItem = event => {
    event.preventDefault();
    const newItem = this.state.currentItem;
    if (newItem.text !== "") {
      const newItems = [...this.state.items, newItem]; // create a new array, spread all that is already in old array and append the new item.

      this.setState({
        // update the items array and reset the input and key
        items: newItems,
        currentItem: {
          text: "",
          key: "",
        },
      });
    }
  };

  deleteItem = key => {
    const filteredItems = this.state.items.filter(item => item.key !== key);

    this.setState({
      items: filteredItems,
    });
  };

  setUpdate = (text, key) => {
    const items = this.state.items;
    items.map(item => {
      if (item.key === key) {
        item.text = text;
      }
    });

    this.setState({ items });
  };

  render() {
    return (
      <div className="App">
        <header>
          <form id="to-do-form" onSubmit={this.addItem}>
            <input
              type="text"
              placeholder="Enter Text"
              value={this.state.currentItem.text}
              onChange={this.handleInput}
            />
            <button type="submit">Add</button>
          </form>
        </header>
        <ListItems
          items={this.state.items}
          deleteItem={this.deleteItem}
          setUpdate={this.setUpdate}
        />
      </div>
    );
  }
}

export default App;
