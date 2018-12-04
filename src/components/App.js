import Amplify, { Analytics, Storage } from 'aws-amplify';
import aws_exports from './aws-exports';
import { withAuthenticator, S3Album, SignIn } from 'aws-amplify-react';
import React, { Component } from 'react';
import logo from './shared/images/logo.svg';
import './App.css';
import { element } from 'prop-types';
import Header from './shared/components/layout/Header';
import Content from './shared/components/layout/Content';
import Footer from './shared/components/layout/Footer';

Amplify.configure(aws_exports);
Storage.configure({ level: 'private' });

const App = props => (
  <div className="App">
    <Header />

    <Content>
      {props.children}
    </Content>

    <Footer />
  </div>
);

App.propTypes = {
  children: element
};

export default withAuthenticator(App, true);