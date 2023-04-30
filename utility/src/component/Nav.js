import React, { useState } from 'react';
import './Nav.css';
import { Link } from "react-router-dom";
// import About from './About';
import coffee from "../coffee-removebg-preview.png"
import cafe from "../cafe.jpg"


function Nav(props) {
  const [isOpen, setIsOpen] = useState(false);
  
    return (
      <>

      <nav>
      
        <div className="logo">
          <img src={coffee} height={50} width={50} alt="coffee something" />
        </div>
        <div className="items">
        
        <Link className='components' to="/">Home</Link>
        <a href="#" className="components" id='special' onClick={() => setIsOpen(!isOpen)}>Aboutus
        
        </a>
          {/* <a className='components' href="About">AboutUs */}
          {/* <a className='components' href="/">ContactUs</a> */}
        </div>
      
          <div  className='menu'>
          <Link to='menu'>Menu</Link>
          </div>
          </nav>
          <div className={isOpen === true ? "show dropdown" : "hidden dropdown"}><div className={isOpen === true ? "show-text" : "hide-text"}>
            <img src={cafe}  alt="" className='Background'/>
            <p className='Text'>Our cafe serves the best delicates in this region we have positive review for every item</p></div></div>
        </>
    );
}

export default Nav;