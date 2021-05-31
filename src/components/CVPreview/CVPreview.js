import React from "react";
import './CVPreview.css';
import CVHeader from './CVHeader.js';

function CVPreview(props) {
    const { personalForm, experienceForms, educationForms } = props.previewMainState;
    
    return (
        <div className='cvpreview'>
            <CVHeader personalForm={personalForm} experienceForms={experienceForms} educationForms={educationForms} />
        </div>
    );
}

export default CVPreview;