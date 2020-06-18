import React from 'react';
import SlotMachine from './Pokermachine';

const Sloatingmachine = () =>{
return(
    <React.Fragment>
    <h1 className="heading__style">😝 Welcome to <span style={{ fontWeight: "bold" }}>Emoji</span>😝</h1>
   <div className="slot_machine">
    <SlotMachine let x = '😝' y = '😝' z = '😝' />
    <SlotMachine let x = '☹️' y = '😝' z = '😴'/>
    <SlotMachine let x = '😲' y = '😓' z = '😝'/>
    <SlotMachine let x = '😎' y = '😎' z = '😎'/>
    <SlotMachine let x = '😎' y = '😝' z = '😝' />
    <SlotMachine let x = '☹️' y = '💘' z = '😴'/>
    <SlotMachine let x = '😲' y = '😲' z = '😲'/>
    <SlotMachine let x = '🎉' y = '🎉' z = '🎉'/>
    </div> 
    </React.Fragment>
 )
}

export default Sloatingmachine;