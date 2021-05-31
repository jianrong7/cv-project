import React from "react";
import ExperienceFormItem from "./ExperienceFormItem.js";

function ExperienceForm(props) {
    const { forms, setMainState } = props
    return (
        <div className="experience">
            <span>Experience</span>
            {forms.map(form => {
                return (
                    <ExperienceFormItem
                        id={form.id}
                        setMainState={setMainState}
                    />
                );
            })}
        </div>
    );
}

export default ExperienceForm;