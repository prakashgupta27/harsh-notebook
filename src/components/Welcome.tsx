import React, { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import DoneIcon from '@mui/icons-material/Done';
import GridViewIcon from '@mui/icons-material/GridView';
import FormatAlignJustifyIcon from '@mui/icons-material/FormatAlignJustify';
import ClearIcon from '@mui/icons-material/Clear';
import './style/welcome.css'

function Welcome() {
  const [display, setDisplay] = useState(false);

  const handleClick = () => {
    setDisplay(true);
  };

  const handleClose = () => {
    setDisplay(false);
  };

  return (
    <>
      <div className="senoundDiv">
        <h1 className="heading">Welcome to NotebookLM</h1>
        <h3 className="notebook">My Notebooks</h3>
        <p className="underline"></p>
        <button className="create-button" onClick={handleClick}>
          <AddIcon />Create new
        </button>

        <div className="header">
          <div className="Iconbutton">
            <span><DoneIcon /> <GridViewIcon /></span>
            <span><FormatAlignJustifyIcon /></span>
          </div>
        </div>

        {display && (
          <div className="popupCard">
            <button className="cancelButton" onClick={handleClose}><ClearIcon/></button>
            <h1>Create Your New Notebook</h1>
          </div>
        )}
      </div>
    </>
  );
}

export default Welcome;
