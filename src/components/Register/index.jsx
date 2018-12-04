import React, { Component } from 'react';

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: ''
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'input';
    const name = target.name;
    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <form>
            <label for="firstName"><b>First Name</b></label>
            <input type="text" id="firstName" placeholder="Enter your first name"/>
            <label for="lastName"><b>Last Name</b></label>
            <input type="text" id="lastName" placeholder="Enter your last name"/>
            <label for="email"><b>Email</b></label>
            <input type="text" id="email" value="" disabled/>
            <label for="gender"><b>Gender</b></label>
            <select id="gender">
                <option value="m">Male</option>
                <option value="f">Female</option>
            </select>
            <label for="address"><b>Address</b></label>
            <input type="text" id="address" placeholder="Enter your address"/>
            <label for="address2"><b>Another Address</b></label>
            <input type="text" id="address2" placeholder="Enter your address"/>
            <label for="city"><b>City</b></label>
            <input type="text" id="city" placeholder="Enter your city"/>
            <label for="zipCode"><b>Zip Code</b></label>
            <input type="text" id="zipCode" placeholder="Enter your zip code"/>
            <label for="regione"><b>State/Region</b></label>
            <input type="text" id="regione" placeholder="Enter your state or region"/>
            <label for="country"><b>Country</b></label>
            <input type="text" id="country" placeholder="Enter your country"/>
            <label for="idType"><b>Type of ID</b></label>
            <input type="text" id="idType" placeholder="Enter your type of ID"/>
            <label for="phone"><b>Phone</b></label>
            <input type="text" id="phone" placeholder="Enter your phone"/>
            <label for="mobile"><b>Mobile</b></label>
            <input type="text" id="mobile" placeholder="Enter your mobile"/>
            <label for="dateOfBorn"><b>Date of born</b></label>
            <input type="date" id="dateOfBorn" placeholder="Enter your date of born"/>
            <label for="occupation"><b>Occupation</b></label>
            <input type="text" id="occupation" placeholder="Enter your occupation"/>
            <label for="investmentAmount"><b>Investment Amount</b></label>
            <input type="text" id="investmentAmount" placeholder="Enter your investment amount" />

            <button type="button" id="submit-form-register">Submit</button>
        </form>
    );
  }
}

export default Register;