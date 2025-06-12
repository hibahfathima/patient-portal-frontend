import React from 'react'
import LogoutHeader from '../../components/LogoutHeader'
import Card from 'react-bootstrap/Card';

function AppoinmentManagment() {
  return (
    <>
    <LogoutHeader/>
    <div style={{ backgroundColor: '#ECEFCA' }}className='p-5' >
      <h2 className='text-center text-secondary'>Appoiments</h2>
      </div>


      <div className='p-5'>
        <h3  className='text-center pb-5 '>Upcoming Appoinments</h3>
        <div className="row">
          <div className="col-md-3">
          <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Uid:9497335901</Card.Title>
        <Card.Subtitle className="mb-2 ">Name:Roham</Card.Subtitle>
        <Card.Text>
          <p><span className='text-warning'>Department:</span>Roham</p>
          <p><span className='text-warning'>Doctor:</span>Dr SAM</p>
          <p><span className='text-warning'>Date:</span>12-03-2025</p>
          <p><span className='text-warning'>Slot:</span>10:00-12:00</p>
          
        </Card.Text>
       <div className='d-flex justify-content-between'>
        <button className='btn btn-danger rounded p-1'>Cancel</button>
        <button className='btn btn-success rounded p-1'>Approve</button>
       </div>
      </Card.Body>
    </Card>
          </div>
          <div className="col-md-3">
          <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Uid:9497335901</Card.Title>
        <Card.Subtitle className="mb-2 ">Name:Roham</Card.Subtitle>
        <Card.Text>
          <p><span className='text-warning'>Department:</span>Roham</p>
          <p><span className='text-warning'>Doctor:</span>Dr SAM</p>
          <p><span className='text-warning'>Date:</span>12-03-2025</p>
          <p><span className='text-warning'>Slot:</span>10:00-12:00</p>
          
        </Card.Text>
       <div className='d-flex justify-content-between'>
        <button className='btn btn-danger rounded p-1'>Cancel</button>
        <button className='btn btn-success rounded p-1'>Approve</button>
       </div>
      </Card.Body>
    </Card>
          </div>
          <div className="col-md-3">
          <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Uid:9497335901</Card.Title>
        <Card.Subtitle className="mb-2 ">Name:Roham</Card.Subtitle>
        <Card.Text>
          <p><span className='text-warning'>Department:</span>Roham</p>
          <p><span className='text-warning'>Doctor:</span>Dr SAM</p>
          <p><span className='text-warning'>Date:</span>12-03-2025</p>
          <p><span className='text-warning'>Slot:</span>10:00-12:00</p>
          
        </Card.Text>
       <div className='d-flex justify-content-between'>
        <button className='btn btn-danger rounded p-1'>Cancel</button>
        <button className='btn btn-success rounded p-1'>Approve</button>
       </div>
      </Card.Body>
    </Card>
          </div>
          <div className="col-md-3">
          <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Uid:9497335901</Card.Title>
        <Card.Subtitle className="mb-2 ">Name:Roham</Card.Subtitle>
        <Card.Text>
          <p><span className='text-warning'>Department:</span>Roham</p>
          <p><span className='text-warning'>Doctor:</span>Dr SAM</p>
          <p><span className='text-warning'>Date:</span>12-03-2025</p>
          <p><span className='text-warning'>Slot:</span>10:00-12:00</p>
          
        </Card.Text>
       <div className='d-flex justify-content-between'>
        <button className='btn btn-danger rounded p-1'>Cancel</button>
        <button className='btn btn-success rounded p-1'>Approve</button>
       </div>
      </Card.Body>
    </Card>
          </div>
        </div>

      </div>
      <div className='d-flex p-5'style={{gap:'20px'}}>
        <input type="text" placeholder='Search appoinments by doctors' className='form-control w-25'/>
        <button className='btn btn-secondary rounded p-1'>Search</button>
      </div>
    </>
  )
}

export default AppoinmentManagment
