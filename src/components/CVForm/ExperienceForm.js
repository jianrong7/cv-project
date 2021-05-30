import React from "react";

class ExperienceForm extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="experience">
                <span>Experience</span>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" placeholder="Position" />
                    <br />
                    <input type="text" placeholder="Company" />
                    <br />
                    <input type="text" placeholder="City" />
                    <br />
                    <input type="text" placeholder="From" />
                    <br />
                    <input type="text" placeholder="To" />
                    <br />
                </form>
            </div>
        );
    }
}

export default ExperienceForm;