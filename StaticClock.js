import React, { useState } from 'react';
import Style from './index';

let time = new Date().toLocaleTimeString();
const App = () => {
    const [ctime, setState] = useState(time)
    const show = () => {
        let time = new Date().toLocaleTimeString();
        setState(time)
    }
    return (
        <React.Fragment>
            <div>
                <h3>Time</h3>
            </div>
            <br />
            <h1>{ctime}</h1>
            <button onClick={show}>Get time</button>
        </React.Fragment>
    )

}




export default App;