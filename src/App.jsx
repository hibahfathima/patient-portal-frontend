import React from 'react'

import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import UserLogin from './pages/UserLogin'
import UserRegistration from './pages/UserRegistration'
import UserDahboard from './pages/UserDahboard'
import Report from './pages/Report'
import Profile from './pages/Profile'
import Appoinments from './pages/Appoinments'
import Prescription from './pages/Prescription'
import Payment from './pages/Payment'
import AdminDashboard from './pages/AdminComponents/AdminDashboard'
import AppoinmentManagment from './pages/AdminComponents/AppoinmentManagment'
import ReportManagment from './pages/AdminComponents/ReportManagment'
import NewPayment from './pages/AdminComponents/NewPayment'
import Doctorsdashboard from './doctorComponent/Doctorsdashboard'
import DoctorAppoinments from './doctorComponent/DoctorAppoinments'
import UploadPrescription from './doctorComponent/UploadPrescription'
import Footer from './components/Footer'

function App() {
  return (
    <div>
     
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/userLogin' element={ <UserLogin/>}/>
      <Route path='/userRegistration' element={ <UserRegistration/> }/>
      <Route path='/userDashboard' element={<UserDahboard/>}/>
      <Route path='/report' element={<Report/>}/>
      <Route path='/profile' element={<Profile/>}/>
      <Route path='/appoinment' element={<Appoinments/>}/>
      <Route path='/prescription' element={<Prescription/>}/>
      <Route path='/payment' element={<Payment/>}/>
      <Route path='/adminDashboard' element={<AdminDashboard/>}/>
      <Route path='/appoinmentManagment' element={<AppoinmentManagment/>}/>
      <Route path='/reportManagment' element={<ReportManagment/>}/>
      <Route path='/newPayment' element={<NewPayment/>}/>
      <Route path='/doctorsDashboard' element={<Doctorsdashboard/>}/>
      <Route path='/doctorsAppoinment' element={<DoctorAppoinments/>}/>
       <Route path='/uploadPresription' element={<UploadPrescription/>}/>



     
     </Routes>
     <Footer/>
    
    </div>
  )
}

export default App
