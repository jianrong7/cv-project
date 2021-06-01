import React from "react";
import { DeleteButton } from "./Buttons.js";

export default class EducationFormItem extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(e) {
        this.props.setMainState(['educationForm', e.target.name, e.target.value, e.target.parentElement.className])
    }
    
    render() {
        const { id, deleteForm, state } = this.props;
        return(
            <div>
                <form className={id}>
                    <input
                        type="text"
                        placeholder="School"
                        name="school"
                        onChange={this.handleChange}
                        value={state.school}
                    />
                    <br />
                    <input
                        type="text"
                        placeholder="City"
                        name="city"
                        onChange={this.handleChange}
                        value={state.city}
                    />
                    <br />
                    <input
                        type="text"
                        placeholder="Degree"
                        name="degree"
                        onChange={this.handleChange}
                        value={state.degree}
                    />
                    <br />
                    <input
                        type="text"
                        placeholder="From"
                        name="from"
                        onChange={this.handleChange}
                        value={state.from}
                    />
                    <br />
                    <input
                        type="text"
                        placeholder="To"
                        name="to"
                        onChange={this.handleChange}
                        value={state.to}
                    />
                    <br />
                </form>
                <DeleteButton form="education" className={id} deleteForm={deleteForm} />
            </div>
        );
    }

}