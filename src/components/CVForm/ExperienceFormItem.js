import { render } from "@testing-library/react";
import React from "react";
import { DeleteButton } from "./Buttons.js";

export default class ExperienceFormItem extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(e) {
        this.props.setMainState(['experienceForm', e.target.name, e.target.value, e.target.parentElement.className])
    }

    render() {
        const { id } = this.props;
        return(
            <div className={id}>
                <form className={id}>
                    <input
                        type="text"
                        placeholder="Position"
                        name="position"
                        onChange={this.handleChange}
                    />
                    <br />
                    <input
                        type="text"
                        placeholder="Company"
                        name="company"
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
                <DeleteButton className={id} />
            </div>
        );
    }

}