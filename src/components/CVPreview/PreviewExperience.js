import React from "react";

export default function PreviewExperience(props) {
    const experienceForms = props.experienceForms;

    return (
        <div>
            {experienceForms.map(experienceForm => {
                return (
                    <div key={experienceForm.id} className="experienceItem">
                        <p className="experiencePosition">{experienceForm.position}</p>
                        <p>{experienceForm.company}, {experienceForm.city}</p>
                        <p className="previewDate">{experienceForm.from} - {experienceForm.to}</p>
                    </div>
                );
            })}
        </div>
    );
}