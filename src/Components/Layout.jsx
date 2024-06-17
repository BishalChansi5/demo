import React, { useEffect, useState } from 'react'

const Layout = () => {

  const [data , setData] = useState([])

  useEffect( () => {
    fetchData()
},[])

const fetchData = async () => {
  const url = 'https://testing.esnep.com/happyhomes/api/check-session';
  const requestData = {  
    UserID: '5',
    NotToken: "",
    Device: "A",
    AuthCode: "r1d3r"
  }; 

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'signature':'p0m76'
      },
      body: JSON.stringify(requestData),
    });
    const result = await response.json();
    setData(result.Values);
   
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}
console.log(data)
  return (
    <div>
      {
    data.map(val =>{
      return(
        <div key={val.UserID}>
         <div className='container'>
        <h1 className='header'>Profile Details of User {val.UserID}</h1>
        <div className="flex">
        <div className='left'>
          <div className='img-wrapper'>
          <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="" />
          </div> 
        </div>
        <div className='right'>
          <div className="card">
            <div className="name">FullName:<span>{val.FullName}</span></div>
            <div>Username:<span>{val.UserName}</span></div>
            <div>UserType:<span>{val.UserType === 'O' ? 'Owner' : val.UserType}</span></div>
            <div>LastLoginDate:<span>{val.LastLoginedDate}</span></div>
          </div>
          <div className="card">
            <div className="name">Email:<span>{val.Email}</span></div>
            <div>Address:<span>{val.Address}</span></div>
            <div>District:<span>{val.District}</span></div>
            <div>LastLoginTime:<span>{val.LastLoginedTime}</span></div>
          </div>
          <div className="card">
            <div className="name">Contact:<span>{val.Contact}</span></div>
            <div>PhoneNumber:<span>{val.PhnNum}</span></div>
            <div>HouseNumber:<span>{val.DefHouseNBum}</span></div>
            <button>Verified</button>
          </div>
        </div>
        </div>
      </div>
        </div>
      )
    })
  }
      
      <button>Fetch Data</button>
    </div>
  )
}

export default Layout