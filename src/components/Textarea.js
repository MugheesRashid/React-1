import React,{useState} from 'react'
import PropTypes from 'prop-types'

export default function Textarea(props) {
        
   const [text,setText] = useState("")

    const uppercase =()=>{
     let up = text.toUpperCase();
     setText(up)
     props.showAlert("Coverted to Uppercase" , "info")
    }

    const lowercase =()=>{
        let down = text.toLowerCase();
        setText(down)
        props.showAlert("Coverted to Lowercase" , "info")
    }

       const tobold =()=>{
        document.querySelector('textarea').style.fontWeight = "bold";
        document.querySelector('#preview').style.fontWeight = "bold";
        props.showAlert("Converted To Bold" , "dark")
    }

 let num = 0;

    const capitalcase =()=>{
        if (num == 0) {
          document.querySelector('textarea').style.textTransform = "capitalize";
          document.querySelector('#preview').style.textTransform = "capitalize";
          document.querySelector('.capital').innerHTML = "Capitalize Mode On";
          num++;
          console.log(num)
        }
        else{    
          document.querySelector('textarea').style.textTransform = "none";
          document.querySelector('#preview').style.textTransform = "none";
          document.querySelector('.capital').innerHTML = "Capitalize mode Off"
          num--
          console.log(num)
        }
    }

      const tolight =()=>{
        document.querySelector('textarea').style.fontWeight = "400";
        document.querySelector('#preview').style.fontWeight = "400";
    }

    const clear =()=>{
        let clear = "";
        setText(clear)
        props.showAlert("Cleared Text" , "danger")
       }

    const changetext =(event) =>{
        console.log("Hi")
        setText(event.target.value)
    }
    const copy=() =>{
      let textarea = document.querySelector('textarea');
      textarea.select();
      document.execCommand('copy');
      alert("Text Coppied")
    }
  return (
    <>
    <div className="container py-3">
    <h2 style={props.style}>Enter Your text Here</h2>
    <div style={props.style} className="input-group">
    <textarea style={props.style} className="form-control" value={text} placeholder='Enter Text Here' onChange={changetext} rows="10" aria-label="With textarea"></textarea>
    </div>
    </div>
    <div className="container py-2">
    <div className="btn btn-info mx-1  my-2 btn-sm" onClick={uppercase}>Conver To UpperCase</div>
    <div className="btn btn-primary mx-1 my-2 btn-sm" onClick={lowercase}>Convert to LowerCase</div>
    <div className="btn btn-primary mx-1 my-2 capital btn-sm" onClick={capitalcase}>Capitalize mode Off</div>
    <div className="btn btn-dark mx-1 my-2 btn-sm" onClick={tobold}>Convert To bold text</div>
    <div className="btn btn-light border-dark mx-1 my-2 btn-sm" onClick={tolight}>Convert To lighter text</div>
    <button className="btn btn-warning mx-1 btn-sm" onClick={copy}>Copy to clipboard</button>
    <div className="btn btn-danger mx-1 my-2 btn-sm" onClick={clear}>Clear</div>
    </div>
    <div className="container my-7">
        <div className="container">
    <h4 className='mx-8 my-9'>Summary</h4>
    <p>Number of words {text.split(" ").length-1} </p>
    <p>Number of character {text.length}</p>
    </div>
    <div className="container my-3">
        <h2>Preview</h2>
        <p id="preview">{text.length>0?text:'Enter The Text In The Above Textarea To View ...'}</p>
    </div>
    </div>
  
    
    </>
  )
}
