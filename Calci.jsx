import React from 'react';

function add(a,b){
    return( a + b
    ) 
}

function sub(a,b){
    return( a - b
    ) 
}

function Div(a,b){
    let fixedtwopoint = a/b
    return( fixedtwopoint.toFixed(2)) 
}

function Mult(a,b){
    return(a * b
    ) 
}


export default add;

export {sub, Div, Mult};