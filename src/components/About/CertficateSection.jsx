import React from "react";
import "../../css/About_Certificate_Section.css";
import startup_certificate from "../../images/certificate_new.svg";

function CertificateSection() {
    return (
        <div className="certificate_section">
            <h1>Startup India Certificate</h1>
            <img className="certificate" src={startup_certificate} alt="" />
        </div>
    );
}

export default CertificateSection;