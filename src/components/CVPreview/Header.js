import React from "react";

export default class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { name } = this.props.personalForm;
        console.log(name)
        return (
            <div>{name}</div>
        );
    }
}