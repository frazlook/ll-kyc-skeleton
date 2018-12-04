import React from 'react';
import PropTypes from 'prop-types';
import logo from '../../images/logo.svg';
import { NavLink } from 'react-router-dom';
import './Header.css';

//A component with a simple arrow function.
const Header = props => {
  const { 
    title = '',
    url = 'http://llreactskeleton-20181202194234--hostingbucket.s3-website-us-west-2.amazonaws.com/'
  } = props;

  return (
    <header className="mainheader">
      <h1 className="App-title">{title}</h1>
      <ul>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/register">Register for KYC</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
        <li><NavLink to="/myinfo">My KYC Info</NavLink></li>
        <li><NavLink to="/faq">FAQ</NavLink></li>
      </ul>
    </header>
  );
};

// Validate our PropTypes.
Header.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string
};

export default Header;