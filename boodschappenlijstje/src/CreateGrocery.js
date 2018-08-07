import React, { Component } from 'react';
import './App.scss';

class CreateGrocery extends Component {
    constructor(props) {
        super(props);
        this.state = {text: ''};
    }

    handleChange = (e) => {
        this.setState({text: e.target.value})
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const val = this.state.text.trim();

        if (val) {
            this.props.handleSubmit(val);
            this.setState({text: ''});
        }
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} className="grocery-form">
                <input
                    id="new-grocery"
                    name="new-grocery"
                    onChange={this.handleChange}
                    value={this.state.text}
                    className="grocery-input"
                    placeholder="what needs to be done?"
                />
                <button className="green">
                    Add #{this.props.numberOfItems + 1}
                </button>
            </form>
        )
    }
}

export default CreateGrocery
