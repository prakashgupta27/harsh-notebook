import React from 'react'
import laptopicon from '../../public/laptop.png'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import './style/card.css'

function card() {
  return (
    <div className='card'>
      <div className="icon-container">
        <img src={laptopicon} alt="laptopicon" className="laptopicon" />
        <MoreVertIcon className="more-icon" />
      </div>
      <div style={{marginLeft:"20px"}}>
        <h2 className='name'>Harshendra kumar Upadhyay</h2>
        <h6 className='date'>Feb 02, 2025.1 source</h6>
      </div>
    </div>
  )
}

export default card