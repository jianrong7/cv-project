import React from "react";
import { DeleteButton } from "./Buttons.js";
import uniqid from 'uniqid';

class ExperienceForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: uniqid()
        }
    }

    render() {
        const { id } = this.state.id;
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
                <DeleteButton id={id} />
            </div>
        );
    }
}

export default ExperienceForm;