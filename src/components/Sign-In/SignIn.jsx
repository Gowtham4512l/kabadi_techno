import React from "react";
import LeftBanner from "./LeftBanner";
import RightBanner from "./RightBanner";
import "../../css/SignIn.css";

function SignIn() {
    return (
        <div className="auth_section">
            <LeftBanner />
            <RightBanner />
        </div>
    );
}

export default SignIn;