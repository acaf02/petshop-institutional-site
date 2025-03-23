import React from 'react';
import { assets } from "../assets/assets";

const Hero = () => {
    return (
        <div id="content" className="relative w-full h-screen overflow-hidden">
            <div className="hero w-full h-full relative">
                <video
                    className="absolute top-0 left-0 w-full h-full object-cover max-w-full"
                    loop
                    autoPlay
                    muted
                >
                    <source src={assets.hero} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
        </div>
    );
};

export default Hero;
