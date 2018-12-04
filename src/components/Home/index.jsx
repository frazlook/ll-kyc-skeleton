import React from 'react';
import { NavLink } from 'react-router-dom';
import './Home.css';

const Home = () => (
  <div className="Home">
  <h1>Welcome to Look Lateral's KYC</h1>

  <p>
    In this section we will ask you to provide information in order to verify your identity based on Know Your customer regulations.

    In this registration process there are different steps in which we will verify the information you provide.
    The steps are:
  </p>
  <div className="homelist">
    <p>
    <li>General information with address validation</li>
    <li>Personal photo and identity document upload and verification</li>
    <li>Virtual currency wallet information and address validation</li>
    <li>Review and agreement of Terms and Conditions</li>
    </p>
  </div>
  <p>Please organize your documents and.....Start Now!</p>
</div>
);

export default Home;