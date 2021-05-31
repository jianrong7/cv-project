import React from "react";

export default function PreviewEducation(props) {
    const educationForms = props.educationForms;

    return (
        <div>
            {educationForms.map(educationForm => {
                return (
                    <div key={educationForm.id}>
                        <p>{educationForm.school}, {educationForm.city}</p>
                        <p>{educationForm.degree}</p>
                        <p>{educationForm.from}</p>
                        <p>{educationForm.to}</p>
                    </div>
                );
            })}
        </div>
    );
}