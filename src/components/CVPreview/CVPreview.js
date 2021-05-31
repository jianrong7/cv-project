import React from "react";
import './CVPreview.css';
import CVHeader from './CVHeader.js';
import PreviewExperience from './PreviewExperience.js';
import PreviewEducation from './PreviewEducation.js';

function CVPreview(props) {
    const { personalForm, experienceForms, educationForms } = props.previewMainState;
    
    return (
        <div className='cvpreview'>
            <div className="previewHeader">
                <p>{personalForm.name}</p>
                <p>{personalForm.email} | {personalForm.phoneNumber}</p>
                <p>{personalForm.description}</p>
            </div>
            <div className="previewExperience">
                <p>Experience</p>
                <PreviewExperience experienceForms={experienceForms} />
            </div>
            <div className="previewEducation">
                <p>Education</p>
                <PreviewEducation educationForms={educationForms} />
            </div>


            {/* <CVHeader personalForm={personalForm} experienceForms={experienceForms} educationForms={educationForms} /> */}
        </div>
    );
}

export default CVPreview;