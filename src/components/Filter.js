import React from 'react'
import { useState } from 'react';


const Filter = ({setSearchWord,setRate}) => { 
  
  return (
    <div >  
        <input placeholder='search' type='text' onChange={(event)=>setSearchWord(event.target.value)}/>  
        <span>Rate</span>
        <select onChange={(event)=>setRate(event.target.value)}>
          <option value="">Choose an option</option>
          <option value="5">5</option>
          <option value="4">4</option>
          <option value="3">3</option>
          <option value="2">2</option>
          <option value="1">1</option>
        </select>
    </div>
  )
}

export default Filter;
