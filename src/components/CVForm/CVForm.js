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
            <ExperienceForm setMainState={props.setMainState} />
            <AddButton form='experience' addForm={props.addForm} />
            <EducationForm />
            <AddButton form='education' addForm={props.addForm} />
        </div>
    );
}

export default CVForm;