import React, { Component } from 'react';
import './App.css';
import GroceryList from "./GroceryList";
import CreateGrocery from "./CreateGrocery";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {items: [
            {id: 1, text: 'apples'},
            {id: 2, text: 'bananas'},
            {id: 3, text: 'pudding'},
            {id: 4, text: 'beer'},
            {id: 5, text: 'more beer'},
        ]};
    }

    handleSubmit = (value) => {
        const newItem = {
            text: value,
            id: Date.now()
        };
        this.setState(prevState => ({
            items: prevState.items.concat(newItem),
        }));
    }

    deleteItem = (id) => {
        this.setState(prevState => ({
            items: prevState.items.filter(item => item.id !== id),
        }));
    }

    render() {
        return (
            <div className="app-wrapper">
                <h3 className="title">GROCERIES</h3>
                <div>
                    <CreateGrocery handleSubmit={this.handleSubmit} numberOfItems={this.state.items.length}/>
                    <GroceryList onDelete={this.deleteItem} items={this.state.items}/>
                </div>
            </div>
        );
    }
}

export default App;
