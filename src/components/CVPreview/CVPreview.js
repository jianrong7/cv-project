import React from "react";
import '../styles/CVPreview.css';
import PreviewExperience from './PreviewExperience.js';
import PreviewEducation from './PreviewEducation.js';

function CVPreview(props) {
    const { personalForm, experienceForms, educationForms } = props;
    
    return (
        <div className='cvpreview section-to-print'>
            <div className="previewHeader">
                <p className="previewName">{personalForm.name}</p>
                <p className="previewContact">{personalForm.email} | {personalForm.phoneNumber}</p>
                <p className="previewDescription">{personalForm.description}</p>
            </div>
            <div className="previewExperience">
                <p className="previewExperienceTitle">Experience</p>
                <PreviewExperience experienceForms={experienceForms} />
            </div>
            <div className="previewEducation">
                <p className="previewEducationTitle">Education</p>
                <PreviewEducation educationForms={educationForms} />
            </div>
        </div>
    );
}

export default CVPreview;