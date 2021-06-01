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
        this.deleteForm = this.deleteForm.bind(this);
        this.loadExample = this.loadExample.bind(this);
        this.reset = this.reset.bind(this);
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
        } else if (newVal[0] === 'educationForm') {
            const correctID = (form) => form.id === newVal[3];
            const formIndex = this.state.educationForms.findIndex(correctID);

            let educationForms = [...this.state.educationForms];
            let educationForm = {...educationForms[formIndex]};
            educationForm[newVal[1]] = newVal[2];
            educationForms[formIndex] = educationForm
            
            this.setState({
                ...this.state,
                educationForms
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
    }

    deleteForm(e) {
        if (e[0] === "experience") {
            const correctID = (form) => form.id === e[1];
            const formIndex = this.state.experienceForms.findIndex(correctID);
            
            let experienceForms = [...this.state.experienceForms];
            experienceForms.splice(formIndex, 1)

            this.setState({
                ...this.state,
                experienceForms
            })
        } else if (e[0] === "education") {
            const correctID = (form) => form.id === e[1];
            const formIndex = this.state.educationForms.findIndex(correctID);
            
            let educationForms = [...this.state.educationForms];
            educationForms.splice(formIndex, 1)

            this.setState({
                ...this.state,
                educationForms
            })
        }
    }
    
    loadExample(e) {
        this.setState(e);
        console.log(this.state)
    }
    reset(e) {
        this.setState(e);
    }

    render() {
        return (
            <div className="main">
                <CVForm
                    setMainState={this.setMainState}
                    addForm={this.addForm}
                    deleteForm={this.deleteForm}
                    loadExample={this.loadExample}
                    experienceForms={this.state.experienceForms}
                    educationForms={this.state.educationForms}
                    reset={this.reset}
                    state={this.state}
                />
                <CVPreview previewMainState={this.state} />
            </div>
        );
    }
}

export default Main;