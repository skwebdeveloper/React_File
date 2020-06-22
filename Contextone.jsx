import React, { useContext } from 'react'
import { FirstName,LastName } from './Contextapi'
import Contexttwo from './Contexttwo'

const Contextone = () =>{
const fname = useContext(FirstName);
const lname = useContext(LastName);
return (
    <React.Fragment>
    <h1>This is me {fname}</h1>
    </React.Fragment>
)

}

export default Contextone;