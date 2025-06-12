import React from 'react'
import LogoutHeader from '../../components/LogoutHeader'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';

function NewPayment() {
   const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

  return (
    <>
    <LogoutHeader/>
     <div style={{ backgroundColor: '#ECEFCA' }}className='p-5' >
      <h2 className='text-center text-secondary'>Transaction</h2>
      </div>


       <div className='d-flex justify-content-center mt-5' >
      <Button variant="outline-secondary"onClick={handleShow}> Initiate New Payment<i class="fa-solid fa-cloud-arrow-up fa-beat-fade" style={{color:'#74C0FC'}}></i></Button>

      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Initiate New Payment</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div className="flex-column">
                <input type="text"placeholder='Registerd mobile no'className='form-control mt-3 '/>
                <input type="text"placeholder='DATE OF ISSUE'className='form-control mt-3 '/>
                <input type="text"placeholder='CATEGORY'className='form-control mt-3 '/>
                <input type="text"placeholder='Amaount'className='form-control mt-3 '/>
                <input type="text"placeholder='STATUS'className='form-control mt-3 '/>
               
               

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

export default NewPayment
