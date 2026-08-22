import React from 'react'

const Navbar = (props) => {
  console.log(props)
    return (
    <div className='nav'>
      this is {props.user},{props.age}
    </div>
  )
}

export default Navbar
