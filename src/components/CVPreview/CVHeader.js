import React from "react";

export default function CVHeader(props) {
    const { name } = props.personalForm;
        
    return (
        <div>{name}</div>
    );
}