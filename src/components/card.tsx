import React from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import "./style/card.css";

// Define types for the component props
interface CardProps {
  name: string;
  date: string;
  imageSrc: string; // Assuming imageSrc is a URL or path to the image
}

const Card: React.FC<CardProps> = ({ name, date, imageSrc }) => {
  return (
    <div className="card">
      <div className="icon-container">
        <img src={imageSrc} alt="icon" className="laptopicon" />
        <MoreVertIcon className="more-icon" />
      </div>
      <div style={{ marginLeft: "20px" }}>
        <h2 className="name">{name}</h2>
        <h6 className="date">{date}</h6>
      </div>
    </div>
  );
};

export default Card;
