import React from "react";
import { DeleteButton } from "./Buttons.js";

export default function ExperienceFormItem(props) {
    const { id } = props;
    return(
        <div className={id}>
            <form className={id}>
                <input type="text" placeholder="Position" />
                <br />
                <input type="text" placeholder="Company" />
                <br />
                <input type="text" placeholder="City" />
                <br />
                <input type="text" placeholder="From" />
                <br />
                <input type="text" placeholder="To" />
                <br />
            </form>
            <DeleteButton className={id} />
        </div>
    );
}