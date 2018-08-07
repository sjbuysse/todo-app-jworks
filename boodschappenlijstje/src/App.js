import React, { Component } from 'react';
import './App.css';
import GroceryList from "./GroceryList";
import CreateGrocery from "./CreateGrocery";
import SortButtons from "./SortButtons";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {items: []};
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

    sortAscendingDate = () => {
        this.setState(prevState => ({
            items: prevState.items.sort((item1, item2) => item2.id - item1.id)
        }));
    }

    sortAscendingAlphabet = () => {
        this.setState(prevState => ({
            items: prevState.items.sort((item1, item2) => item1.text.localeCompare(item2.text))
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
                <div className="list-wrapper">
                    <SortButtons onSortDate={this.sortAscendingDate} onSortAlphabet={this.sortAscendingAlphabet}/>
                    <CreateGrocery handleSubmit={this.handleSubmit} numberOfItems={this.state.items.length}/>
                    <GroceryList onDelete={this.deleteItem} items={this.state.items}/>
                </div>
            </div>
        );
    }
}

export default App;
