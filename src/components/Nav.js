import React from 'react';
import {Link} from 'react-router-dom';
import '../css/Nav.css';

function Nav() {

  return (
      <div>
          <h3>Logo</h3>
            <nav>
                <ul className="nav-links">
                    <Link className = "nav-style" to ='/'>
                        <li>About</li>
                    </Link>
                    <Link className = "nav-style" to='/comics'>
                        <li>Comics</li>
                    </Link>
                    <Link className = "nav-style" to='/request'>
                        <li>Request</li>
                    </Link>
                    <Link className = "nav-style" to='/service'>
                        <li>Service</li>
                    </Link>
                </ul>
            </nav>
          </div>
  );
}

export default Nav;