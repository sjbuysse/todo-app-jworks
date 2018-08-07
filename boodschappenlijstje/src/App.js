import React, { Component } from 'react';
import './App.css';
import GroceryList from "./GroceryList";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {items: [
            {id: 1, text: 'apples'},
            {id: 1, text: 'bananas'},
            {id: 1, text: 'pudding'},
            {id: 1, text: 'beer'},
            {id: 1, text: 'more beer'},
        ]};
    }

    render() {
        return (
            <div>
                <h3 className="title">🔥🔥🔥     GROCERIES     🔥🔥🔥</h3>
                <div className="center-container">
                    <GroceryList items={this.state.items}/>
                </div>
            </div>
        );
    }
}

export default App;
