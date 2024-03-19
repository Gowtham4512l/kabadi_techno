import React from "react";
import "../../css/Footer.css";

// material icon
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';

function MainFooter() {
    return (
        <div className="main_footer">
            <div className="link_section">
                {/* about us links */}
                <ul>
                    <h1 className="footer_header">ABOUT US</h1>
                    <li>
                        <a className="footer_link" href="/">Our Vision</a>
                    </li>
                    <li>
                        <a className="footer_link" href="/">Our Mission</a>
                    </li>
                    <li>
                        <a className="footer_link" href="/">Our Team</a>
                    </li>
                    <li>
                        <a className="footer_link" href="/">What We do?</a>
                    </li>
                </ul>

                {/* important links */}
                <ul>
                    <h1 className="footer_header">IMPORTANT LINKS</h1>
                    <li>
                        <a className="footer_link" href="/">Sell Your Scrap</a>
                    </li>
                    <li>
                        <a className="footer_link" href="/">Join Our Team</a>
                    </li>
                    <li>
                        <a href="/" className="footer_link">
                            Terms & Conditions
                        </a>
                    </li>
                    <li>
                        <a href="/" className="footer_link">
                            Privacy Policy
                        </a>
                    </li>
                </ul>

                {/* contact us links */}
                <ul>
                    <h1 className="footer_header">CONTACT US</h1>
                    <li>
                        <p className="footer_link">
                            <LocationOnIcon className="footer_link_icon" /> 16, South Arjun
                            Nagar Agra
                        </p>
                    </li>
                    <li>
                        <p className="footer_link">
                            <EmailIcon className="footer_link_icon" /> Info@kabaditechno.com
                        </p>
                    </li>
                    <li>
                        <p className="footer_link">
                            <PhoneIcon className="footer_link_icon" /> +91 7503386621
                            <br />
                            +91 9773857717
                        </p>
                    </li>
                </ul>
            </div>

            {/* social section */}
            <div className="social_section">
                <h1 className="footer_header">CONNECT WITH US</h1>
                <div className="social_link">
                    <a href="https://www.facebook.com/kabaditechno/?modal=admin_todo_tour">
                        <FacebookIcon className="social_link_icon" />
                    </a>
                    <a href="https://www.instagram.com/kabaditechno/">
                        <InstagramIcon className="social_link_icon" />
                    </a>
                    <a href="https://www.linkedin.com/company/kabadi-techno">
                        <LinkedInIcon className="social_link_icon" />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default MainFooter;
