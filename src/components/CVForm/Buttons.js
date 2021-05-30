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

export { DeleteButton };