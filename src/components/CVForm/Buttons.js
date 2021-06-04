import React, { useState, useEffect } from "react";
import uniqid from "uniqid";

function DeleteButton(props) {
    const [form, setForm] = useState('');
    const [id, setId] = useState('');

    useEffect(() => {
        const idValue = props.className;
        const formValue = props.form;
        setForm(formValue);
        setId(idValue);
    }, []);

    const handleDelete = (e) => {
        props.deleteForm([form, id])
    }

    return (
        <button onClick={handleDelete}>Delete</button>
    );
}

function AddButton(props) {
    const [form, setForm] = useState('');

    useEffect(() => {
        const formValue = props.form;
        setForm(formValue)
    }, [])

    const handleAdd = (e) => {
        props.addForm(form);
    }

    return (
        <button onClick={handleAdd}>Add</button>
    );
}

function LoadExample(props) {
    const [personalForm, setPersonalForm] = useState({
        name: 'John Doe',
        email: 'johndoe@gmail.com',
        phoneNumber: '98765432',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eleifend, felis at pellentesque malesuada, dui augue cursus nisi, sed lacinia neque justo nec sapien. Morbi egestas vel elit sit amet bibendum. Quisque vestibulum, erat in blandit euismod, ante orci condimentum quam, id dictum neque elit malesuada leo. Duis molestie est a enim varius, in vulputate neque iaculis. Praesent sit amet ipsum consequat, dictum nisl nec, lobortis est. Nullam sit amet imperdiet lorem. Sed mollis, lacus vel dapibus ultricies, purus orci venenatis lorem, sed dapibus diam elit fermentum quam. Praesent pulvinar at erat porttitor convallis. Donec sed purus turpis. Etiam faucibus, libero at tincidunt suscipit, massa tortor porttitor ex, vel sollicitudin felis felis vel sapien.'
    });
    const [experienceForms, setExperienceForms] = useState([
        {
            id: uniqid(),
            position: 'Full Stack Engineer Intern',
            company: 'ABC Company',
            city: 'DEF Country',
            from: 'Nov 2001',
            to: 'May 2002'
        },
        {
            id: uniqid(),
            position: 'Full Stack Engineer Intern',
            company: 'GHI Company',
            city: 'JKL Country',
            from: 'May 2002',
            to: 'Dec 2002'
        },
        {
            id: uniqid(),
            position: 'Junior Full Stack Engineer',
            company: 'MNO Company',
            city: 'PQR Country',
            from: 'Dec 2002',
            to: 'Dec 2005'
        },
        {
            id: uniqid(),
            position: 'Full Stack Engineer',
            company: 'STU Company',
            city: 'WXY Country',
            from: 'Dec 2005',
            to: 'Jan 2010'
        },
    ]);
    const [educationForms, setEducationForms] = useState([
        {
            id: uniqid(),
            school: 'National University of ABC',
            city: 'DEF',
            degree: 'Bachelor of Computer Science',
            from: 'Aug 1998',
            to: 'Aug 2002'
        },
        {
            id: uniqid(),
            school: 'GHI University',
            city: 'JKL',
            degree: 'Masters in Computer Science',
            from: 'Aug 2010',
            to: 'Aug 2013'
        },
    ])

    const handleExample = () => {
        props.loadExample({personalForm, experienceForms, educationForms})
    }    

    return (
        <button onClick={handleExample} className="loadExampleBtn">Load Example</button>
    );
}

function ResetButton(props) {
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
        },
    ]);
    const [educationForms, setEducationForms] = useState([
        {
            id: uniqid(),
            school: '',
            city: '',
            degree: '',
            from: '',
            to: ''
        },
    ])

    const handleReset = () => {
        props.reset({personalForm, experienceForms, educationForms})
    }

    return (
        <button onClick={handleReset} className="resetBtn">Reset</button>
    );
}

function GenerateCV() {
    return (
        <button onClick={() => window.print()} className="generateCVBtn">Generate PDF</button>
    );
}

export { DeleteButton, AddButton, LoadExample, ResetButton, GenerateCV };