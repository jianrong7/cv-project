import React from "react";
import './CVPreview.css';
import Header from './Header.js';

function CVPreview(props) {
    console.log(props)
    const { personalForm } = props.previewMainState;
    return (
        <div className='cvpreview'>
            <Header personalForm={personalForm} />
        </div>
    );
}

export default CVPreview;