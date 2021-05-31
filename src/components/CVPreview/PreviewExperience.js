import React from "react";

export default function PreviewExperience(props) {
    const experienceForms = props.experienceForms;

    return (
        <div>
            {experienceForms.map(experienceForm => {
                return (
                    <div key={experienceForm.id}>
                        <p>{experienceForm.position}</p>
                        <p>{experienceForm.company}, {experienceForm.city}</p>
                        <p>{experienceForm.from} - {experienceForm.to}</p>
                    </div>
                );
            })}
        </div>
    );
}