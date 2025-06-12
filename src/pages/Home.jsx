import React from 'react'

import './style.css'
import { Link } from 'react-router-dom';
import image1 from  '../assets/images/image1.jpg'
import image2 from  '../assets/images/image2.jpg'
import image3 from  '../assets/images/image3.jpg'
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

import Card from 'react-bootstrap/Card';
import Header from '../components/Header';

function Home() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  
  return (
   <>
   <Header/>
   <div style={{width:'100%',backgroundColor:'#213448'}} className='fade-in '>

  

      <div id="home" className='   mx-2'>
      <Carousel activeIndex={index} onSelect={handleSelect} className='mx-5'>
      <Carousel.Item>
        <img src={image1} text="First slide" style={{ height: '450px', width: '100%' }} />
        <Carousel.Caption>
          <h3 style={{color:'black'}}>Explore Our Specialities</h3>
          <p style={{color:'black'}}>Med Care has always been in the forefront to introduce the most advanced and sophisticated treatment options in various specialities and subspecialities, most of them are at par with the international standards..</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={image2} text="First slide" style={{ height: '450px', width: '100%' }} />
        <Carousel.Caption>
          <h3 style={{color:'black'}}>Heart Centre</h3>
          <p style={{color:'black'}}>Our cardiac care department is well equipped with latest technology and skilled personnel, making us one of the most sought after hospitals in the region.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={image3} text="First slide" style={{ height: '450px', width: '100%' }} />
        <Carousel.Caption>
          <h3 style={{color:'white'}}>Med Care Cancer Centre</h3>
          <p style={{color:'white'}}>
          We are committed to provide superior, comprehensive and compassionate cancer care to our patients under the guidance of highly experienced Oncologists and support from dedicated nurses, technologists and other staff.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
      </div>


<div className=' px-5 mt-5 py-5'style={{color:'white'}}id="service">
  <h2 className='text-center'>EXPLORE OUR SPECIALITIES</h2>


  <div className="row mt-5 pt-5">
   <div className="col-md-3 my-5 "> 


    <Card style={{ width: '18rem',height:'250px' }}  >
     <div className='d-flex justify-content-center pt-5 pb-2'>
     <Card.Img variant="top" src="https://babymhospital.org/wp-content/uploads/2020/09/sports-injuries-1.svg" style={{height:'100px',width:'100px'}} />
     </div>
      <Card.Body className='text-secondary'>
        <Card.Title className='text-center '>Arthoscopy & Sports Injuries</Card.Title>
        <Card.Text>
         
        </Card.Text>
      
      </Card.Body>
    </Card></div>
    <div className="col-md-3"><div className="col-md-3 my-5"> <Card style={{ width: '18rem',height:'250px' }}  >
     <div className='d-flex justify-content-center pt-5 pb-2'>
     <Card.Img variant="top" src="https://babymhospital.org/wp-content/uploads/2020/09/speech-therapy-1.svg" style={{height:'100px',width:'100px'}} />
     </div>
      <Card.Body className='text-secondary'>
        <Card.Title className='text-center '>Audiology & Speech Therapy</Card.Title>
        <Card.Text>
         
        </Card.Text>
      
      </Card.Body>
    </Card></div></div>
    <div className="col-md-3"><div className="col-md-3 my-5"> <Card style={{ width: '18rem' ,height:'250px'}}  >
     <div className='d-flex justify-content-center pt-5 pb-2'>
     <Card.Img variant="top" src="https://babymhospital.org/wp-content/uploads/2023/09/blood.png" style={{height:'100px',width:'100px'}} />
     </div>
      <Card.Body className='text-secondary'>
        <Card.Title className='text-center '>Blood Center</Card.Title>
        <Card.Text>
          
        </Card.Text>
      
      </Card.Body>
    </Card>
    </div>
    </div>


    <div className="col-md-3"><div className="col-md-3 my-5"> <Card style={{ width: '18rem' ,height:'250px'}}  >
     <div className='d-flex justify-content-center pt-5 pb-2'>
     <Card.Img variant="top" src="https://babymhospital.org/wp-content/uploads/2020/09/anaesthesiology-2.svg" style={{height:'100px',width:'100px'}} />
     </div>
      <Card.Body >
        <Card.Title className='text-center text-secondary'>Anaesthesiology</Card.Title>
        <Card.Text>
          
        </Card.Text>
      
      </Card.Body>
    </Card></div></div>
    </div>

    <div className="row mb-5">
      <div className="col-md-3"><Card style={{ width: '18rem',height:'250px' }}  >
     <div className='d-flex justify-content-center pt-5 pb-2'>
     <Card.Img variant="top" src="https://babymhospital.org/wp-content/uploads/2020/09/cardiovascular-1.svg" style={{height:'100px',width:'100px'}} />
     </div>
      <Card.Body className='text-secondary'>
        <Card.Title className='text-center '>Cardio Thoracic & Vascular Surgery</Card.Title>
        <Card.Text>
         
        </Card.Text>
      
      </Card.Body>
    </Card></div>
      <div className="col-md-3">
      <Card style={{ width: '18rem',height:'250px' }}  >
     <div className='d-flex justify-content-center pt-5 pb-2'>
     <Card.Img variant="top" src="https://babymhospital.org/wp-content/uploads/2020/09/cardiac.svg" style={{height:'100px',width:'100px'}} />
     </div>
      <Card.Body className='text-secondary'>
        <Card.Title className='text-center '>Cardiac Anesthesia</Card.Title>
        <Card.Text>
         
        </Card.Text>
      
      </Card.Body>
    </Card>
      </div>
      <div className="col-md-3">
      <Card style={{ width: '18rem',height:'250px' }}  >
     <div className='d-flex justify-content-center pt-5 pb-2'>
     <Card.Img variant="top" src="https://babymhospital.org/wp-content/uploads/2020/11/child-care-1.png" style={{height:'100px',width:'100px'}} />
     </div>
      <Card.Body className='text-secondary'>
        <Card.Title className='text-center '>Child Care</Card.Title>
        <Card.Text>
         
        </Card.Text>
      
      </Card.Body>
    </Card>
      </div>
      <div className="col-md-3">
      <Card style={{ width: '18rem',height:'250px' }}  >
     <div className='d-flex justify-content-center pt-5 pb-2'>
     <Card.Img variant="top" src="https://babymhospital.org/wp-content/uploads/2020/09/cardiology.svg" style={{height:'100px',width:'100px'}} />
     </div>
      <Card.Body className='text-secondary'>
        <Card.Title className='text-center '>Cardiology</Card.Title>
        <Card.Text>
         
        </Card.Text>
      
      </Card.Body>
    </Card>
      </div>
    </div>
   

    
</div>



   </div>

   <div className=' pt-5 px-5'id="about" style={{backgroundColor:'#ecefca'}}>
   <h2 className='text-center text-secondary mb-5 '>ABOUT US</h2>
   <div className="row">
      <div className="col-md-6"><h2 className='fw-bold mt-5 fs-1 fStyle'>The vision 'affordable,<br /> accessible and <span className='text-warning'>quality </span>healthcare <br /> for all'</h2></div>
      <div className="col-md-6 "><p className='fStyle mt-5'>Driven by passion to create benchmarks in the field of healthcare, MED CARE was formed in 1987 as a modest 52 bed facility. We had a dream to meet the growing healthcare needs of people in the region and a mission to make superior healthcare facilities available to the masses at affordable cost. <br /> <br />With the blessings of the Almighty and the relentless commitment by a team of professionals along with following ethical practices in every realm of healthcare and the unstinted support and patronage of our patients, MED CARE is now a multi specialty, tertiary care, referral hospital, running as a Public Limited Company.</p></div>
    </div>
    
    <div className='d-flex justify-content-around  mt-5 py-5 '>
      <div className='bg-light text-secondary d-flex flex-column py-5 px-3 shadow rounded'style={{height:'400px',width:'250px'}}>    <i class="fa-solid fa-rocket fa-bounce fs-1 text-warning  text-center"></i>  <h5 className='fw-bold my-3  text-center'>Our Mission</h5>    <p style={{textAlign:'justify',fontWeight:'3'}} className='fStyle'>To transform the way patients worldwide access healthcare services.</p> </div>
      <div className='bg-light text-secondary d-flex flex-column py-5 px-3 shadow rounded'style={{height:'400px',width:'250px'}}>    <i class="fa-solid fa-globe fa-beat fs-1 text-warning  text-center"></i>  <h5 className='fw-bold my-3  text-center'>Our Vission</h5>    <p style={{textAlign:'justify',fontWeight:'3'}} className='fStyle'>To create a seamless patient journey, enabling access to the required healthcare services swiftly, regardless of health concerns.</p> </div>  
      <div className='bg-light text-secondary d-flex flex-column py-5 px-3 shadow rounded'style={{height:'400px',width:'250px'}}>    <i class="fa-solid fa-book-atlas  fa-beat fs-1 text-warning  text-center"></i>  <h5 className='fw-bold my-3  text-center'>Our Core Values</h5>    <p style={{textAlign:'justify',fontWeight:'3'}} className='fStyle'>PATIENTS are at the heart of everything we do.</p> </div>
      <div className='bg-light text-secondary d-flex flex-column py-5 px-3 shadow rounded'style={{height:'400px',width:'250px'}}>    <i class="fa-solid fa-lightbulb fa-beat fs-1 text-warning  text-center"></i>  <h5 className='fw-bold my-3  text-center'>What We Do</h5>    <p style={{textAlign:'justify',fontWeight:'3'}} className='fStyle'>We create patient-friendly platforms that simplify specialised healthcare access with top providers and empower patients to manage their health and their families’ well-being.</p> </div>
    </div>
    
  </div>





  <div style={{backgroundColor:"#213448"}}className='py-5 px-5'id="login">
    <div className="row py-5">
      <div className="col-md-6 py-5 ps-5 text-light">
        <h1 >START YOUR HEALING JOURNEY TODAY</h1>
        <p>Need a specialist? Schedule your appointment in minutes and get the care you deserve — hassle-free and personalized</p>
        <button className="btn btn-secondary rounded p-1"><Link to={'/userRegistration'}className='remove'> Find Your Medical Specialist Now <i class="fa-solid fa-arrow-right"></i></Link></button>
      </div>
      <div className="col-md-6 ps-5 " >
        
        <img src="https://media.istockphoto.com/id/2064007148/photo/portrait-wave-and-happy-woman-in-video-call-with-headset-at-home-for-remote-work-or.webp?a=1&b=1&s=612x612&w=0&k=20&c=590MYW39ekpKXrFF3pQM6lwKNto6Zm_IhYUI0V-lBv8=" width={'85%'} />
      </div>
    </div>
  </div>

  
   </>
  )
}

export default Home
