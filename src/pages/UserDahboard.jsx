import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'


import LogoutHeader from '../components/LogoutHeader';

function UserDashboard() {
    const [name,setName]=useState()

   useEffect(() => {
  const storedItems = JSON.parse(sessionStorage.getItem('currentUser'));
  if (storedItems?.name) {
    setName(storedItems.name);
    // log directly
  }
}, []);

   

    return (
        <>
            <LogoutHeader />
            <div style={{ backgroundColor: '#ECEFCA' }} className="container-fluid">

                {/* Welcome + Notification */}
                <div className="row py-5 align-items-center">
                    <div className="col-12 col-md-6 text-center text-md-start ps-md-5 mb-3 mb-md-0">
                        <h1 className='text-secondary'>WELCOME <span style={{color:"olive",fontFamily:"monospace"}}>{name}</span></h1>
                    </div>
                    <div className="col-12 col-md-6 text-center text-md-end pe-md-5">
                        
                    </div>
                </div>

                {/* First Row of Icons */}
                <div className="row justify-content-center">
                    <div className="col-6 col-sm-4 col-md-2 text-center mb-4">
                        <Link to="/profile">
                            <img src="https://cdn-icons-png.flaticon.com/128/2102/2102647.png" style={{ height: '80px', width: '80px' }} alt="Profile" />
                        </Link>
                        <h6 className='mt-3 text-secondary'>PROFILE</h6>
                    </div>
                    <div className="col-6 col-sm-4 col-md-2 text-center mb-4">
                        <Link to="/appoinment">
                            <img src="https://cdn-icons-png.flaticon.com/128/17386/17386416.png" style={{ height: '80px', width: '80px' }} alt="Appointments" />
                        </Link>
                        <h6 className='mt-3 text-secondary'>APPOINTMENTS</h6>
                    </div>
                    <div className="col-6 col-sm-4 col-md-2 text-center mb-4">
                        <Link to="/report">
                            <img src="https://cdn-icons-png.flaticon.com/128/2376/2376100.png" style={{ height: '80px', width: '80px' }} alt="Reports" />
                        </Link>
                        <h6 className='mt-3 text-secondary'>REPORTS</h6>
                    </div>
                </div>

                {/* Second Row of Icons */}
                <div className="row justify-content-center py-5 mt-4">
                    <div className="col-6 col-sm-4 col-md-2 text-center mb-4">
                        <Link to="/Prescription">
                            <img src="https://cdn-icons-png.flaticon.com/128/1060/1060942.png" style={{ height: '80px', width: '80px' }} alt="Prescription" />
                        </Link>
                        <h6 className='mt-3 text-secondary'>PRESCRIPTION</h6>
                    </div>
                    <div className="col-6 col-sm-4 col-md-2 text-center mb-4">
                        <Link to="/pharmacy">
                            <img src="https://cdn-icons-png.flaticon.com/128/883/883407.png" style={{ height: '80px', width: '80px' }} alt="Pharmacy" />
                        </Link>
                        <h6 className='mt-3 text-secondary'>PHARMACY</h6>
                    </div>
                    <div className="col-6 col-sm-4 col-md-2 text-center mb-4">
                        <Link to="/payment">
                            <img src="https://cdn-icons-png.flaticon.com/128/4575/4575124.png" style={{ height: '80px', width: '80px' }} alt="Payments" />
                        </Link>
                        <h6 className='mt-3 text-secondary'>PAYMENTS</h6>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UserDashboard
