import React, { useEffect, useState } from 'react'
import AdminPanel from './Components/AdminPanel'
// import Layout from './Components/Layout'

const App = () => {
 
  // const [inputValue, setInputValue] = useState('');
  // const [input, setInput] = useState('');

 
// const handleInputChange = (event) => {
  
//   let value = event.target.value
//   setInputValue(value)
// };
// const handleButtonClick = () => {
//   setInput(inputValue);
// }

  return (
   <>
  {/* <input 
        type="text" 
        value={inputValue} 
        onChange={handleInputChange} 
        placeholder="Enter UserID"
      />*/}
  <AdminPanel/>
   {/* <Layout /> */}
   </>
  )
}

export default App