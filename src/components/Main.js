import React from "react";
import CVForm from './CVForm/CVForm.js';
import CVPreview from './CVPreview/CVPreview.js';
import uniqid from 'uniqid';
import './Main.css';

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            personalForm: {
                name: '',
                email: '',
                phoneNumber: '',
                description: ''
            },
            experienceForms: [
                {
                    id: uniqid(),
                    position: '',
                    company: '',
                    city: '',
                    from: '',
                    to: ''
                },
            ],
            educationForms: [
                {
                    id: uniqid(),
                    school: '',
                    city: '',
                    degree: '',
                    from: '',
                    to: ''
                },
            ],    
        }
        this.setMainState = this.setMainState.bind(this);
        this.addForm = this.addForm.bind(this);
    }

    setMainState(newVal) {
        if (newVal[0] === 'personalForm') {
            this.setState({
                ...this.state,
                personalForm: Object.assign(
                    {},
                    this.state.personalForm,
                    { [newVal[1]]: newVal[2] }
                ),
            })
            console.log(this.state)
        } else if (newVal[0] === 'experienceForm') {
            const correctID = (form) => form.id === newVal[3];
            const formIndex = this.state.experienceForms.findIndex(correctID);

            let experienceForms = [...this.state.experienceForms];
            let experienceForm = {...experienceForms[formIndex]};
            experienceForm[newVal[1]] = newVal[2];
            experienceForms[formIndex] = experienceForm
            
            this.setState({
                ...this.state,
                experienceForms
            })
        }
    }

    addForm(e) {
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
            this.setState({
                experienceForms: [...this.state.experienceForms, emptyExperience]
            })
        } else if (e === "education") {
            this.setState({
                educationForms: [...this.state.educationForms, emptyEducation]
            })
        }
        console.log(this.state)
    }

    render() {
        return (
            <div className="main">
                <CVForm
                    setMainState={this.setMainState}
                    addForm={this.addForm}
                    experienceForms={this.state.experienceForms}
                    educationLength={this.state.educationForms.length}
                />
                <CVPreview previewMainState={this.state} />
            </div>
        );
    }
}

export default Main;