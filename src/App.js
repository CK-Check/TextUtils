import "./App.css";
import React, { useState } from "react";
//import About from "./components/About.js";
import Navbar from "./components/Navbar.js";
import TextForm from "./components/TextForm.js";
import Alert from "./components/Alert.js";
// import { BrowserRouter as Router,
// 	Routes,
// 	Route
//   } from "react-router-dom";

function App() {
  const [mode, setmode] = useState("light");
  const [alert, setalert] = useState("null");

  const showAlert = (message, type) => {
    setalert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setalert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "#5d5f63";
      showAlert("Dark-mode has been enabled.", "success");
    } else {
      setmode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light-mode has been enabled.", "success");
    }
  };

  return (
    <>
      {/*<Router>*/}
        <Navbar title="TextUtils" mode={mode} aboutText="About" toggleMode={toggleMode}/>
        <Alert alert={alert} />
        <div className="container my-3">
			{/*<Routes>
				<Route exact path="/" element = {*/}
					<TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} />
        {/*}/>
				<Route exact path="/about" element = {<About/>}/>
			</Routes>*/}
          </div>
      {/*</Router>*/}
    </>
  );
}

export default App;
