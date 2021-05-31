import React from "react";
import uniqid from "uniqid";

class DeleteButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = { form: '', id: '' };
        this.handleDelete = this.handleDelete.bind(this);
    }
    componentDidMount() {
        const idValue = this.props.className;
        const formValue = this.props.form;
        this.setState({ form: formValue, id: idValue });
    }

    handleDelete(e) {
        console.log([this.state.form, this.state.id])
        this.props.deleteForm([this.state.form, this.state.id])
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
        this.setState({ form: formValue })
    }

    handleAdd(e) {
        this.props.addForm(this.state.form);
    }

    render() {
        return (
            <button onClick={this.handleAdd}>Add</button>
        );
    }
}

class LoadExample extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            personalForm: {
                name: 'John Doe',
                email: 'johndoe@gmail.com',
                phoneNumber: '98765432',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eleifend, felis at pellentesque malesuada, dui augue cursus nisi, sed lacinia neque justo nec sapien. Morbi egestas vel elit sit amet bibendum. Quisque vestibulum, erat in blandit euismod, ante orci condimentum quam, id dictum neque elit malesuada leo. Duis molestie est a enim varius, in vulputate neque iaculis. Praesent sit amet ipsum consequat, dictum nisl nec, lobortis est. Nullam sit amet imperdiet lorem. Sed mollis, lacus vel dapibus ultricies, purus orci venenatis lorem, sed dapibus diam elit fermentum quam. Praesent pulvinar at erat porttitor convallis. Donec sed purus turpis. Etiam faucibus, libero at tincidunt suscipit, massa tortor porttitor ex, vel sollicitudin felis felis vel sapien.'
            },
            experienceForms: [
                {
                    id: uniqid(),
                    position: 'Full Stack Engineer Intern',
                    company: 'ABC Company',
                    city: 'DEF Country',
                    from: 'Nov 2001',
                    to: 'May 2002'
                },
                {
                    id: uniqid(),
                    position: 'Full Stack Engineer Intern',
                    company: 'GHI Company',
                    city: 'JKL Country',
                    from: 'May 2002',
                    to: 'Dec 2002'
                },
                {
                    id: uniqid(),
                    position: 'Junior Full Stack Engineer',
                    company: 'MNO Company',
                    city: 'PQR Country',
                    from: 'Dec 2002',
                    to: 'Dec 2005'
                },
                {
                    id: uniqid(),
                    position: 'Full Stack Engineer',
                    company: 'STU Company',
                    city: 'WXY Country',
                    from: 'Dec 2005',
                    to: 'Jan 2010'
                },
            ],
            educationForms: [
                {
                    id: uniqid(),
                    school: 'National University of ABC',
                    city: 'DEF',
                    degree: 'Bachelor of Computer Science',
                    from: 'Aug 1998',
                    to: 'Aug 2002'
                },
                {
                    id: uniqid(),
                    school: 'GHI University',
                    city: 'JKL',
                    degree: 'Masters in Computer Science',
                    from: 'Aug 2010',
                    to: 'Aug 2013'
                },
            ],    
        }
        this.handleExample = this.handleExample.bind(this);
    }

    handleExample() {
        this.props.loadExample(this.state)
    }    

    render() {
        return (
            <button onClick={this.handleExample} className="loadExampleBtn">Load Example</button>
        );
    }
}

class ResetButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            personalForm: {
                name: '',
                email: '',
                phoneNumber: '',
                description: ''
            },
            experienceForms: [
                {
                    id: uniqid(),
                    position: '',
                    company: '',
                    city: '',
                    from: '',
                    to: ''
                },
            ],
            educationForms: [
                {
                    id: uniqid(),
                    school: '',
                    city: '',
                    degree: '',
                    from: '',
                    to: ''
                },
            ],    
        }
        this.handleReset = this.handleReset.bind(this);
    }

    handleReset() {
        this.props.reset(this.state)
    }

    render() {
        return (
            <button onClick={this.handleReset} className="resetBtn">Reset</button>
        );
    }
}

class GenerateCV extends React.Component {

    render() {
        return (
            <button onClick={() => window.print()} className="generateCVBtn">Generate PDF</button>
        );
    }
}

export { DeleteButton, AddButton, LoadExample, ResetButton, GenerateCV };