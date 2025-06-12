import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function MainHeader() {
  return (
   <>
  <Navbar  style={{backgroundColor:'#213448'}} >
                <Container>
                    <div>
                        <Navbar.Brand className='d-flex mt-3' style={{ gap: "10px" }}>
                        <img
                                alt=""
                                src="https://media.istockphoto.com/id/1321617070/vector/health-medical-logo.jpg?s=612x612&w=0&k=20&c=sus8vhG3c__vCdvOBLDhuf2vPUgIAudIAeUBApU_7Ew="
                                width="30"
                                height="30"
                                className="d-inline-block align-top"
                            />
                            <div>
                                <h3 style={{ color: 'white' }}><Link to={'/'} style={{color:'white',textDecoration:'none'}}>MED CARE</Link></h3>
                                <p id="quote">Your Health,Our Mission</p>
                            </div>
                        </Navbar.Brand>
                    </div>
                    <div>
                        <Link to={'/userLogin'}className='remove'><button className='btn btn-light rounded text-secondary'>LOG IN</button></Link>
                    </div>
                </Container>
            </Navbar>
   </>
  )
}

export default MainHeader
