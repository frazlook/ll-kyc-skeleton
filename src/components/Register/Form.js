import React, { Component } from 'react';
import './Form.css';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: "",
            lastName: "",
            email: "",
            primaryAddress: "",
            secondaryAddress: "",
            city: "",
            region: "",
            zipCode: "",
            country: "",
            idType: "",
            homePhone: "",
            mobile: "",
            dateOfBirth: "",
            occupation: "",
            investAmount: ""
        }
    }

    change = e => {
        this.props.onChange({ [e.target.name]: e.target.value })
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    onSubmit = (e) => {
        e.preventDefault();
        // this.props.onSubmit(this.state);
        this.setState({
            firstName: "",
            lastName: "",
            email: "",
            primaryAddress: "",
            secondaryAddress: "",
            city: "",
            region: "",
            zipCode: "",
            country: "",
            idType: "",
            homePhone: "",
            mobile: "",
            dateOfBirth: "",
            occupation: "",
            investAmount: ""
        });
    }

    render() {
        return (
            <div className="card">
            <form class="pure-form">
            <fieldset>
                First Name:<br />
                <input
                type="text"
                name="firstName" 
                placeholder="First Name"
                value={this.state.firstName}
                onChange={e => this.change(e)}
                />
                <br /><br />
                Last Name:<br />
                <input
                type="text"
                name="lastName" 
                placeholder="Last Name"
                value={this.state.lastName}
                onChange={e => this.change(e)}
                />
                <br /><br />
                Email:<br />
                <input
                type="text"
                name="email" 
                placeholder="Email"
                value={this.state.email}
                onChange={e => this.change(e)}
                />
                <br /><br />
                Physical Address:<br />
                <input
                type="text"
                name="primaryAddress" 
                placeholder="Address"
                value={this.state.primaryAddress}
                onChange={e => this.change(e)}
                />
                <br /><br />
                Address 2<br />
                <input
                type="text"
                name="secondaryAddress" 
                placeholder="Address 2"
                value={this.state.secondaryAddress}
                onChange={e => this.change(e)}
                />
                <br /><br />
                City:<br />
                <input
                type="text"
                name="city" 
                placeholder="City"
                value={this.state.city}
                onChange={e => this.change(e)}
                />
                <br /><br />
                State/Region:<br />
                <input
                type="text"
                name="region" 
                placeholder="State/Region"
                value={this.state.region}
                onChange={e => this.change(e)}
                />
                <br /><br />
                Postal Code:<br />
                <input
                type="text"
                name="zipCode" 
                placeholder="Postal Code"
                value={this.state.zipCode}
                onChange={e => this.change(e)}
                />
                <br /><br />
                Type of Identification:<br />
                <input
                type="text"
                name="idType" 
                placeholder="Type of ID uploading"
                value={this.state.idType}
                onChange={e => this.change(e)}
                />
                <br /><br />
                Home Telephone Number:<br />
                <input
                type="text"
                name="homePhone" 
                placeholder="Home Phone"
                value={this.state.homePhone}
                onChange={e => this.change(e)}
                />
                <br /><br />
                Mobile Telephone Number:<br />
                <input
                type="text"
                name="mobile" 
                placeholder="Mobile Phone"
                value={this.state.mobile}
                onChange={e => this.change(e)}
                />
                <br /><br />
                Date of Birth:<br />
                <input
                type="text"
                name="dateOfBirth" 
                placeholder="Date of Birth"
                value={this.state.dateOfBirth}
                onChange={e => this.change(e)}
                />
                <br /><br />
                Occupation:<br />
                <input
                type="text"
                name="occupation" 
                placeholder="Professional Occupation"
                value={this.state.occupation}
                onChange={e => this.change(e)}
                />
                <br /><br />
                Amount of investment:<br />
                <input
                type="text"
                name="investAmount" 
                placeholder="Amount of investment"
                value={this.state.investAmount}
                onChange={e => this.change(e)}
                />
                <br /><br />
                Click to submit your KYC details for approval<br/><br />
                <button id="submit" onClick={e => this.onSubmit(e)}>Submit</button>
                </fieldset>
            </form>
            </div>
        )
    }
}

export default Form;