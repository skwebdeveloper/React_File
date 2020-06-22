import React, { useContext } from 'react'
import { FirstName,LastName } from './Contextapi'
import './index.css'

const Contexttwo = () =>{ 
const fname = useContext(FirstName);
const lname = useContext(LastName);
    return(
<h1>This is me {fname}</h1>
    )
}

export default Contexttwo;


{/* <FirstName.Consumer>{(fname) =>{
    return( 
  <LastName.Consumer>{(lname) =>{
      return(
          <h1>Hello {fname} {lname}</h1>
      )
  }}
  </LastName.Consumer>
  )
}}
</FirstName.Consumer> */}