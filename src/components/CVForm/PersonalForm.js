import React from "react";

class PersonalForm extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="personalInformation">
                <span>Person Information</span>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" placeholder="Name" />
                    <br />
                    <input type="text" placeholder="Title" />
                    <br />
                    <input type="text" placeholder="Email" />
                    <br />
                    <input type="text" placeholder="Phone Number" />
                    <br />
                    <textarea rows="3" placeholder="Description" />
                    <br />
                </form>
            </div>
        );
    }
}

export default PersonalForm;