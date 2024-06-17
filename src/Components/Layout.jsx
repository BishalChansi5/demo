import React, { useEffect, useState } from 'react'

const Layout = () => {
  const [response, setResponse] = useState([])

useEffect(() =>{

},[])
  
  return (
    <div>
      <div className='container'>
        <h1 className='header'>Profile Details</h1>
        <div className="flex">
        <div className='left'>
          <div className='img-wrapper'>
          <img src="" alt="" />
          </div> 
        </div>
        <div className='right'>
          <div className="card">
            <div className="name">FullName:<span>Bishal Chansi</span></div>
            <div>Username:</div>
            <div>UserType:</div>
            <div>LastLoginDate:</div>
          </div>
          <div className="card">
            <div className="name">Email:<span>Bishal Chansi</span></div>
            <div>Address:</div>
            <div>District:</div>
            <div>LastLoginTime:</div>
          </div>
          <div className="card">
            <div className="name">Contact:<span>Bishal Chansi</span></div>
            <div>PhoneNumber:</div>
            <div>HouseNumber:</div>
            <button>Verified</button>
          </div>
        </div>
        </div>
      </div>
      <button onClick={fetchData}>Fetch Data</button>
    </div>
  )
}

export default Layout