import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import DoneIcon from "@mui/icons-material/Done";
import GridViewIcon from "@mui/icons-material/GridView";
import FormatAlignJustifyIcon from "@mui/icons-material/FormatAlignJustify";
import ClearIcon from "@mui/icons-material/Clear";
import CardGrid from "./components/cardgrid";
import "./welcome.css";

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
        <div className="header-top">
          <div className="text-content">
            <h1 className="heading">Welcome to NotebookLM</h1>
            <h3 className="notebook">My Notebooks</h3>
          </div>
        </div>
        <p className="underline"></p>
          <div className="header-icons">
            <button className="create-button" onClick={handleClick}>
              <AddIcon />
              Create new
            </button>
            <div className="Iconbutton">
              <span>
                <DoneIcon />
              </span>
              <span>
                <GridViewIcon />
              </span>
              <span>
                <FormatAlignJustifyIcon />
              </span>
            </div>
          </div>
        <CardGrid />
        {display && (
          <div className="popupCard">
            <button className="cancelButton" onClick={handleClose}>
              <ClearIcon />
            </button>
            <h1>Create Your New Notebook</h1>
          </div>
        )}
      </div>
    </>
  );
}

export default Welcome;
