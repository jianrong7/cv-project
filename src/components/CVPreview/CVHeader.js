import React from "react";

export default function CVHeader(props) {
    const { name, email, phoneNumber, description } = props.personalForm;
    const experienceForms = props.experienceForms;

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
                        <div>
                            <p>{experienceForm.id}</p>
                            <p>{experienceForm.position}</p>
                            <p>{experienceForm.company}</p>
                            <p>{experienceForm.city}</p>
                            <p>{experienceForm.from}</p>
                            <p>{experienceForm.to}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}