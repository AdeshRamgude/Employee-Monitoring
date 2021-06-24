import React from 'react'
import {Link} from 'react-router-dom'

function Navbar() {
    return (
        <div>
            <nav>
                <div className="nav-wrapper">
                    <Link to="Gallery" className="brand-logo left">Emp Monitoring</Link>
                    <ul id="nav-mobile" className="right">
                        <li><Link to="Gallery">Search</Link></li>
                        <li><Link to="Addemp">Add Employee</Link></li>
                    </ul>
                </div>
        </nav>
      </div>
    )
}

export default Navbar
