import React, { Component } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "../App.css";
import "react-tabs/style/react-tabs.css";
import Form from './Form';
import Upload from './Upload';
import Button from "@material-ui/core/Button";

class Register extends Component {

  state = {
    fields: {}
  }

  onChange = (updatedValue) => {
    this.setState({ fields: {
      ...this.state.fields,
      ...updatedValue
      }
    });
  }

  render() {
    return (
      <div>
        <Tabs>
          <TabList>
            <Tab>Step 1</Tab>
            <Tab>Step 2</Tab>
            <Tab>Step 3</Tab>
            <Tab>Step 4</Tab>
          </TabList>

          <TabPanel>
            <h2>Please enter your information below:</h2>
            <Form onChange={fields => this.onChange(fields)} />
              <p>
                {JSON.stringify(this.state.fields, null, 2)}
              </p>
              
          </TabPanel>
          <TabPanel>
            <h2>Please upload a photo and a copy of your identity document:</h2>
            <Upload />
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
