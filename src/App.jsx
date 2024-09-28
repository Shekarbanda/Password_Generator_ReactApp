import { useState } from 'react'
import './App.css'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import { LL, N, S, UL } from './Data/Letters';

function App() {

let [lenS,setLen]=useState('10');

let [us,setU]=useState(false);
let [ls,setL]=useState(false);
let [ns,setN]=useState(false);
let [ss,setS]=useState(false);

let [pS,setP]=useState("");
function generate(){
  let chars="";
  let finalP="";
  if((us || ls || ns || ss))
  {
      if(us) chars+=UL;
      if(ls) chars+=LL;
      if(ns) chars+=N;
      if(ss) chars+=S;
      for(let i=0;i<lenS;i++){
        finalP+=chars[Math.floor(Math.random()*chars.length)]
      }
      setP(finalP);
  }
  else{
    toast.error("Atleast Select one Checkbox")
  }
}

function copy(){
  navigator.clipboard.writeText(pS);
  toast.success("Copied Successfully")
}
  return (
  <div className='main'>
    <ToastContainer></ToastContainer>
    <div className='div'>
        <h1>Password Generator</h1>
        <div className='pass'>
          <input type='text'value={pS} disabled></input>
          <button className='copy' onClick={copy}>Copy</button>
        </div>
        <div className='len'>
          <label>Password Length</label>
          <input type='number' min={10} max={20} onChange={(e)=>setLen(e.target.value)} value={lenS}></input>
        </div>
        <div className='checkbox'>
          <div className='L'>
            <label>UpperCase Letters</label>
            <input onChange={()=>setU(!us)} type='checkbox' checked={us} ></input>
          </div>
          <div className='L'>
            <label>LowerCase Letters</label>
            <input onChange={()=>setL(!ls)} type='checkbox' checked={ls}></input>
          </div>
          <div className='L'>
            <label>Numbers</label>
            <input onChange={()=>setN(!ns)} type='checkbox' checked={ns}></input>
          </div>
          <div className='L'>
            <label>Symbols</label>
            <input onChange={()=>setS(!ss)} type='checkbox' checked={ss}></input>
          </div>
        </div>
        <button className='btn' onClick={generate}>Generate Password</button>
      </div>
    </div>
  )
}

export default App
