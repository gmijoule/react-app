import './../App.css';

import React from 'react';
import {Link} from 'react-router-dom';

const Navbar=()=>{
    return (    
                <ul className="Navbar">
                    <li>
                        <Link to="/react-app">Home</Link>
                    </li>
                    <li>
                        <Link to="/react-app/classement">Classement</Link>
                    </li>
                    <li>
                        <Link to="/react-app/about">About</Link>
                    </li>
                </ul>
    )

}

export default Navbar;