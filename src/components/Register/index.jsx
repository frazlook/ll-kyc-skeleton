import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { Form, Text } from 'informed';
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
            <Form id="simple-form">
  <label htmlFor="name-field">First name:</label>
  <Text field="name" id="name-field" />
  <button type="submit">
    Submit
  </button>
</Form>
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