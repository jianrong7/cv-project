import React from "react";

function PersonalForm(props) {

    const handleChange = (e) => {
        props.setMainState([e.target.parentElement.parentElement.className, e.target.name, e.target.value])
    }

    return (
        <div className="personalForm">
            <span>Person Information</span>
            <form>
                <input
                    type="text"
                    placeholder="Name"
                    name="name"
                    onChange={handleChange}
                    value={props.personalForm.name}
                />
                <br />
                <input
                    type="text" 
                    placeholder="Email"
                    name="email"
                    onChange={handleChange}
                    value={props.personalForm.email}
                />
                <br />
                <input
                    type="text" 
                    placeholder="Phone Number"
                    name="phoneNumber"
                    onChange={handleChange}
                    value={props.personalForm.phoneNumber}
                />
                <br />
                <textarea
                    rows="3"
                    placeholder="Description"
                    name="description"
                    onChange={handleChange}
                    value={props.personalForm.description}
                />
                <br />
            </form>
        </div>
    );
}

export default PersonalForm;