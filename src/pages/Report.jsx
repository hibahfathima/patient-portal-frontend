import React from 'react'

function Report() {
  return (
   <>
   <div style={{backgroundColor:'#ECEFCA'}} className='px-5 py-4'>
    <h2 className=' text-secondary'>REPORTS</h2>
   </div>


   <div className='d-flex justify-content-center align-items-center my-5 py-5 px-5 mx-5 '>
    <table className='table table-bordered table-striped table-hover'>
            <thead>
              <tr>
                <th>#</th>
                <th>REPORT NAME</th>
                <th>DEPARTMENT</th>
                <th>DOCTOR</th>
                <th>DATE OF ISSUE</th>
                <th>ACTION</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Blood Test</td>
                <td>General Medicine</td>
                <td>Dr Sam</td>
                <td>12-04-23</td>
                <td><button className='btn btn-secondary rounded'>VIEW/DOWNLOAD</button></td>
              </tr>
            </tbody>
    </table>
   
   </div>
   <div className='my-2 py-2 px-5 mx-5 d-flex ' style={{gap:'10px'}}>
  
    <select name="" id=""className='form-control w-25'>
    
    <option value=""> Search by Department</option>
            <option value=""> General Medicine</option>
            <option value="">ENT</option>
            <option value="">Pediatrics </option>
            <option value="">Gastrology </option>
            <option value="">Cardiology</option>
            <option value="">Neurology</option>
            <option value="">Dermatology </option>
    </select>
    <button className='btn btn-primary'>SEARCH</button>
    </div>
    
   </>
  )
}

export default Report
