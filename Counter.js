import React, { useState } from 'react';
import Style from './index';


const Add = () => {
    const [count, setState] = useState(0);
    const Incresing = () =>{
        setState(count + 1)
    }
    return (
        <React.Fragment>
        <h1>Counter</h1>
        <p className="para">A simple yet powerfull proj. of React</p>
        <div className="incre">
                <h1>{count}</h1>
                <button onClick={Incresing}>Hit</button>
        </div>        
        </React.Fragment>
    )
}

export default Add;