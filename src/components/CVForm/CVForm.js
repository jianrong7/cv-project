import React from "react";
import '../styles/CVForm.css';
import PersonalForm from './PersonalForm.js';
import ExperienceForm from './ExperienceForm.js';
import EducationForm from './EducationForm.js';
import { AddButton, LoadExample, ResetButton, GenerateCV } from './Buttons.js';


function CVForm(props) {
    return (
        <div className='cvform'>
            <PersonalForm setMainState={props.setMainState} state={props.state} />
            <ExperienceForm setMainState={props.setMainState} forms={props.experienceForms} deleteForm={props.deleteForm} />
            <AddButton form='experience' addForm={props.addForm} />
            <EducationForm setMainState={props.setMainState} forms={props.educationForms} deleteForm={props.deleteForm} state={props.state} />
            <AddButton form='education' addForm={props.addForm} />
            <LoadExample loadExample={props.loadExample} />
            <ResetButton reset={props.reset} />
            <GenerateCV />
        </div>
    );
}

export default CVForm;