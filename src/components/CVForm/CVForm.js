import React from "react";
import './CVForm.css';
import PersonalForm from './PersonalForm.js';
import ExperienceForm from './ExperienceForm.js';
import EducationForm from './EducationForm.js';
import { AddButton } from './Buttons.js';


function CVForm(props) {
    return (
        <div className='cvform'>
            <PersonalForm setMainState={props.setMainState} />
            <ExperienceForm />
            <AddButton form='experience' />
            <EducationForm />
            <AddButton form='education' />
        </div>
    );
}

export default CVForm;