import React, { useEffect, useState } from 'react'
import { Button, Collapse } from 'react-bootstrap';
import profileImg from '../assets/profile.png'
import { SERVER_URL } from '../services/serverUrl';
import { toast } from 'react-toastify';
import { updateUserApi } from '../services/allAPI';




function Profile() {
  const [preview,setPreview] = useState("")
  const [existingImg,setExistingImg] = useState("") 
  const [userdetails,setUserdetails] = useState({
    username:"",email:"",password:"",github:"",linkedin:"",profileImage:""
  })
  const [open, setOpen] = useState(false);
  useEffect(()=>{
    if(sessionStorage.getItem("existingUser")){
      const existingUserDetails = JSON.parse(sessionStorage.getItem("existingUser"))
      setUserdetails({
        ...userdetails, username:existingUserDetails.username, email:existingUserDetails.email, password:existingUserDetails.password,
         github:existingUserDetails.github, linkedin:existingUserDetails.linkedin
      })
      setExistingImg(existingUserDetails.profile)
    }
  },[open])
     useEffect(()=>{
      if(userdetails.profileImage){
        setPreview(URL.createObjectURL(userdetails.profileImage))
      }else{
        setPreview("")
      }
     },[userdetails.profileImage])
     const handleUserProfile = async ()=>{
      const {username,email,password,github,linkedin,profileImage} = userdetails
      if(!github || !linkedin ){
        toast.warning("please fill the form completely")
      }else{
        const reqBody = new FormData()
        reqBody.append("username", username)
          reqBody.append("email", email)
          reqBody.append("password", password)
          reqBody.append("github", github)
          reqBody.append("linkedin", linkedin)
          preview?reqBody.append("profileImage", profileImage):reqBody.append("profileImage",existingImg)
          const token = sessionStorage.getItem("token")
          if(token){
            const reqHeader = {
              "Content-Type": preview?"multipart/form-data":"application/json",
              "Authorization": `Bearer ${token}`
    
            }
            // api call
            try{
              const result = await updateUserApi(reqBody,reqHeader)
              if(result.status){
                setOpen(!open)
                sessionStorage.setItem("existingUser",JSON.stringify(result.data))
              }else{
                console.log(result);
              }
            }catch(err){
              console.log(err);
            }
          }
      }

     }
  return (
    <>
      <div className="d-flex justify-content-center">
        <h3 className='text-warning'>User Profile</h3>
        <Button
          onClick={() => setOpen(!open)} className='btn btn-warning fw-bolder'> <i className="fa-solid fa-chevron-down"></i>
        </Button>
      </div>
      <Collapse in={open}>
        <div className='row justify-content-center shadow rounded p-3' id='example-collpase-text'>
          <label className='text-center'>
            <input onChange={e=>setUserdetails({...userdetails,profileImage:e.target.files[0]})} type="file" style={{ display: 'none' }} />
            <img className='rounded-circle' src={profileImg} alt="profile" />
            {
              existingImg == ""?
               <img width={'200px'} height={'200px'} className='rounded-circle' src={preview?preview:profileImg} alt="profile" />
               :
               <img width={'200px'} height={'200px'} className='rounded-circle' src={preview?preview:`${SERVER_URL}/uploads/${existingImg}`} alt="" />
            }
          </label>
          <div className="mb-2">
            <input type="text" className='form-control' placeholder='Github URL' />
          </div>
          <div className="mb-2">
            <input type="text" className='form-control' placeholder='Linkedin URL' />
          </div>
          <div className="d-grid">
            <button onClick={handleUserProfile} className='btn btn-warning'>Update Profile </button> 
          </div>
        </div>
      </Collapse>

    </>
  )
}

export default Profile