import React from "react";
import logo from './../Top_14.svg.png';
 
const Home = () => {
    // return (
    //     <div>
    //         <img src={logo} className="App-logo" alt="logo" />
    //         <h1>Rugby Stats.</h1>
    //     </div>
    // );
    return (
        <div className="App">
            <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
                Rugby statistics.
            </p>
            <p className="Author">Author : G. Mijoule</p>
            <a
                className="App-link"
                href="/classement.html"
                target="_blank"
                rel="noopener noreferrer"
            >
                Classement
            </a>
            </header>
        </div>
        );
};
 
export default Home;