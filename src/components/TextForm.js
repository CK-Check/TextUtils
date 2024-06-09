import React, {useState} from 'react'


export default function TextForm(props) {
    const handleUpClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to Uppercase.", "success")
    }
    const handleLowClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to Lowercase.", "success")
    }
    const handleClearClick = ()=>{
        let newText ="";
        setText(newText)
    }
    const handleOnChange = (event)=>{
        setText(event.target.value);
    }
    const [text, setText] = useState("");
  return (
    <>
    <div className={`container text-${props.mode === 'light'? 'dark': 'light'}`}>
    <h1>{props.heading}</h1>
    <div className="mb-3">
        <textarea className={`form-control text-${props.mode === 'light'? 'dark': 'light'}`} style= {{backgroundColor: props.mode === 'light'? 'white': '#b1b1b1'}} value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
    </div>
    <button className="btn btn-secondary my-2" disabled={text.length===0} onClick={handleUpClick}>Convert To Uppercase</button>
    <button className="btn btn-secondary my-2 mx-2" disabled={text.length===0} onClick={handleLowClick}>Convert To Lowercase</button>
    <button className="btn btn-secondary my-2" disabled={text.length===0} onClick={handleClearClick}>Clear</button>
    </div>
    <div className={`container my-2 text-${props.mode === 'light'? 'dark': 'light'}`}>
        <h2>Your text summary</h2>
        <p>{text.split(/\s+/).filter((element)=>{return element.length !== 0}).length} words, {text.length} characters</p>
        <p>{0.008*text.split(" ").filter((element)=>{return element.length !== 0}).length} minutes estimated time to read.</p>
        <h2>Preview</h2>
        <p>{text.length>0? text:"Nothing to preview!"}</p>
    </div>
    </>
  )
}


