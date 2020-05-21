import React from 'react';
import {Link} from 'react-router-dom';
import '../css/Nav.css';

function Nav() {

  return (
      <div>
          <img className = "logo-style" src="./logo192.png"  />
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
                        <li>The List</li>
                    </Link>
                </ul>
            </nav>
          </div>
  );
}

export default Nav;