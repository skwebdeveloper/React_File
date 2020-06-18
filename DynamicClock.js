import React, { useState } from 'react';


const App = () => {
    let time = new Date().toLocaleTimeString();
    const [ctime, utime] = useState(time);
    const Update = () => {
        let time = new Date().toLocaleTimeString();
        utime(time)
    }
    setInterval(Update, 1000)
    return (
        <React.Fragment>
        <div className="heading__style">
        <h1 style={{ color:'pink' , fontSize:'50px' }}>Current Time</h1>
        </div>
        <div className="clock">
            <h1>{ctime}</h1>
        </div>
        </React.Fragment>
    )
}
export default App;