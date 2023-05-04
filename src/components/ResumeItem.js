import React from "react";
import parse from "html-react-parser";

const ResumeItem = ({ icon, year, title, description }) => {
  return (
    <div className="resume-item">
      <div className="resume-icon">{icon}</div>
      <span className="resume-date">{year}</span>
      <h3 className="resume-subtitle">{parse(title)}</h3>
      <p className="resume-description">{description}</p>
    </div>
  );
};

export default ResumeItem;
