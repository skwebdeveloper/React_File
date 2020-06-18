import React from 'react';


let timing = new Date();
timing = timing.getHours();
var greet = ""
var colorStyle = { }


if(timing >= 1 && timing< 12){
     greet = "Good Morning"
     colorStyle.color = "green"
    }
else if(timing => 12 && timing <= 18){
    greet = "Good Afternoon"
    colorStyle.color = "yellow"
}
else{
    greet = "Good Night"
    colorStyle.color = "black"
}




function Greeting(){
       return(
           <form>
           <h1>Hello Sir, <span style={colorStyle}>{greet}</span></h1>
           </form>
       )
}

export default Greeting;