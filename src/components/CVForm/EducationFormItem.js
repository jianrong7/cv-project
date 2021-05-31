import { render } from "@testing-library/react";
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
        const { id, deleteForm } = this.props;
        return(
            <div>
                <form className={id}>
                    <input
                        type="text"
                        placeholder="School"
                        name="school"
                        onChange={this.handleChange}
                    />
                    <br />
                    <input
                        type="text"
                        placeholder="City"
                        name="city"
                        onChange={this.handleChange}
                    />
                    <br />
                    <input
                        type="text"
                        placeholder="Degree"
                        name="degree"
                        onChange={this.handleChange}
                    />
                    <br />
                    <input
                        type="text"
                        placeholder="From"
                        name="from"
                        onChange={this.handleChange}
                    />
                    <br />
                    <input
                        type="text"
                        placeholder="To"
                        name="to"
                        onChange={this.handleChange}
                    />
                    <br />
                </form>
                <DeleteButton form="education" className={id} deleteForm={deleteForm} />
            </div>
        );
    }

}