import React from "react";
import './CVPreview.css';
import CVHeader from './CVHeader.js';

function CVPreview(props) {
    const { personalForm, educationForm, experienceForm } = props.previewMainState;
    
    return (
        <div className='cvpreview'>
            <CVHeader personalForm={personalForm} />
        </div>
    );
}

export default CVPreview;