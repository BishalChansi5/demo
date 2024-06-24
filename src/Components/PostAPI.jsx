import React,{useState,useRef} from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const PostAPI = () => {
  const navigate = useNavigate()
  const fileInputRef = useRef(null);


  const [title , setTitle] = useState('')
  const [category , setCategory] = useState('')
  const [desc , setDesc] = useState('')
  const [position , setPosition] = useState('')
  const [experience , setExperience] = useState('')
  const [education , setEducation] = useState('')
  const [interiewDate , setInteriewDate] = useState('')
  const [expiryDate , setExpiryDate] = useState('')
  const [shift , setShift] = useState('')
  const [employee , setEmployee] = useState('')
  const [expectation , setExpection] = useState('')
  const [description , setDescription] = useState('')
  const [banner , setBanner] = useState('')
  const [add,setAdd] = useState({})

  const handleAdd = () =>{
    fetch('https://api.cosmicintl.edu.np/api/vacancies',{
     method: 'POST',
     headers: {
       'Content-Type': 'application/json',
     //  'Access-Control-Allow-Origin': '*'
     },
     body: JSON.stringify({
       job_title: title,
       job_designation: desc,
       job_position: position,
       job_category_name: category,
       job_interview_date : interiewDate,
       job_expiry_date : expiryDate,
       job_experience : experience,
       job_education : education,
       job_no_employees : employee,
       job_category_id: 1,
       job_shift_type : shift,
       job_excerpt : expectation,
        job_banner : banner,
        job_description: description
     })
    })
    .then(res => res.json())
    .then(result =>setAdd(result))
    .catch(err =>{
     console.log(err)
    })
    toast.success('Successfully added!')
navigate('/')

}
  const handleClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      console.log('Selected file:', file.name);
      setBanner(file.name)
    }
  };
  return (
    <div className="container">
        <h1>Vacancy</h1>
        <div className="details">
        <div className="rows">
            <div>
                <p>Job Category</p>
                <select name="" id=""  className="select" onChange={(e) =>{
                 setCategory(`${e.target.value}`)
                    // console.log( e.target.value)                   
                }}>
                     
                    <option value="No Category">No Category</option>
                    <option value="Development">Development</option>
                    <option value="Database">Database</option>
                    <option value="DevOps">DevOps</option>
                </select>
            </div>
            <div >
            <p>Job Title</p>
                <input type="text" className="input" value={title}  onChange={(e) =>{
                 setTitle( `${e.target.value}`)
                    // console.log( e.target.value)                   
                }} required/>
            </div>
            <div >
            <p>Job Designation</p>
            <input type="text" className="input" value={desc} required onChange={(e) =>{
                 setDesc( `${e.target.value}`)
                    // console.log( e.target.value)                   
                }}/>
            </div>
        </div>
        <div className="rows">
            <div >
                <p>Job Position</p>
                <input type="text" className="input" value={position} required onChange={(e) =>{
                 setPosition(`${e.target.value}`)
                    // console.log( e.target.value)                   
                }}/>
            </div>
            <div >
            <p>Job Experience</p>
            <input type="text" className="input"  value={experience} required onChange={(e) =>{
                 setExperience(`${e.target.value}` )
                    // console.log( e.target.value)                   
                }}/>
            </div>
            <div >
            <p>Job Education</p>
            <input type="text" className="input" value={education} required onChange={(e) =>{
                 setEducation(`${e.target.value}` )
                    // console.log( e.target.value)                   
                }}/>
            </div>
        </div>
        <div className="rows">
            <div>
                <p>Job Interview Date</p>
                <input type="date" className="date" value={interiewDate} required onChange={(e) =>{
                 setInteriewDate(`${e.target.value}`)
                    // console.log( e.target.value)                   
                }}/>
            </div>
            <div>
            <p>Job Expiry Date</p>
            <input type="date"  className="date" value={expiryDate} required onChange={(e) =>{
                 setExpiryDate(`${e.target.value}`)
                    // console.log( e.target.value)                   
                }}/>
            </div>
            <div>
            <p>Job Shift Type</p>
            <select name="" id=""  className="select"  onChange={(e) =>{
                 setShift(`${e.target.value}`)
                    // console.log( e.target.value)                   
                }}>
                    <option value="Morning">Morning</option>
                    <option value="Evening">Evening</option>
                    <option value="Afternoon">Afternoon</option>
                    <option value="Night">Night</option>
                </select>
            </div>
        </div>
        <div className="rows">
            <div>
                <p>No. Of Employees</p>
                <input type="text"  className="input" value={employee} required onChange={(e) =>{
                 setEmployee(`${e.target.value}`)
                    // console.log( e.target.value)                   
                }}/>
            </div>
            <div >
            <p>Job Expectation</p>
            <input type="text" className="input"  value={expectation} required onChange={(e) =>{
                 setExpection(`${e.target.value}`)
                    // console.log( e.target.value)                   
                }}/>
            </div>
            <div >
            <p>Job Description</p>
            <textarea name="" id="" className="textarea" value={description} required onChange={(e) =>{
                 setDescription(`${e.target.value}`)
                    // console.log( e.target.value)                   
                }}></textarea>
            </div>
        </div>
        <div className="rows">
            <div className="image">
                <p>image</p>
                <div className="img">
                <div className="img"
        style={{ fontSize: '70px', cursor: 'pointer',marginLeft: '40px' , border:'none' }} 
        onClick={handleClick}
      >
       +
      </div>
            <input  type="file" ref={fileInputRef} style={{ display: 'none' }} onChange={handleFileChange} />
      
        </div>
            
            </div>
        </div>
            <div >
                <button className="button" onClick={handleAdd}>Add</button>
                <button className="button" onClick={() =>{
                    navigate('/')
                }}>Cancle</button>
                <button className="button" onClick={() =>{
                        
        setTitle('')
        setDesc('')
        setPosition('')
        setExperience('')
        setEducation('')
        setInteriewDate('')
        // setCategory('')
        setExpiryDate('')
        setShift('')
        setEmployee('')
        setExpection('')
        setDescription('')
        setDescription('')
        setBanner('')
                }}>Clear</button>
            </div>
        </div>
    </div>
  )
}

export default PostAPI