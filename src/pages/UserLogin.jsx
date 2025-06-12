import React, { useState } from 'react'
import './style.css'
import Button from 'react-bootstrap/Button';
import { Link, useNavigate } from 'react-router-dom';
import MainHeader from '../components/MainHeader';
import { toast, ToastContainer } from 'react-toastify';
import { loginApi } from '../services/allApi';

function UserLogin() {
  const [loginData, setLoginData] = useState({
    email: "",
    password: ""
  });
  const navigate=useNavigate()

  const handleLogin = async () => {
    const { email, password } = loginData;
    if (!email || !password) {
      toast.warning("Complete login info");
    }
    else{
      const result=await loginApi(loginData)
      

      if(result.status===201){
        const userName=result.data.existingUser.name
        sessionStorage.setItem('token',JSON.stringify(result.data.token))
        sessionStorage.setItem('currentUser',JSON.stringify(result.data.existingUser)) 
        toast.success( ` ${userName} successfully logged`)
        navigate('/userDashboard')
       
       
      }else if (result.status===409){
        toast.warning("User not found try to register")
      }else{
        toast.error("Something went wrong")
      }
    }
  };

  return (
    <>
      <MainHeader />
      <div className="container-fluid loginImage py-5" style={{ minHeight: '78vh' }}>
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="col-12 col-md-8 col-lg-6">
              <div className="card p-4 shadow">
                <h3 className="text-center mb-4">
                  <i className="fa-solid fa-user me-2"></i>LOGIN
                </h3>
                <div className="mb-3">
                  <input
                    type="email"
                    placeholder="ENTER YOUR EMAIL"
                    className="form-control"
                    onChange={(e) =>
                      setLoginData({ ...loginData, email: e.target.value })
                    }
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="password"
                    placeholder="ENTER YOUR PASSWORD"
                    className="form-control"
                    onChange={(e) =>
                      setLoginData({ ...loginData, password: e.target.value })
                    }
                  />
                </div>
                <div className="d-flex justify-content-between mb-3">
                  <Link to="/userRegistration" className="text-secondary">NEW USER?</Link>
                  <Link to="/userRegistration" className="text-secondary">FORGOT PASSWORD?</Link>
                </div>
                <div className="text-center">
                  <Button variant="outline-success" onClick={handleLogin}>
                    LOG IN
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        theme="colored"
      />
    </>
  );
}

export default UserLogin;
