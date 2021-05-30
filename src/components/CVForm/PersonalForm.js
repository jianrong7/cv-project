import React from "react";
import uniqid from "uniqid";

class PersonalForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            personalForm: {
                name: '',
                email: '',
                phoneNumber: '',
                description: ''
            }
        }
    }

    handleChange = (e) => {
        this.setState({
            personalForm: {
                [e.target.name]: e.target.value,
                ...this.state                
            }
        })
        this.props.setMainState(this.state)
    }

    render() {
        const { personalForm } = this.state;

        return (
            <div className="personalInformation">
                <span>Person Information</span>
                <form>
                    <input
                        type="text"
                        placeholder="Name"
                        name="name"
                        value={personalForm.value}
                        onChange={this.handleChange}
                    />
                    <br />
                    <input
                        type="text" 
                        placeholder="Email"
                        name="email"
                        value={personalForm.value}
                        onChange={this.handleChange}
                    />
                    <br />
                    <input
                        type="text" 
                        placeholder="Phone Number"
                        name="phoneNumber"
                        value={personalForm.value}
                        onChange={this.handleChange}
                    />
                    <br />
                    <textarea
                        rows="3"
                        placeholder="Description"
                        name="description"
                        value={personalForm.value}
                        onChange={this.handleChange}
                    />
                    <br />
                </form>
            </div>
        );
    }
}

export default PersonalForm;