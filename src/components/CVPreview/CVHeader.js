import React from "react";

export default function CVHeader(props) {
    const { name, email, phoneNumber, description } = props.personalForm;
        
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
        </div>
    );
}