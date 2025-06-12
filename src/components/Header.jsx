import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar'
import './style.css'
import { Link } from 'react-scroll';



function Header() {
  return (
    <>
    <div style={{width:'100%',backgroundColor:'#213448'}} className='fade-in'>
    <Navbar >
        <Container >
         <Link to={'/'}className='remove'>
         <Navbar.Brand style={{color:'white'}}>
            <div className='d-flex '> 
              <img src="https://media.istockphoto.com/id/1321617070/vector/health-medical-logo.jpg?s=612x612&w=0&k=20&c=sus8vhG3c__vCdvOBLDhuf2vPUgIAudIAeUBApU_7Ew=" className=' mt-4'style={{width:'30px',height:'30px'}} />
              <div className='mt-4 ms-3'>
 <h2 >           <Link to={'/'}> MED CARE </Link> </h2> 
              <p style={{fontSize:'13px'}}>Your Health Our Mission</p>
              </div>
              </div>
              </Navbar.Brand>
         </Link>
        <div>
        <Nav className="me-auto"  >
            <Nav.Link style={{color:'white'}}className='navbarStyling'><Link to="home" smooth={true} duration={500}>HOME</Link></Nav.Link>
            <Nav.Link style={{color:'white'}}className='navbarStyling'><Link to="about" smooth={true} duration={500}>ABOUT</Link></Nav.Link>
            <Nav.Link  style={{color:'white'}}className='navbarStyling'>< Link to="service" smooth={true} duration={500}>SERVICES</Link></Nav.Link>
           <button className='btn btn-secondary  p-1'style={{borderRadius:'20px',width:'120px'}}><Link to="login"smooth={true} duration={500}>Sign UP</Link></button>
          </Nav>
        </div>
        </Container>
      </Navbar>
    </div>
    </>
  )
}

export default Header
