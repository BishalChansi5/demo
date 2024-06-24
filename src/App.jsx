import React from 'react'
import Layout from './Components/Layout'
import GetAPI from './Components/GetAPI'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import PostAPI from './Components/PostAPI'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {

  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<GetAPI/>} />
        <Route path="/post" element={<Layout/>} />
        <Route path="/postAdd" element={<PostAPI/>} />
      </Routes>
      </BrowserRouter> 
      <ToastContainer />
    
      </div>
  )
}

export default App