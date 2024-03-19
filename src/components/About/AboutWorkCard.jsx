import React from "react";
import "../../css/AboutWorkCard.css";

const AboutWorkCard = (props) => {
    return (
        <div className="about_work_card">
            <h1>{props.title}</h1>
            <p>{props.description}</p>
        </div>
    );
};

export default AboutWorkCard;
