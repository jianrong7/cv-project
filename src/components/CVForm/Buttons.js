import React from "react";

class DeleteButton extends React.Component {
    constructor(props) {
        super(props);
    }

    handleDelete() {
        
    }

    render() {
        return (
            <button onClick={this.handleDelete}>Delete</button>
        );
    }
}

class AddButton extends React.Component {
    constructor(props) {
        super(props);
    }

    handleAdd(e) {

    }

    render() {
        return (
            <button onClick={this.handleAdd}>Add</button>
        );
    }
}

export { DeleteButton, AddButton };