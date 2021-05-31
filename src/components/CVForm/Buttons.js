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
        this.state = { form: '' };
        this.handleAdd = this.handleAdd.bind(this);
    }
    componentDidMount() { 
        const formValue = this.props.form;
        console.log(formValue)
        this.setState({ form: formValue })
    }

    handleAdd(e) {
        this.props.addForm(this.state)
    }

    render() {
        return (
            <button onClick={this.handleAdd}>Add</button>
        );
    }
}

export { DeleteButton, AddButton };