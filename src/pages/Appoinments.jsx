import React from 'react'
import Button from 'react-bootstrap/Button'
import { useState } from 'react';

import Modal from 'react-bootstrap/Modal';
import LogoutHeader from '../components/LogoutHeader';


function Appoinments() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <LogoutHeader />
      <div className='fade-in'>
        <div style={{ backgroundColor: '#ECEFCA' }} >
          <div className="row " >
            <div className="col-md-6 py-4 px-5 text-secondary "><h2>MY APPOINMENTS</h2></div>
            <div className="col-md-6 py-4 pe-5"> <Button variant="outline-secondary" style={{ float: 'right' }} onClick={handleShow}> <i class="fa-solid fa-plus"></i> GET NEW APPOINMENT</Button></div>
          </div>
        </div>



        <div>
          <h3 className='text-center my-5'>UPCOMING APPOINMENTS</h3>
          <div className='d-flex justify-content-center px-5 mx-5 table-responsive'>
            <table className="table table-hover table-striped table-bordered mt-4 mx-4">
              <thead className="table-success text-center">
                <tr>
                  <th>#</th>
                  <th>DOCTOR</th>
                  <th>DEPARTMENT</th>
                  <th>DATE</th>
                  <th>TIME</th>
                  <th>CANCEL</th>

                </tr>
              </thead>
              <tbody >
                <tr className='py-3'>
                  <td>1</td>
                  <td>Dr Sam</td>
                  <td>Gastrology</td>
                  <td>12-6-25</td>
                  <td>10:00am</td>
                  <td className='text-center'><Button variant="outline-danger">CANCEL</Button></td>
                </tr>
              </tbody>
            </table>

          </div>
        </div>




        <div className="my-5 py-5 mx-5 px-5">
          <h3 className='text-center'>APPOINMENT HISTORY</h3>
          <div className='py-2 my-5  d-flex justify-content-center table-responsive'>
            <table className="table table-hover table-striped table-bordered mt-4 mx-4" >
              <thead className="table-success text-center">
                <tr>
                  <th>#</th>
                  <th>DOCTOR</th>
                  <th>STATUS</th>
                  <th>DATE</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Dr Sam</td>
                  <td>completed</td>
                  <td>12-09-23</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>



        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>GET NEW APPOINMENT</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className='flex-column'>
              <select name="" id="" className='form-control mt-3'>
                <option value="">choose department</option>
                <option value="">General Medicine</option>
                <option value="">ENT</option>
                <option value="">Pediatrics </option>
                <option value="">Gastrology </option>
                <option value="">Cardiology</option>
                <option value="">Neurology</option>
                <option value="">Dermatology </option>
              </select>

              <select name="" id="" className='form-control mt-3'>
                <option value="">choose Doctor</option>
                <option value=""> Dr sam</option>
              </select>

              <input type="text" placeholder='DATE OF APPIONMENT' className='form-control mt-3' />
              <select name="" id="" className='form-control mt-3'>
                <option value="">choose your slots</option>
                <option value="">10:00-12:00</option>
                <option value="">1:00-3:00</option>
              </select>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="danger" onClick={handleClose}>
              CANCEL
            </Button>
            <Button variant="success" onClick={handleClose}>
              CONFIRM
            </Button>
          </Modal.Footer>
        </Modal>

      </div>


    </>
  )
}

export default Appoinments
