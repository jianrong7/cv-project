import React from "react";

class PersonalForm extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.props.setMainState([e.target.parentElement.parentElement.className, e.target.name, e.target.value])
    }

    render() {

        return (
            <div className="personalForm">
                <span>Person Information</span>
                <form>
                    <input
                        type="text"
                        placeholder="Name"
                        name="name"
                        onChange={this.handleChange}
                        value={this.props.state.personalForm.name}
                    />
                    <br />
                    <input
                        type="text" 
                        placeholder="Email"
                        name="email"
                        onChange={this.handleChange}
                        value={this.props.state.personalForm.email}
                    />
                    <br />
                    <input
                        type="text" 
                        placeholder="Phone Number"
                        name="phoneNumber"
                        onChange={this.handleChange}
                        value={this.props.state.personalForm.phoneNumber}
                    />
                    <br />
                    <textarea
                        rows="3"
                        placeholder="Description"
                        name="description"
                        onChange={this.handleChange}
                        value={this.props.state.personalForm.description}
                    />
                    <br />
                </form>
            </div>
        );
    }
}

export default PersonalForm;