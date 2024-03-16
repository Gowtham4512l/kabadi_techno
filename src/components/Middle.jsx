import React from "react";
import LeftBanner from "./LeftBanner";
import RightBanner from "./RightBanner";
import "../styles/middle.css";

function Middle() {
    return (
        <div className="auth_section">
            <LeftBanner />
            <RightBanner />
        </div>
    );
}

export default Middle;