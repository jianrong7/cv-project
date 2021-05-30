import React from "react";
import './CVForm.css';
import PersonalForm from './PersonalForm.js';
import ExperienceForm from './ExperienceForm.js';
import EducationForm from './EducationForm.js';


function CVForm(props) {
    return (
        <div className='cvform'>
            <PersonalForm setMainState={props.setMainState} />
            <ExperienceForm />
            <EducationForm />
        </div>
    );
}

export default CVForm;