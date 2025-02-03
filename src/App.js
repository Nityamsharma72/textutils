import './App.css';
import Alerts from './components/Alerts';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, {useState} from 'react';

// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link
// } from "react-router-dom";

 
function App() {
  const [mode, setMode] = useState('light'); 
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) =>{
    setAlert({
      msg: message, type: type
    })
  }
setTimeout(() => {
  setAlert(null);
},2500);

  const toggleMode = ()=>{
    if(mode ==='light'){
      setMode('dark');
      document.body.style.backgroundColor = ' #042743';
      showAlert("Dark mode has been enabled", "success");
      //Setting title when page changed (for new page), like when dark mode enabled, how title will change shown below
      // document.title = 'Textutils-Dark mode'; 
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
      // document.title ='Textutils-Light mode';
    }
  }
  return (
    <> 
 {/* The code for navbar is shifted to  `navbar.js` and  now imported for clearity and reusability */}
{/* <Navbar/> → when nothing was changing */}
{/* <Router>
<Navbar title = "TextUtils"  aboutText = "About TextUtils" mode = {mode} toggleMode = {toggleMode} />
<Alerts alert = {alert}/>
<div className = "container my-3"> container is a classs of bootstrap (provides css) */}

        {/* <Routes> */}
        {/* The path prop defines a URL pattern that a route should match, while the `exact path` prop indicates that a route should only match an exact URL.
           - Using any of both here doesn't make difference but in  big projects, `exact path` is recommanded. */}
          {/* <Route exact path="/about" element ={<About/>}/> */}
            {/* <About />
          </Route> */}
          {/* <Route path="/" element = {<TextForm heading = "Enter the text to analyze" mode= {mode} showAlert = {showAlert}/>}/>
        </Routes>
        </div>
        </Router>
  */}
 
<Navbar title = "TextUtils"  aboutText = "About TextUtils" mode = {mode} toggleMode = {toggleMode} />
<Alerts alert = {alert}/>
<div className = "container my-3"> {/* container is a classs of bootstrap (provides css) */}
 <TextForm heading = "Enter the text to analyze" mode= {mode} showAlert = {showAlert}/>
        </div>
        </>
  );
}

export default App;
