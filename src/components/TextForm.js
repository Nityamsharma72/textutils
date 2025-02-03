//With the help of this program we can change text from lower case to uper case without reloding page.
 
import React, {useState} from 'react'
 
export default function TextForm(props) {

const handleUpClick = ()=>{
  // console.log("Uppercase was clicked:" + text);
  let newText = text.toUpperCase();
  setText(newText)
  props.showAlert("Converted to uppercase!", "success");
}

const handleLoClick = ()=>{
  let newText = text.toLowerCase();
  setText(newText)
  props.showAlert("Converted to lowecase!", "success");
}

const hadnleOnChange = (event)=>{
  // console.log("on Change");
  setText(event.target.value)
}

const handleCopy = () =>{
  //navigator is a built-in JavaScript object that provides information about the user's browser and system.
  //Clipboard is navigator's object. Some other objects of navigator are geolocation, network status etc.
navigator.clipboard.writeText(text)
.catch(err => console.error('Failed to copy text:', err));
props.showAlert("text is copied to clipboard!", "success");

}

  const [text, setText] = useState('');
 /*
  - `text` is a `state var` and it's default value is string `Enter text here`
  - we could set more `state variables` in above state, but currently only `text` require.
  - `setText` is updation function, updates the `text` var.
  */
//  text = "new text"; wrong way to change the this.state.
// setText("new text"); correct way to change the state


  return (
    <>
    <div className='container' style = {{color : props.mode==='light'?' #042743':'white'}} >
      <h1>{props.heading}</h1>
<div className="mb-3">
  <textarea className="form-control" value = {text} onChange={hadnleOnChange} style = {{backgroundColor : props.mode==='light'?'white':'grey', color:props.mode==='light'?' #042743':'white'}}  id="myBox" rows="8"></textarea>
  {/* - Above `onChange` is event handler and calls a func whenver value of element changes with which it is used. 
     - commonly used with form elements like <input>, <textarea>, and <select>*/}
</div>
<button className = "btn btn-primary" onClick={handleUpClick}>
Convert to Uppercase
</button>
<button className = "btn btn-primary mx-3" onClick={handleLoClick}>
Convert tolowercase
</button>
<button className = "btn btn-primary mx-2" onClick={handleCopy}>
Copy Text
</button>
    </div>
  <div className='container my-3'style = {{color : props.mode==='light'?' #042743':'white'}}>
    <h1>Your text summary</h1>
    <p> {text.split(" ").length} words and {text.length} characters.</p>
    {/* 0.008 minutes is time taken to read a word (by 125 words/minute) */}
    <p>{0.008 * text.split(" ").length} minutes read</p>
    <h2>Preview</h2>
    <p>{text.length>0?text:"Enter something to show preview"}</p>
  </div>
    </>
  )
}
