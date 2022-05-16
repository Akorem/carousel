import React, { useState } from 'react'
import {info} from './NewData'
import './App.css'

const Section = () => {
    let [details, setDetails] = useState(info)
  return (
    <div>
        {details.map((detail)=>{
            const{title, body, id, author} = detail
            return(
                <div className='move' key={id}>
                    <h2>Title: {title}</h2>
                    <h2>Description: {body}</h2>
                    <h2>Written by: {author}</h2>
                    <button>Click</button>
                </div>
            )
        })}
        <button style={{backgroundColor:'blue', color: 'white', marginLeft:'24rem', width:'50%', height:'2rem'}}>Clear All</button>
    </div>
  )
}

export default Section