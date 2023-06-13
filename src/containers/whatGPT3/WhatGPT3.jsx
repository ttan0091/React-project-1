import React from "react";
import "./whatGPT3.css";
import {Feature} from "../../components";

const WhatGPT3 = () => {
    return (
        <div className="gpt3__whatgpt3 section__margin" id = "wgpt3">
            <div className="gpt3__whatgpt3-feature">
                <Feature title="What is GPT-4" text="GPT-4 (Generative Pre-trained Transformer 4) is a state-of-the-art language model developed by OpenAI. Building upon the success of its predecessors, GPT-4 exhibits advanced natural language processing capabilities. With a vast amount of pre-training data, it demonstrates improved understanding, context retention, and generation of human-like text. GPT-4 has the potential to revolutionize various applications, including chatbots, content generation, translation, and more. Its enhanced performance opens new possibilities for the field of artificial intelligence and empowers developers to create innovative and engaging experiences."/>
            </div>
            <div className="gpt3__whatgpt3-heading">
                <h1 className="gradient__text">The possibility is beyond your imagination</h1>
                <p>Explore The Library</p>
            </div>
            <div className="gpt3__whatgpt3-container">
                <Feature title="Chatbots" text="ChatGPT empowers conversational chatbots with natural language understanding and generation."/>
                <Feature title="Knowledgebase" text="ChatGPT empowers conversational chatbots with natural language understanding and generation."/>
                <Feature title="Education" text="ChatGPT serves as an AI-powered virtual tutor, providing personalized and interactive learning experiences."/>
            </div>
        </div>
    );
}
export default WhatGPT3;