import React from "react";

export default function CVHeader(props) {
    const { name, email, phoneNumber, description } = props.personalForm;
    const experienceForms = props.experienceForms;
    const educationForms = props.educationForms;

    return (
        <div>
            <div>
                {name}
            </div>
            <div>
                {email}
            </div>
            <div>
                {phoneNumber}
            </div>
            <div>
                {description}
            </div>
            <div>
                {experienceForms.map(experienceForm => {
                    return (
                        <div key={experienceForm.id}>
                            <p>{experienceForm.position}</p>
                            <p>{experienceForm.company}</p>
                            <p>{experienceForm.city}</p>
                            <p>{experienceForm.from}</p>
                            <p>{experienceForm.to}</p>
                        </div>
                    );
                })}
            </div>
            <div>
                {educationForms.map(educationForm => {
                    return (
                        <div key={educationForm.id}>
                            <p>{educationForm.school}</p>
                            <p>{educationForm.city}</p>
                            <p>{educationForm.degree}</p>
                            <p>{educationForm.from}</p>
                            <p>{educationForm.to}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}