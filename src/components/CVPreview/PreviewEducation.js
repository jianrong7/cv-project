import React from "react";

export default function PreviewEducation(props) {
    const educationForms = props.educationForms;

    return (
        <div>
            {educationForms.map(educationForm => {
                return (
                    <div key={educationForm.id} className="educationItem">
                        <p className="educationDegree">{educationForm.degree}</p>
                        <p>{educationForm.school}, {educationForm.city}</p>
                        <p className="previewDate">{educationForm.from} - {educationForm.to}</p>
                    </div>
                );
            })}
        </div>
    );
}