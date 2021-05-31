import React from "react";
import ExperienceFormItem from "./ExperienceFormItem.js";
import uniqid from 'uniqid';

class ExperienceForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: uniqid(),
            number: 1
        }
    }
    componentDidMount() {
        this.setState({
            number: this.props.forms.length
        })
    }

    render() {
        const { forms } = this.props;
        return (
            <div className="experience">
                <span>Experience</span>
                {forms.map(form => {
                    return (
                        <ExperienceFormItem id={form.id}/>
                    );
                })}
            </div>
        );
    }
}

export default ExperienceForm;