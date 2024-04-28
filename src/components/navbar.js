import React from 'react';
import {Link} from 'react-router-dom';

const Navbar=()=>{
    return (    
                <div>
                    <div>
                        <Link to="/react-app">Home</Link>
                    </div>
                    <div>
                        <Link to="/react-app/classement">Classement</Link>
                </div>
                    <div>
                        <Link to="/react-app/about">About</Link>
                    </div>
                </div>
    )

}

export default Navbar;