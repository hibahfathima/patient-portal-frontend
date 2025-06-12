import LogoutHeader from '../components/LogoutHeader'
import React from 'react'
import { Link } from 'react-router-dom'

function Doctorsdashboard() {
  return (
    <>
  <LogoutHeader/>

    <div style={{ backgroundColor: '#ECEFCA' }}>


<div className="row py-5" >
    <div className="col-md-6 mt-5 ps-5"><h1 className='text-secondary'>WELCOME DOCTOR</h1></div>
    <div className="col-md-6 mt-3 pe-5">
    </div>
</div>

<div className='ms-5'style={{height:'58vh'}}>
    <div className="row">
        <div className="col-md-3"></div>
        <div className="col-md-2"><div className='d-flex justify-content-center '><Link to={'/doctorsAppoinment'} ><img src="https://cdn-icons-png.flaticon.com/128/17386/17386416.png" style={{height:'80px',width:'80px'}} /></Link></div><h6 className='text-center mt-3 text-secondary'>MANAGE APPOINMENTS</h6></div>
        <div className="col-md-2"><div className='d-flex justify-content-center'><Link to={'/uploadPresription'}><img src="https://cdn-icons-png.flaticon.com/128/17386/17386416.png" style={{height:'80px',width:'80px'}} /></Link></div><h6 className='text-center mt-3 text-secondary'>UPLOAD PRESCRIPTIONS</h6></div>
       
        <div className="col-md-3"></div>
    </div>


   

</div>




</div>
    </>
  )
}

export default Doctorsdashboard
