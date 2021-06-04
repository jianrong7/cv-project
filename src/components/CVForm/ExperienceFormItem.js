import React from "react";
import { DeleteButton } from "./Buttons.js";

export default function ExperienceFormItem(props) {
    const handleChange = (e) => {
        props.setMainState(['experienceForm', e.target.name, e.target.value, e.target.parentElement.className])
    }

    const { id, deleteForm, state } = props;
    return(
        <div>
            <form className={id}>
                <input
                    type="text"
                    placeholder="Position"
                    name="position"
                    onChange={handleChange}
                    value={state.position}
                />
                <br />
                <input
                    type="text"
                    placeholder="Company"
                    name="company"
                    onChange={handleChange}
                    value={state.company}
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
            <DeleteButton form="experience" className={id} deleteForm={deleteForm} />
        </div>
    );

}