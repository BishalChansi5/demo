import React, { useState , useEffect} from 'react'
import './AdminPanel.css'
import Layout from './Layout';
const AdminPanel = () => {
    const [user, setUser] = useState('')
    const [password, setPassword] = useState('')
    const [data , setData] = useState([])
 
    const handleChangeUser = (e) => {
        e.preventDefault()
        const userData = e.target.value 
        setUser(userData)
    }
    const handleChangePass = (e) => {
        e.preventDefault();
        const userPassword = e.target.value
        setPassword(userPassword)
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        // console.log(e)
  const url = 'https://testing.esnep.com/happyhomes/api/login';
  const requestData = {  
    UserName: user,
    Password: password,
    Source: "D",
    Device: "A",
    NotToken: "eee"
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
    <div className="container-panel">
    <div className="left-panel">
      <img src="https://wallpapers.com/images/hd/cool-profile-pictures-panda-man-gsl2ntkjj3hrk84s.jpg" alt="" />
    </div>
    <div className="right-panel">
    <h1 className='header'>Admin Panel</h1>
    <input type="text" placeholder="Enter UserName" value={user} onChange={handleChangeUser}/>
    <input type="password" placeholder="Enter Password" value={password} onChange={handleChangePass}/>
    <button onClick={handleSubmit}>Submit</button> 
    </div>
    </div>
   
  )
}

export default AdminPanel