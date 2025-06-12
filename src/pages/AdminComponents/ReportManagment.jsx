  import React from 'react'
  import LogoutHeader from '../../components/LogoutHeader'
  import Button from 'react-bootstrap/Button'
  import Modal from 'react-bootstrap/Modal';
  import { useState } from 'react';
  
  function ReportManagment() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
      <>
      <LogoutHeader/>
    <div style={{ backgroundColor: '#ECEFCA' }}className='p-5' >
      <h2 className='text-center text-secondary'>Manage REPORTS</h2>
      </div>

      <div className='d-flex justify-content-center mt-5' >
      <Button variant="outline-secondary"onClick={handleShow}>Upload New Report <i class="fa-solid fa-cloud-arrow-up fa-beat-fade" style={{color:'#74C0FC'}}></i></Button>

      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Upload New Report</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div className="flex-column">
                <input type="text"placeholder='Registerd mobile no'className='form-control mt-3 '/>
                <input type="text"placeholder='DATE OF ISSUE'className='form-control mt-3 '/>
                <input type="text"placeholder='DEPARTMENT'className='form-control mt-3 '/>
                <input type="text"placeholder='DOCTOR'className='form-control mt-3 '/>
                <input type="text"placeholder='Name of Test'className='form-control mt-3 '/>
               
                <label htmlFor="inputId"className='mt-3'>
                <input type="file" id="inputId" placeholder='paste report' style={{display:'none'}}/>
                <i class="fa-solid fa-upload fs-1" style={{color:"#74C0FC",cursor:'pointer'}}></i>
                </label>

            </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            CANCEL
          </Button>
          <Button variant="success" onClick={handleClose}>
            UPLOAD
          </Button>
        </Modal.Footer>
      </Modal>



      


      </>
    )
  }
  
  export default ReportManagment
  