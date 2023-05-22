

import React,{useState, useEffect, useContext} from 'react';
import bulb from '../src/rest.jpeg'


function App (){
const  [ color, setColor ]= useState('');
const [count, setCount ]= useState('');
const [theme, newContext]=useState('light');

useEffect( ()=> {
    document.title= color
})
useEffect( ()=>{
    document.body.style.background= theme==='light'?'#f0f0f0' : '#2d2d2d';
})
return(

    <div>
<themeContext>
    <button onClick={()=> newContext('dark')}>click</button>
    <button onClick={()=> newContext('light')}>light</button>
</themeContext>
            <p>this is {color} geez</p>
            <button  onClick={ ()=> setColor ('blue')}>change color</button>
            <button onClick={ ()=> setColor ('green')}>change color</button>
            <button type='reset'onClick={()=> setColor('')}>reset</button>
<h1>you clicked {count} times!</h1>
<button onClick={ ()=> setCount (count +1)}>click</button>
<button onClick={ ()=> setCount (count -1)}>click to deduct</button>
<button type='reset'onClick={()=> setCount (0)}>reset</button><br></br>
<img src={bulb} alt = 'bulb' width={200} height={300}></img>

    </div>
);
}

export default App;
