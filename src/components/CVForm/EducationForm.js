import React from "react";
import { DeleteButton } from "./Buttons.js";

class EducationForm extends React.Component {
    constructor(props) {
        super(props);
    }
    handleChange = (e) => {
        this.props.setMainState([e.target.parentElement.parentElement.className, e.target.name, e.target.value])
    }

    render() {
        return (
            <div className="experience">
                <span>Education</span>
                <form onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        placeholder="School"
                        name="school"
                        onChange={this.handleChange}
                    />
                    <br />
                    <input
                        type="text"
                        placeholder="City"
                        name="city"
                        onChange={this.handleChange}
                    />
                    <br />
                    <input
                        type="text"
                        placeholder="Degree"
                        name="degree"
                        onChange={this.handleChange}
                    />
                    <br />
                    <input
                        type="text"
                        placeholder="From"
                        name="from"
                        onChange={this.handleChange}
                    />
                    <br />
                    <input
                        type="text"
                        placeholder="To"
                        name="to"
                        onChange={this.handleChange}
                    />
                    <br />
                </form>
                <DeleteButton />
            </div>
        );
    }
}

export default EducationForm;