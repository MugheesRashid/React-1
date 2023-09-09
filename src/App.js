
import { Router } from 'react-router-dom';
import './App.css';
// import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import Textarea from './components/Textarea';
import React,{useState} from 'react'
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
// } from "react-router-dom";


function App() {
  const [mode,darkmode] = useState("light")
  const [textMode,newText] = useState("Enable Dark Mode")
  const [alert,setAlert] = useState(null)

  const showAlert = (message,type) => {
    setAlert({
      msg : message,
      type : type,
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }

  const [style,setStyle] = useState({
     color: 'black',
     backgroundColor: 'white'
    })
 
  function Dark() {
    if(mode=="light"){   
      darkmode('dark')
      newText("Enable Light Mode")
      setStyle({
        color: 'white',
        backgroundColor: '#000324'
    })
      showAlert("Dark Mode Enabled" , "success")
      document.body.classList.remove("custom1","custom2","custom3")
      document.body.classList.remove("light")  
    document.body.classList.add("dark")
    } 
    else{
      darkmode('light')
    newText("Enable Dark Mode")
    setStyle({
      color: 'black',
      backgroundColor: 'white'
    })
    showAlert("Light Mode Enabled" , "success")
    document.body.classList.remove("custom1","custom2","custom3")
    document.body.classList.remove("dark")
    document.body.classList.add("light")
    }
  }

  function theme1(color,custom) {
    setStyle({
      color: 'white',
      backgroundColor: color
  })
  document.body.classList.add(custom)
  }
  return (
   <>
  
   {/*<Router>*/}
   <Navbar title='Article Analyzer' Dark={Dark} about="About" theme={theme1} mode={mode} text={textMode}/>
  <Alert alert={alert} />
  <Textarea showAlert={showAlert} style={style} />

     {/* <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/" element={<Textarea showAlert={showAlert} style={style} />} />
        </Routes>
        </Router> */}
   {/* </Router> */}
   </>
  );
}


export default App;
