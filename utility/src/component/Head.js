import React from 'react';
import './Head.css';
import { Link } from 'react-router-dom';

function Header(props) {
    return (
        
            <>
            <div className="imge">
            <div className="main">
            <div className='container'></div>
            <div className="social">
                <a href="https://www.instagram.com/"><div className="logo1"></div></a>
                <a href="https://twitter.com/i/flow/login?input_flow_data=%7B%22requested_variant%22%3A%22eyJsYW5nIjoiZW4ifQ%3D%3D%22%7D"><div className="logo2"></div></a>
            </div>
            </div>
            <div className="curved-text">
            <h3><p>
                Have a great day Ahead
                </p>
            </h3>
            <h1><p>May our Delicates sooth your Tounge</p></h1>
        
            </div>
            </div>
            <Link to='menu'>
            <button className="order">
                <h2>OrderNow!</h2>
            </button>
       
            </Link>
            <br />
            <br />
            
                    <marquee direction="left">
                    <span className="move">50% off on first order!</span></marquee>
            
        
            </>
        
    );
}

export default Header;