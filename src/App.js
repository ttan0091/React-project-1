import React from "react";
import {Article,Brand,CTA,Feature,Navbar} from "./components";
import {Footer,Blog,Possibility,Features,WhatGPT3,Header} from "./containers";
import "./App.css";

const App = () => {
    return (
        <div className="App">
            <div className="gradient_bg">
                <Navbar/>
                <Header/>
            </div>

            <Brand />
            <Features />
            <WhatGPT3 />
            <Possibility />
            <Article />
            <Blog />
            <CTA />
            <Footer />



        </div>
    );
}
export default App;
//////////////////////////////////、、、、、、、、、
//////////////////////////