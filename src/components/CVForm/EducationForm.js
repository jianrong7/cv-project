import React from "react";
import { DeleteButton } from "./Buttons.js";
import uniqid from 'uniqid';

class EducationForm extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="experience">
                <span>Education</span>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" placeholder="School" />
                    <br />
                    <input type="text" placeholder="City" />
                    <br />
                    <input type="text" placeholder="Degree" />
                    <br />
                    <input type="text" placeholder="From" />
                    <br />
                    <input type="text" placeholder="To" />
                    <br />
                </form>
                <DeleteButton />
            </div>
        );
    }
}

export default EducationForm;