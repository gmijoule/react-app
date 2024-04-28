import './App.css';

import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";

import Home from "./pages";
import About from "./pages/about";
import Classement from "./pages/classement";
import Navbar from './components/navbar';
 
function App() {
    return (
        <Router>
            <Navbar/>
            <Routes>
                <Route path="/react-app" element={<Home />} />
                <Route path="/react-app/about" element={<About />} />
                <Route path="/react-app/classement" element={<Classement />} />
                {/* <Route
                    path="/contact"
                    element={<Contact />}
                /> */}
                {/* <Route path="/blogs" element={<Blogs />} /> */}
                {/* <Route
                    path="/sign-up"
                    element={<SignUp />}
                /> */}
            </Routes>
        </Router>
    );
}
 
export default App;

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Rugby statistics.
//         </p>
//         <p className="Author">Author : G. Mijoule</p>
//         <a
//           className="App-link"
//           href="/classement.html"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Classement
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
