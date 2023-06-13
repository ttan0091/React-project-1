import React from "react";
import "./features.css";
import {Feature} from "../../components";

const featuresData = [
    {
        title: 'Embrace Tech for Progress',
        text: 'Seize opportunities, drive innovation, and propel towards a brighter future with cutting-edge technology advancements.'
    },
    {
        title: 'Unlock Potential, Foster Growth',
        text: 'Embrace a forward-thinking mindset, unleash creativity, and achieve future success through continuous learning and personal development.'
    },
    {
        title: 'Embrace Change, Explore Innovation',
        text: 'Adapt to change, explore emerging technologies, and embrace innovation for staying ahead in a rapidly evolving world.'
    },
    {
        title: 'Drive Progress, Unleash Innovation',
        text: 'Proactively pursue growth, unleash the power of innovation, and transform aspirations into remarkable achievements with bold action.'
    }
]
const Features = () => {
    return (
        <div className="gpt3__features section__padding" id="features">
            <div className="gpt3__features-heading">
                <h1 className="gradient__text">The Future is Now and You Just Need To Realize It. Step into Future Today & Make it Happen.</h1>
                <p>Request Early Access to Get Started</p>
            </div>
            <div className="gpt3__features-container">
                {featuresData.map((feature, index) => {
                    return (
                        <Feature title={feature.title} text={feature.text} key={index}/>
                    )
                })}
            </div>


        </div>
    );
}
export default Features;