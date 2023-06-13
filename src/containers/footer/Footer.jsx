import React from "react";
import "./footer.css";
const Footer = () => {
    return (
        <div className="gpt3__footer section__padding">
            <div className="gpt3__footer-heading">
                <h1 className="gradient__text">Do you want to step in to the future before others</h1>
            </div>

            <div className="gpt3__footer-btn">
                <p>Request Early Access</p>
            </div>

            <div className="gpt3__footer-links">
                <div className="gpt3__footer-links-logo">
                    <h4>GPT-4</h4>
                    <p>Powerful conversational AI model for interactive communication.</p>
                </div>
                <div className="gpt3__footer-links_div">
                    <h4>Links</h4>
                    <p>Overwrite</p>
                    <p>Social Media</p>
                    <p>Counters</p>
                    <p>Contact</p>
                </div>
                <div className="gpt3__footer-links_div">
                    <h4>Company</h4>
                    <p>Terms & Conditions</p>
                    <p>Privacy Policy</p>
                    <p>Contact</p>
                </div>
                <div className="gpt3__footer-links_div">
                    <h4>Get in touch</h4>
                    <p>Overwrite</p>
                    <p>085-1247543</p>
                    <p>Counters</p>
                </div>
            </div>

            <div className="gpt3__footer-copyright">
                <p>© 2023 GPT-4. All rights reserved.</p>
            </div>

        </div>
    );
}
export default Footer;