import React from 'react';
import {Link} from 'react-router-dom';
import '../css/Nav.css';

function Nav() {
    const navStyle = {
        color: 'black'
    };
  return (
    <nav>
        <h3>Logo</h3>
        <ul className="nav-links">
            <Link style = {navStyle} to ='/'>
                <li>About</li>
            </Link>
            <Link style = {navStyle} to='/comics'>
                <li>Comics</li>
            </Link>
            <Link style = {navStyle} to='/request'>
                <li>Request</li>
            </Link>
            <Link style = {navStyle} to='/service'>
                <li>Service</li>
            </Link>
        </ul>
    </nav>
  );
}

export default Nav;