import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faChartBar } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';

const nav = (props) => {

    return (
        <div className="nav">
            <div className="nav-item">
                <NavLink exact to="/stackline/" activeClassName="active">
                    <FontAwesomeIcon className="icon-style" icon={faHome} />Overview
                </NavLink>
            </div>
            <div className="nav-item">
                <NavLink to="/stackline/sales" activeClassName="active"><FontAwesomeIcon className="icon-style" icon={faChartBar} />Sales</NavLink>
            </div>
        </div>
    );
};

export default nav;