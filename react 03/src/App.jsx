import React from 'react'
import { useState } from 'react'

const App = () => {
 const[a,setA]= useState({user:'Ansh',age:21})
  
 function changeA(){
  const newA={...a}
   newA.user='Mahak'
   newA.age=20
   setA(newA)

 }
  return (
    <div>
      <h1>User {a.user} , age {a.age}</h1>
       
      <button onClick={changeA}>Click Here</button>
    </div>
  )
}

export default App
