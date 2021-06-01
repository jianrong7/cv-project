import React from "react";
import ExperienceFormItem from "./ExperienceFormItem.js";

function ExperienceForm(props) {
    const { forms, setMainState, deleteForm } = props;
    return (
        <div className="experience">
            <span>Experience</span>
            {forms.map(form => {
                return (
                    <ExperienceFormItem
                        key={form.id}
                        id={form.id}
                        setMainState={setMainState}
                        deleteForm={deleteForm}
                        state={form}
                    />
                );
            })}
        </div>
    );
}

export default ExperienceForm;