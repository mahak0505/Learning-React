import React from 'react'

const App = () => {
  function btnClicked(){
    console.log('button clicked')
  }
  return (
    <div>
      <button onClick={btnClicked}>Click Me</button>
    </div>
  )
}

export default App
