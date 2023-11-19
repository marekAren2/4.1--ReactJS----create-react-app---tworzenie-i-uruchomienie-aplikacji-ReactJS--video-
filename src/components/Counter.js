import { useState } from 'react';
import './Counter.css';
import Display from './Display';
import ButtonsPanel from './ButtonsPanel';
// import from 'Counter.css'
const Counter = (propsy) => {
    // console.log("🚀 ~ file: Counter.js:4 ~ Counter ~ propsy:", propsy)
    // ask: MOZEMY UZYC PROPSOW DO USTAWIENIA STANU STARTOWEGO
    const [value, setValue] = useState(propsy.intValueCounter);
    // const [value, setValue] = useState(17);

    const updateCounter = (action) => {
        if (action === 'add') {
            setValue(value+1);    
        }
        else if (action === 'reset') {
            setValue(0);
        } else  {
            setValue(propsy.intValueCounter)
        }
        console.log(action);
        // setValue(30);
        // setValue(value+1);
    }
    // const counterGen = Math.floor(Math.random() * 10);    
    return(
        <div className="counter"> 
            <Display/> 
            <Display value={value}/>
            <p>Counter: {value} </p>
            {/* <p>Counter: {counterGen} </p> */}
            {/* <p>Counter: {counter} {propsy.initvalueCounter}</p> */}
            {/* ASK: zabieramy przyciski pseudo html z Counter do ButtonPanel */}
            {/* <div className="buttonsPanel"> */}
                {/* <button onClick={() => {setValue(value+1)}} className="buttonAdd"> Add </button>    */}
                {/* <button onClick={updateCounter} className="buttonAdd"> Add </button>    */}
            {/* </div> */}
            <ButtonsPanel updateCounter={updateCounter} />
        </div>
    )
}
export default Counter;