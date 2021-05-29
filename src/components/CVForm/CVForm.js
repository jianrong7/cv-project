import React from "react";
import './CVForm.css';
import PersonalForm from './PersonalForm.js';

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
                    <textarea rows="3" placeholder="To" />
                    <br />
                </form>
            </div>
        );
    }
}

function CVForm() {
    return (
        <div className='cvform'>
            <PersonalForm />
            <ExperienceForm />
        </div>
    );
}

export default CVForm;