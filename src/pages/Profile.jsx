import React from 'react'
import './style.css'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import LogoutHeader from '../components/LogoutHeader';
import { Link } from 'react-scroll';

function Profile() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
   <>
   <LogoutHeader/>
   <div style={{backgroundColor:'#ECEFCA'}}className='px-5 py-4 d-flex justify-content-between'>
    <h2 className=' text-secondary'>MY PROFILE</h2>
    <button className='btn btn-secondary rounded'><Link to='/userDashboard'> <i class="fa-solid fa-arrow-left"></i> BACK TO HOME</Link></button>

   </div>
   <div className='profileBackground fade-in'>
    <div className="row">
    <div className="col-md-6"></div>
      <div className="col-md-6 p-5">
       <div className="card p-4 shadow-sm fade-in "style={{borderRadius:'15px'}}>
       <div className="d-flex justify-content-center mt-5 alignt-items-center ">
        <img src="https://www.shutterstock.com/image-photo/head-shot-portrait-close-smiling-600nw-1714666150.jpg" className='w-25'style={{borderRadius:'50%',height:'150px',width:'220px'}} />
        </div>
     <div  className="d-flex justify-content-center mt-5">
     <div className="d-flex justify-content-center "style={{gap:'20px'}}>
     
     <div>
      <p>NAME</p>
      <p>AGE</p>
      <p>MOBILE NO</p>
      <p>EMAIL</p>
      <p>ADRESS</p>
      
     </div>
     <div>
      <p>: SAM</p>
      <p>: 33</p>
      <p>: +91 8281231248</p>
      <p>: sam@gmail.com</p>
      <p> <pre>: Garden Vila
        </pre></p>
     </div>
      
       </div>
     </div>
     <div className="d-flex justify-content-center my-3"><button className='btn btn-success rounded p-1 mb-3 shadow'onClick={handleShow}>EDIT PROFILE</button></div>
       </div>
        </div>
      
    </div>
   </div>


   <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>EDIT PROFILE</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='flex-column d-flex  align-items-center'>
                  <input type="text" placeholder='NAME' className='form-control w-75 mt-2'/>
                  <input type="text" placeholder='AGE'className='form-control w-75 mt-2' />
                  <input type="text" placeholder='MOBILE NO'className='form-control w-75 mt-2' />
                  <input type="text" placeholder='ADDRESS'className='form-control w-75 mt-2' />
                  <input type="text" placeholder='EMAIL'className='form-control w-75 mt-2' />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            CANCEL
          </Button>
          <Button variant="success" onClick={handleClose}>
            UPDATE
          </Button>
        </Modal.Footer>
      </Modal>

   </>
  )
}

export default Profile
