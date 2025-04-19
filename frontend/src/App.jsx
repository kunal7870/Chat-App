import React from 'react'
import Left from './home/leftpart/Left.jsx'
import Right from './home/rightpart/right'
import Signup from './components/Signup'
const App = () => {
  return (
    <div className='flex '>
      <Left/>
      <Right/>
      {/* <Signup/> */}
    </div>
  )
}

export default App
