import React from "react";
import { Link } from "react-router-dom";  // Importe o Link
import { assets } from "../assets/assets";

const Hero = () => {
  return (
    <div>
      {/* Hero */}
      <div
        style={{
          margin: "auto",
          maxWidth: "100%",
          position: "relative",
        }}
      >
        <Link to="/about">
          <video
            className="w-full h-auto" 
            loop 
            autoPlay 
            muted
            playsInline
          >
            <source src={assets.hero} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
