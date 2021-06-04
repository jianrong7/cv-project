import React, { useState } from "react";
import CVForm from './CVForm/CVForm.js';
import CVPreview from './CVPreview/CVPreview.js';
import uniqid from 'uniqid';
import './styles/Main.css';

function Main(props) {
    const [personalForm, setPersonalForm] = useState({
        name: '',
        email: '',
        phoneNumber: '',
        description: ''
    });
    const [experienceForms, setExperienceForms] = useState([
        {
            id: uniqid(),
            position: '',
            company: '',
            city: '',
            from: '',
            to: ''
        }
    ]);
    const [educationForms, setEducationForms] = useState([
        {
            id: uniqid(),
            school: '',
            city: '',
            degree: '',
            from: '',
            to: ''
        }
    ])

    const setMainState = (newVal) => {
        if (newVal[0] === 'personalForm') {
            setPersonalForm(Object.assign(
                {},
                personalForm,
                { [newVal[1]]: newVal[2] }
            ))
        } else if (newVal[0] === 'experienceForm') {
            const correctID = (form) => form.id === newVal[3];
            const formIndex = experienceForms.findIndex(correctID);

            let experienceFormsTemp = [...experienceForms];
            let experienceFormTemp = {...experienceFormsTemp[formIndex]};
            experienceFormTemp[newVal[1]] = newVal[2];
            experienceFormsTemp[formIndex] = experienceFormTemp
            
            setExperienceForms(experienceFormsTemp)
        } else if (newVal[0] === 'educationForm') {
            const correctID = (form) => form.id === newVal[3];
            const formIndex = educationForms.findIndex(correctID);

            let educationFormsTemp = [...educationForms];
            let educationFormTemp = {...educationFormsTemp[formIndex]};
            educationFormTemp[newVal[1]] = newVal[2];
            educationFormsTemp[formIndex] = educationFormTemp
            
            setEducationForms(educationFormsTemp)
        }
    }

    const addForm = (e) => {
        const emptyExperience = {
            id: uniqid(),
            position: '',
            company: '',
            city: '',
            from: '',
            to: ''
        };
        const emptyEducation = {
            id: uniqid(),
            school: '',
            city: '',
            degree: '',
            from: '',
            to: ''
        };
        if (e === "experience") {
            setExperienceForms([
                ...experienceForms,
                emptyExperience
            ])
        } else if (e === "education") {
            setEducationForms(
                ...educationForms,
                emptyEducation
            )
        }
    }

    const deleteForm = (e) => {
        if (e[0] === "experience") {
            const correctID = (form) => form.id === e[1];
            const formIndex = experienceForms.findIndex(correctID);
            
            let experienceFormsTemp = [...experienceForms];
            experienceFormsTemp.splice(formIndex, 1)

            setExperienceForms(experienceFormsTemp)

        } else if (e[0] === "education") {
            const correctID = (form) => form.id === e[1];
            const formIndex = educationForms.findIndex(correctID);
            
            let educationFormsTemp = [...educationForms];
            educationFormsTemp.splice(formIndex, 1)

            setEducationForms(educationFormsTemp)
        }
    }
    
    const loadExample = (e) => {
        setPersonalForm(e.personalForm);
        setExperienceForms(e.experienceForms);
        setEducationForms(e.educationForms);
    }
    const reset = (e) => {
        setPersonalForm(e.personalForm);
        setExperienceForms(e.experienceForms);
        setEducationForms(e.educationForms);
    }

    return (
        <div className="main">
            <CVForm
                setMainState={setMainState}
                addForm={addForm}
                deleteForm={deleteForm}
                loadExample={loadExample}
                personalForm={personalForm}
                experienceForms={experienceForms}
                educationForms={educationForms}
                reset={reset}
            />
            <CVPreview
                personalForm={personalForm}
                experienceForms={experienceForms}
                educationForms={educationForms}
            />
        </div>
    );
}

export default Main;