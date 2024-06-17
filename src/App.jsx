import React, { useEffect, useState } from 'react'
import Layout from './Components/Layout'

const App = () => {
  const [data ,setData] = useState({
    
  })

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

useEffect(() => {
  if (data) {
    console.log(data.FullName); 
  }
}, [data]);
  return (
   <>
   {/* {console.log(data)} */}
  {/* {
    data.map(val =>{
      return(
        <div key={val.id}>
          <h1>{val.FullName}</h1>
        </div>
      )
    })
  } */}
   {/* <Layout/> */}
   </>
  )
}

export default App