import React from "react";
import "./possibility.css";
import PossibilityImage from "../../assets/possibility.png";

const Possibility = () => {
    return (
        <div className="gpt3__possibility section__padding" id="possibility">
            <div className="gpt3__possibility-image">
                <img src={PossibilityImage} alt="possibility"/>
            </div>
            <div className="gpt3__possibility-content">
                <h4>Request Early Access to Get Started</h4>
                <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
                <p>With its unparalleled advancements in natural language processing and AI capabilities, GPT-4 opens up a world of endless opportunities. From revolutionizing virtual assistants to enabling advanced content generation, GPT-4 paves the way for groundbreaking innovations that will shape the future.</p>
                <h4>Request Early Access to Get Started</h4>
            </div>

        </div>
    );
}
export default Possibility;