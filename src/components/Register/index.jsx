import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import './Register.css'
import "react-tabs/style/react-tabs.css";


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

        <div>
          <Tabs>
          <TabList>
            <Tab>
              Step 1
            </Tab>
            <Tab>
              Step 2
            </Tab>
            <Tab>
              Step 3
            </Tab>
            <Tab>
              Step 4
            </Tab>

          </TabList>
      
          <TabPanel>
            <h2>Please enter your information below:</h2>
            <form>
            <label for="firstName"><b>First Name</b></label>
            <input type="text" id="firstName" placeholder="Enter your first name"/>
            <label for="lastName"><b>Last Name</b></label>
            <input type="text" id="lastName" placeholder="Enter your last name"/>
            <label for="email"><b>Email</b></label>
            <input type="text" id="email" value="" disabled/>
            <label for="address"><b>Address</b></label>
            <input type="text" id="address" placeholder="Enter your address"/>
            <label for="address2"><b>Address 2</b></label>
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
            <label for="phone"><b>Home Phone</b></label>
            <input type="text" id="phone" placeholder="Enter your phone"/>
            <label for="mobile"><b>Mobile</b></label>
            <input type="text" id="mobile" placeholder="Enter your mobile"/>
            <label for="dateOfBorn"><b>Date of Birth</b></label>
            <input type="date" id="dateOfBorn" placeholder="Enter your date of born"/>
            <label for="occupation"><b>Occupation</b></label>
            <input type="text" id="occupation" placeholder="Enter your occupation"/>
            <label for="investmentAmount"><b>Investment Amount</b></label>
            <input type="text" id="investmentAmount" placeholder="Enter your investment amount" />

            <button type="button" id="submit-form-register">Submit</button>
        </form>
          </TabPanel>
          <TabPanel>
            <h2>Any content 2</h2>
          </TabPanel>
          <TabPanel>
            <h2>Any content 2</h2>
          </TabPanel>
          <TabPanel>
            <h2>Any content 2</h2>
          </TabPanel>
        </Tabs>
        </div>

    );
  }
}

export default Register;