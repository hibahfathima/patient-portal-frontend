import React from 'react'
import LogoutHeader from '../components/LogoutHeader'
import Button from 'react-bootstrap/Button'

function Payment() {
  return (
    <>
   <LogoutHeader/>
   <div className='fade-in'>
        <div style={{ backgroundColor: '#ECEFCA' }} >
          <div className="row " >
            <div className="col-md-6 py-4 px-5  text-secondary "><h2>MY Payments</h2></div>
           
          </div>
        </div>


        <div className='py-5 my-5'>
          
          <div className='d-flex justify-content-center px-5 mx-5 table-responsive'>
            <table className="table table-hover table-striped table-bordered mt-4 mx-4">
              <thead className="table-success text-center">
                <tr>
                  <th>#</th>
                  <th>DATE</th>
                  <th>CATEGORY</th>
                  <th>STATUS</th>
                  <th>PAY NOW</th>
                  <th>REMARKS</th>

                </tr>
              </thead>
              <tbody >
                <tr className='py-3'>
                  <td>1</td>
                  <td>12-02-23</td>
                  <td>consultation fee</td>
                  <td>completed</td>
                  <td className='text-center'><Button variant="outline-success">PAY NOW</Button></td>
                  <td>NA</td>
                  
                </tr>
              </tbody>
            </table>

          </div>
          </div>
        </div>
    </>
  )
}

export default Payment
