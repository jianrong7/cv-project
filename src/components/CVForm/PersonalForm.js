import React from "react";

class PersonalForm extends React.Component {
    handleChange = (e) => {
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
                    />
                    <br />
                    <input
                        type="text" 
                        placeholder="Email"
                        name="email"
                        onChange={this.handleChange}
                    />
                    <br />
                    <input
                        type="text" 
                        placeholder="Phone Number"
                        name="phoneNumber"
                        onChange={this.handleChange}
                    />
                    <br />
                    <textarea
                        rows="3"
                        placeholder="Description"
                        name="description"
                        onChange={this.handleChange}
                    />
                    <br />
                </form>
            </div>
        );
    }
}

export default PersonalForm;