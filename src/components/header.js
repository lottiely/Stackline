import React from 'react';
import logo from '../assets/logo.svg';

const header = (props) => {

    return (
        <div className="header">
            <img src={logo} alt="logo" />
            <h1>Stackline</h1>
        </div>
    );
};

export default header;