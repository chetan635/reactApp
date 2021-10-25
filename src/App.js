
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import  {useState}  from 'react';
import Alert from './components/Alert';


// // for router
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";


function App() {

  // for eabling the dark mode
  const [mode,setmode] = useState("light")

  // usestate for alert
  const [alert, setAlert] = useState(null)

  const showAlert = (message,type)=>{
    setAlert( {
      msg : message,
      type : type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }

  // toggle mode function
  const toggleMode = ()=>{
    if(mode==='light'){
      setmode("dark")
      document.body.style.backgroundColor="#20011D"
      showAlert("Dark mode Enabled" , "success")
      document.title = "TextUtils - DarkMode"
    }
    else{
      setmode("light")
      document.body.style.backgroundColor="white"
      showAlert("Light mode Enabled" , "success")
      document.title = "TextUtils - LightMode"
    }
  }



  return (
    <>
      
      {/* <Navbar/> For Default Props */}
      {/* <About/> */}
      <Navbar title ="TextUtils" aboutText="About Us" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <TextForm showAlert={showAlert} heading="Enter the Text to analyze Below" mode={mode}/>

      {/* <Router>
      <Navbar title ="TextUtils" aboutText="About Us" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <Switch> */}
      {/* use of exact */}
      {/* /users --> component1 */}
      {/* /users/user1-->component 2 */}


          {/* <Route exact path="/about">
            <About/>
          </Route>
          <Route exact path="/">
          <TextForm showAlert={showAlert} heading="Enter the Text to analyze Below" mode={mode}/>
          </Route>
        </Switch>
      </Router> */}

    </>
  );
}

export default App;
