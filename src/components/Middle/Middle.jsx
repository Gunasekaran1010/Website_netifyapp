import React from 'react'
import '../Middle/Middle.css';
import image3 from '../../assets/3.png';

function Middle() {
  return (
    <div className='m-container'>
        <div className='m-first'>
            <h2>
            INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE NATION.
            </h2>
        </div>

        <div className="m-img">
            <img src={image3} alt="image3" />
        </div>

        <div className="m-firsts">
            <h4>Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables - Solar Systems - Motors </h4>
        </div>

        <hr className='hrs' />
    </div>
  )
}

export default Middle