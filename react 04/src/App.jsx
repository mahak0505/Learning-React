import React from 'react'
import axios from 'axios'
import { useState } from 'react'

const App = () => {
  const[data,setData]=useState([])
  const getData =async()=>{
  const response= await  axios.get('https://jsonplaceholder.typicode.com/posts')
   setData(response.data)
  }
  return (
    <div>
      <button onClick={getData}>click here</button>
      <div>
        {data.map(function( elem){
          return <h3 >
             {elem.title}
          </h3>
        })}
      </div>
    </div>
  )
}

export default App
