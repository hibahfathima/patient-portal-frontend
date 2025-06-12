import React from 'react'
import LogoutHeader from '../components/LogoutHeader'
import Button from 'react-bootstrap/Button'

function Prescription() {
  return (
  <>
      <LogoutHeader/>
      <div className='fade-in'>
      <div style={{ backgroundColor: '#ECEFCA' }} >
        <div className="row " >
          <div className="col-md-6 py-4 px-5   text-secondary"><h2>MY Prescriptions</h2></div>
          
        </div>
      </div>


      <div className='d-flex justify-content-center px-5 mx-5 table-responsive my-5 py-5'>
          <table className="table table-hover table-striped table-bordered mt-4 mx-4">
            <thead className="table-success text-center">
              <tr>
                <th>#</th>
                <th>DOCTOR</th>
                <th>DEPARTMENT</th>
                <th>DATE</th>
                <th>Syptoms</th>
                <th>prescription</th>
                
               
              </tr>
            </thead>
            <tbody >
              <tr className='py-3'>
                <td>1</td>
                <td>Dr Sam</td>
                <td>Gastrology</td>
                <td>12-6-25</td>
                <td>Severe Fever</td>
                <td className='text-center'>paracitamol(1-0-1 for 5 days)</td>
              </tr>
            </tbody>
          </table>
            
          </div>
    </div>
  </>
  )
}

export default Prescription
