import React, { Component } from 'react';
import Field from './field';


class ContactForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            form: {
                firstName: '',
                lastName: '',
                phone: '',
                email: ''
            }
        }
    }

    handleChange = (event) => {

        const { value, name, phone, email } = event.target;
        const { form } = this.state;

        console.log(event.target.name);
        console.log(event.target.value);

        this.setState({
            form: {
                ...form,
                [name]: value
            }
        })
    }

    handleSubmit = (event) => {
        this.props.add(this.state.form);
        event.preventDefault();
        console.log('submit', this.state.form);

        
    }

    render() {
        const { firstName, lastName, phone, email } = this.state.form;

        return (
            <form onSubmit={this.handleSubmit}> 
                <Field name="firstName" label="First Name" type="text" value={firstName} onChange={this.handleChange}/>
                <Field name="lastName" label="Last Name" type="text" value={lastName} onChange={this.handleChange}/>
                <Field name="phone" label="Phone Number" type="tel" value={phone} onChange={this.handleChange}/>
                <Field name="email" label="Email" type="email" value={email} onChange={this.handleChange}/>
                <button>Add Contact</button>
            </form>
        )
    }
}

export default ContactForm;

