import React from 'react';
import Heading from './Heading';
import List from './List';
import Greeting from './Greeting';
import Card from './Card';
import Calciout from './Calciout';
import Data from './Shortcard';

var favourite = "amazon"



function newdata(val){
    return (
        <React.Fragment>
        <Card
            imgsrc={val.imgsrc}
            title={val.title}
            tname={val.tname} />
            </React.Fragment>
    )
} 


function App() {
    return (
        <React.Fragment>
            <Heading />
            <List />
            <Greeting />
            <Calciout />
            <>
            <h1 className="heading__style">Watch next TV and movies</h1>
             {Data.map(newdata)};
            </>
         </React.Fragment>
    )
}

export default App;