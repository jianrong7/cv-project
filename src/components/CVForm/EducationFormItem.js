import React from "react";
import { DeleteButton } from "./Buttons.js";

export default function EducationFormItem(props) {
    const handleChange = (e) => {
        props.setMainState(['educationForm', e.target.name, e.target.value, e.target.parentElement.className])
    }
    
    const { id, deleteForm, state } = props;
    return(
        <div>
            <form className={id}>
                <input
                    type="text"
                    placeholder="School"
                    name="school"
                    onChange={handleChange}
                    value={state.school}
                />
                <br />
                <input
                    type="text"
                    placeholder="City"
                    name="city"
                    onChange={handleChange}
                    value={state.city}
                />
                <br />
                <input
                    type="text"
                    placeholder="Degree"
                    name="degree"
                    onChange={handleChange}
                    value={state.degree}
                />
                <br />
                <input
                    type="text"
                    placeholder="From"
                    name="from"
                    onChange={handleChange}
                    value={state.from}
                />
                <br />
                <input
                    type="text"
                    placeholder="To"
                    name="to"
                    onChange={handleChange}
                    value={state.to}
                />
                <br />
            </form>
            <DeleteButton form="education" className={id} deleteForm={deleteForm} />
        </div>
    );

}