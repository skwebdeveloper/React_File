import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './index.css'
import './gostyle.css'

function Pokemon() {
    const [choose, updated] = useState()
    const [name, updatedname] = useState()
    const [move, updatedmove] = useState()

  useEffect(() =>{
      async function anything(){
          const res = await axios.get(`https://pokeapi.co/api/v2/ability/${choose}`)
        // console.log(res)
            updatedname(res.data.name);
        }
      anything()
  })
    return (
        <React.Fragment>
            <h1>You Wanna see number {choose}</h1>
            <h1>Name <span>{name}</span></h1>
            <select value={choose} onChange={(event) => {
                        updated(event.target.value)
                        
            }}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="25">25</option>
            </select>
        </React.Fragment>
    )
}

export default Pokemon;
