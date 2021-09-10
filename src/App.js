import './App.css';
import Navbar from './Component/Navbar';
import Textform from './Component/Textform';
import React, { useState } from 'react'
import Alert from './Component/Alert';




function App() {
    
  const [mode, setMode] = useState('light');

  const [alert, setalert] = useState(null);

  const showAlert=(message, type)=>{
    setalert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setalert('null')
    },1500);
  }

  const toggleMode= ()=>{
    if(mode ==='light')
    {
    setMode('dark');
    document.body.style.backgroundColor='#121212';
    showAlert('Dark mode Enabled','success')
      }
      else{
        setMode('light');
        document.body.style.backgroundColor='white';
        showAlert('Normal mode Enabled','success')
      }
  }


  return (
    <>
    
      <Navbar title='HY world' mode={mode} toggleMode={toggleMode}/ >

        <Alert alert={alert}/>

        <div className="container my-3">
       
          <Textform showAlert={showAlert} mode={mode} heading="Enter the Text" />
          
        </div>
       


        
    
   </>
     );
}


export default App;
