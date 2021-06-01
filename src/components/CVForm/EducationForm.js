import React from "react";
import EducationFormItem from "./EducationFormItem.js";

function EducationForm(props) {
    const { forms, setMainState, deleteForm } = props;
    return (
        <div className="education">
            <span>Education</span>
            {forms.map(form => {
                return (
                    <EducationFormItem
                        key={form.id}
                        id={form.id}
                        setMainState={setMainState}
                        deleteForm={deleteForm}
                        state={form}
                    />
                )
            })}
        </div>
    );
}

export default EducationForm;