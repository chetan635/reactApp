import React ,{useState} from 'react'
import PropTypes from 'prop-types'




export default function TextForm(props) {

    const [Text , setText] = useState("")  //The syntax for state
    // Text = "Hello Chetan This is wronge way to change the text"
    // setText("Hello chetan ")

    // The click function
    const handleUpClick = ()=>{
        setText(Text.toUpperCase())
        Text.length>0 ? props.showAlert("The Text is converted to uppercase","success"):props.showAlert("Enter text first","danger")

    }

    // The Onchange Function function
    const handleOnChange = (event)=>{
        console.log("Hello Chetan the function is running fine")
        setText(event.target.value)
    }

    // for convertint the text to lower case
    const handleLoClick = ()=>{
        setText(Text.toLowerCase())
        Text.length>0 ?  props.showAlert("The Text is converted to Lowercase","success"):props.showAlert("Enter text first","danger")
    }

    // for removing the white spaces from text
    const handleReplaceSpaces = ()=>{
        setText(Text.split(" ").join(""))
        
        Text.length>0 ? props.showAlert("Spaces are Removed","success"):props.showAlert("Enter text first","danger")
    }

    // for captilizing the each first char of words
    const handleCapital = ()=>{
        let words = Text.split(" ")
        let final = ""
        words.forEach(ele => {
            if(ele === ''){

            }
            else{
                
                final=final+ele[0].toUpperCase()+ele.substring(1)+" "
            }
        });
        setText(final)
       
        Text.length>0 ?  props.showAlert("First letter of every word is caplitized","success"):props.showAlert("Enter text first","danger")
    }

    // for clearing the text
    const handleClear = ()=>{
        setText("")
       
        Text.length>0 ? props.showAlert("First letter of every word is caplitized","success"):props.showAlert("Enter text first","danger")
    }

    // for coping the text
    const handleCopy = ()=>{
        let text = document.getElementById("myBox")
        text.select()
        navigator.clipboard.writeText(text.value)
       
        Text.length>0 ? props.showAlert("Text is copied","success"):props.showAlert("Enter text first","danger")
    }

    // for removing theextra spaces
    const handleExtraSpaces = ()=>{
        let newText = Text.split(/[ ]+/)
        setText(newText.join(" "))
       
        Text.length>0 ? props.showAlert("Extra Sapce is Removed","success"):props.showAlert("Enter text first","danger")
    }

    // for counting words
    const countWords= (text)=>{
        const words = text.split(" ");
        console.log(words)
        let count=0
        words.forEach(element => {
            if(element!==""){
                count++
            }
        });
        return count.toString()
    }

    return (
        <>
            <div className="container my-3" style={{color:props.mode==='light'?'black':'white'}}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                 
                    <textarea className="form-control" style={{backgroundColor:props.mode==='light'?'white':'gray' , color:props.mode==='light'?'black':'white'}}  value = {Text} onChange = {handleOnChange} id="myBox" rows="10"></textarea>
                </div>
               <div className="row">
               <div className="btn btn-primary mx-2 col-md-3" onClick = {handleUpClick}>
                    Convert to Uppar Case
                </div>
                <div className="btn btn-danger mx-2 col-md-3" onClick = {handleLoClick}>
                    Convert to Lower Case
                </div>
                <div className="btn btn-warning mx-2 col-md-3" onClick = {handleReplaceSpaces}>
                    To remove White spaces
                </div>
                <div className="btn btn-success mx-2 my-2 col-md-3" onClick = {handleCapital}>
                    To caplitizer
                </div>
                <div className="btn btn-secondary mx-2 my-2 col-md-3" onClick = {handleClear}>
                    Clear Text
                </div>
                <div className="btn btn-info mx-2 my-2 col-md-3" onClick = {handleCopy}>
                    Copy Text
                </div>
                <div className="btn btn-danger mx-2 my-2 col-md-3" onClick = {handleExtraSpaces}>
                    Remove Extra spaces
                </div>
               </div>
            </div>
            <div className="container" style={{color:props.mode==='light'?'black':'white'}}>
                <h1>Your Text Summary</h1>
                <p>{countWords(Text)} words And {Text.length} characters</p>
                <p>{countWords(Text) * 0.008} Minutes Read</p>
                <h2>Preview</h2>
                <p>{Text.length>0?Text:"Enter something to preview here"}</p>
            </div>
        </>
        
    )
}

TextForm.propTypes = {
    heading : PropTypes.string
}

TextForm.defaultProps={
    heading : "HEading Here"
}