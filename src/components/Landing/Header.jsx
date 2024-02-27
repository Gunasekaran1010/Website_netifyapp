import React from 'react';
import "./Header.css";
import image1 from '../../assets/1.png';
import image2 from '../../assets/2.png';
import logo from '../../assets/logo.png';

function Header() {
  return (
    <div className='f-container'>
      <div className="leftcontain">
        <img className='firimg' src={image1} alt='logo' />
      </div>

      <div className="rigthcontain">
        <div className="logor">
          <img src={logo} className='logoh' alt='logo' />
        </div>
        <div className="headertext">
          <h2>C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the 4th time.</h2>
          <p>C.R.I.'s energy efficient products are well recognized by various Government Institutions, as trustworthy products for <br/> various projects across the globe to save energy.</p>
          <p>C.R.I. is the highest contributor in the country for the projects of EESL (Energy Efficiency Services Limited) to replace the <br/> old inefficient pumps with 5 Star rated energy efficient smart pumps with IoT enabled control panel. 
	      </p>
        </div>
        <div className="headerimg">
          <img src={image2} alt="banner" />
        </div>
        <div className='img-text'>
          <p>Government of India has awarded the <b>"National Energy Conservation Award 2018"</b>. Mr. G. Selvaraj, Joint Managing Director <br/> of C.R.I. Group received the award from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar Singh, Honorable <br/> Minister of State.</p>
        </div>
      </div>
    </div>
  );
}

export default Header;
