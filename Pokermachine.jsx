import React from 'react';

const SlotMachine = (props) =>{
// =============================
    // Destructing 
// =============================
const {x, y, z} = props;    
// =============================
    if(props.x === props.y && props.y === props.z){
        return (
            <React.Fragment>
            <div className = "slot_inner">
            <h2>{x} {y} {z}</h2>
            <h2>It's a match</h2>
            <hr />
            </div>
            </React.Fragment>
        )
    }
    else{
        return(
            <>
            <h2>{x} {y} {z}</h2>
            <h2>Not a Match 😛</h2>
            <hr />
            </>
        )
    }
}

export default SlotMachine;