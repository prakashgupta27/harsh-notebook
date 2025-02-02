import React from 'react'
import logo from '/cdnlogo.com_(1).svg'; 
import SettingsIcon from '@mui/icons-material/Settings';
import Stack from '@mui/material/Stack';
import './style/header.css'

function Header() {
    return (    
      <>
            <div className='header'>
                <img className="image" src={logo} alt="notebook" />
                <div className='button'>
                    <Stack direction="row" spacing={2}>
                        <button className="setting-button"><SettingsIcon/>Settings</button>
                        <button className='hbutton'><span className='H'>H</span></button>
                    </Stack>
                </div>
                </div>
            </>
            )
}

            export default Header