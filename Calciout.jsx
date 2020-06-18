import React from 'react';
import add from './Calci';
import { sub, Div, Mult } from './Calci';

function Calciout() {
    return (
        <React.Fragment>
            <ul>
                <li>Adding: {add(4, 3)}</li>
                <li>Subtract: {sub(4, 3)}</li>
                <li>Multiply: {Mult(4, 3)}</li>
                <li>Division: {Div(4, 3)}</li>
            </ul>
        </React.Fragment>
    )
}

export default Calciout;
