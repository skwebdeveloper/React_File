import React, { createContext } from 'react'
import Contexttwo from './Contexttwo'

import './index.css'

const FirstName = createContext();
const LastName = createContext();

const Contextapi = () =>{
    return(
    <React.Fragment>
    <FirstName.Provider value={'Plausibility'}>
    <LastName.Provider value={'Demented'}>
    <Contexttwo />
    </LastName.Provider>
    </FirstName.Provider>
    </React.Fragment>
)
}

export default Contextapi;

export { FirstName, LastName };
