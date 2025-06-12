import React, { useState } from 'react'
import './style.css'
import Button from 'react-bootstrap/Button';
import { Link, useNavigate } from 'react-router-dom';
import MainHeader from '../components/MainHeader';
import { Bounce, toast, ToastContainer } from 'react-toastify';
import { registrationApi } from '../services/allApi';

function UserRegistration() {
const [userDetails,setUserDetails]=useState({
    name:"",
    email:"",
    password:"",
    mobile:""
  })
const navigate=useNavigate()










  const handleRegister=async()=>{
   const {name,mobile,email,password}=userDetails
   if(!name || !mobile ||!email || !password){
    toast.warning("completly fill your details")
   }else{
    const result= await registrationApi(userDetails)
    console.log("result of registration",result)
    if(result.status===201){
      toast.success(result.data)
      setUserDetails({
    name: "",
    email: "",
    password: "",
    mobile: ""})
      
    }
    else if(result.status===406){
      toast.warning("given mobile/email already exist")
       toast.warning("try to login")
    }
    else{
      toast.error("Something went wrong")
    }
   }
  }
  return (
    <>
    <MainHeader/>
   <div>
    <div>
        <div className="row loginImage "style={{height:'78vh'}}>
            <div className="col-md-6"></div>
            <div className="col-md-6">
                <h3 className='mt-5'> <i class="fa-solid fa-user"></i> USER REGISTRATION</h3>
               <div className='flex-column'>
               <input type="text" placeholder='ENTER YOUR NAME' className='form-control w-75 mt-3 '
               onChange={(e)=>setUserDetails({...userDetails,name:e.target.value})} value={userDetails.name}/>
               <input type="text" placeholder='ENTER YOUR MOBILE NO' className='form-control w-75 mt-3 '
                onChange={(e)=>setUserDetails({...userDetails,mobile:e.target.value})}  value={userDetails.mobile}/>
               <input type="text" placeholder='ENTER YOUR EMAIL' className='form-control w-75 mt-3 '
                onChange={(e)=>setUserDetails({...userDetails,email:e.target.value})}  value={userDetails.email}/>
               <input type="text" placeholder='CREATE YOUR PASSWORD' className='form-control w-75 mt-3 '
                onChange={(e)=>setUserDetails({...userDetails,password:e.target.value})} value={userDetails.password}/>
               <p ><Link to={'/userLogin'} class="loginPara text-secondary">ALREADY A USER ?</Link></p>
               <div className='d-flex justify-content-center w-75'>
               <Button variant="outline-success" className=''onClick={handleRegister}>REGISTER</Button>
               </div>
               </div>
            </div>
           
        </div>
    </div>
   </div>
   <ToastContainer
   position="top-right"
autoClose={2000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick={false}
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="colored"
transition={Bounce}/>
    </>
  )
}

export default UserRegistration
