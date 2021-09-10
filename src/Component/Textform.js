import React, {useState} from 'react'



export default function Textform(props) {
    const Uppercasign = () =>{
        // console.log("Button Clicked"+ text);
        let newText= text.toUpperCase();
        setText(newText)
        props.showAlert('UPPERCASE Is Clicked','success')

        }
        const Lowercasign = () =>{
            // console.log("Button Clicked"+ text);
            let newText= text.toLowerCase();
            setText(newText)
            props.showAlert('LOWERCASE is Clicked','success')
    
            }
           
        const handleOnChange=(event)=>{
            // console.log("On change");
            setText(event.target.value)
            
         }

        const [text, setText] = useState('Enter Your Text:');

     
    return (
        <>
        <div className="container" style={{color: props.mode==='dark'?'white':'#121212'}}>

            <h1>{props.heading}</h1>
            
            <div className="mb-3">
                <textarea className="form-control" style={{backgroundColor: props.mode==='dark'?'white':'#121212', color: props.mode==='dark'?'#121212':'white'}}
                                 value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-success mx-3" onClick={Uppercasign}>Convert to Upper CASE </button>
            
            <button className="btn btn-danger mx-3" onClick={Lowercasign}>Convert to Lower CASE </button>

            
        </div>
        <div className="container" style={{color: props.mode==='dark'?'white':'#121212'}}>
            <h1>The Counted Character are:</h1>
            <p>
             {text.split(" ").length} words and {text.length} Character
            </p>
        </div>
        </>

    )
}
