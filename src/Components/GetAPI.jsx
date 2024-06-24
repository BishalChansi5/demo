import React, { useEffect, useState } from 'react'
import {useNavigate} from 'react-router-dom'
import { toast } from 'react-toastify';


const GetAPI = () => {
  const navigate = useNavigate()
    const [data , setData] = useState([])
   
   
    useEffect(()=>{
        loadData()
      },[])
      const loadData =  () => {
        
        fetch('https://api.cosmicintl.edu.np/api/vacancies',{
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          //  'Access-Control-Allow-Origin': '*'
          }
         })
         .then(res => res.json())
         .then(result =>setData(result))
         .catch(err =>{
          console.log(err)
        })
        
        // toast.info("Data is loaded successfully")
      }
       const handleEdit = (id) =>{        
         const dt = data.filter(item => item.job_id === id)
         console.log(dt)
        if(dt !== undefined){
          const dataPass =  {
            id:dt[0].job_id,
            title: dt[0].job_title,
            job_designation: dt[0].job_designation,
            job_position: dt[0].job_position,
            job_category_name:  dt[0].job_category_name,
            job_interview_date : dt[0].job_interview_date,
            job_expiry_date : dt[0].job_expiry_date,
            job_experience : dt[0].job_experience,
            job_education : dt[0].job_education,
            job_no_employees : dt[0].job_no_employees,
            job_category_id: 1,
            job_shift_type : dt[0].job_shift_type,
            job_excerpt : dt[0].job_excerpt,
             job_banner : dt[0].job_banner,
             job_description: dt[0].job_description
          }
          navigate('/post',{
            state:{
             itemData : dataPass
            }
          })
        }
        
        
       }
      const handleDelete = (id) =>{        
        toast.warning(`You are about to delete ${id} `)
      if(id > 0){
        if(window.confirm("Are you sure you want to delete " + id)){
          const dt = data.filter(item => item.job_id !== id)
          setData(dt)
          // console.log(dt)
          fetch(`https://api.cosmicintl.edu.np/api/vacancies/+${id}`,{
            method: 'DELETE',
            headers: {
              'Content-Type': 'application/json',
            //  'Access-Control-Allow-Origin': '*'
            }
           })
           .catch(err =>{
            console.log(err)
           })
        }
      }

       }

       const handleAdd = () =>{
        
        navigate('/postAdd')
         
       }
       const handleActivateStatus = (id) =>{
        fetch(`https://api.cosmicintl.edu.np/api/vacancies/${id}/deactivate`)
        .then(res => res.json())
        .then(result => console.log(result))
        .catch(err => console.log(err))
        loadData()
        // console.log(flag)
       }
       const handleDeactivateStatus = (id) =>{
        fetch(`https://api.cosmicintl.edu.np/api/vacancies/${id}/activate`)
        .then(res => res.json())
        .then(result => console.log(result))
        .catch(err => console.log(err)) 
        loadData()
       }
  return (
    <div>
      <div className="m-3 p-3">
        <h1>Vacancy</h1>
        <button className="btn btn-primary m-2" onClick={handleAdd}>Add Vacancy</button>
      </div>
        <table className='table table-hover'>
          <thead>
            <tr>
              <th>Id</th>
              <th>Title</th>
              <th>Designation</th>
              <th>Position</th>
              <th>Status</th>
              <th>Category</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {
              data.map((item,index) => (
                <tr key={index}>
                  <td>{item.job_id}</td>
                  <td>{item.job_title}</td>
                  <td>{item.job_designation}</td>
                  <td>{item.job_position}</td>
                  <td>{item.isActive === '1' ? 'Activate': 'Deactivate'}</td>
                  <td>{item.job_category_name}</td>
                  <td>
                    <button className='btn btn-primary' onClick={() => handleEdit(item.job_id)}>Edit</button>&nbsp;
                    <button className='btn btn-danger' onClick={() => handleDelete(item.job_id)}>Delete</button>&nbsp;
                    {item.isActive === '1'
                    ? <button className='btn btn-secondary' onClick={() => handleActivateStatus(item.job_id)}>Deactivate</button>
                    : <button className='btn btn-success' onClick={() => handleDeactivateStatus(item.job_id)}>Activate</button> 
                    }           
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
    </div>
  )
}

export default GetAPI