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
        }
        this.setMainState = this.setMainState.bind(this);
    }

    setMainState(newVal) {
        if (newVal[0] === 'personalForm') {
            this.setState({
                personalForm: Object.assign(
                    {},
                    this.state.personalForm,
                    { [newVal[1]]: newVal[2] }
                ),
                educationForm: this.state.educationForm,
                experienceForm: this.state.experienceForm
            })
            console.log(this.state)
        }
    }

    addForm(e) {
        console.log(e)
    }

    render() {
        return (
            <div className="main">
                <CVForm setMainState={this.setMainState} addForm={this.addForm} />
                <CVPreview previewMainState={this.state} />
            </div>
        );
    }
}

export default Main;