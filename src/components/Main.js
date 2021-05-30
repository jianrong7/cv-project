import React from "react";
import CVForm from './CVForm/CVForm.js';
import CVPreview from './CVPreview/CVPreview.js';
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
            educationForm: {
                school: '',
                city: '',
                degree: '',
                from: '',
                to: ''
            },
            experienceForm: {
                position: '',
                company: '',
                city: '',
                from: '',
                to: ''
            }
        }
    }

    setMainState(newVal) {
        console.log(newVal);
    }

    render() {
        return (
            <div className="main">
                <CVForm setMainState={this.setMainState} />
                <CVPreview previewMainState={this.state} />
            </div>
        );
    }
}

export default Main;