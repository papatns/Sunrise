import React from "react";
import styles from "@/app/styles/HeroSection.module.css";
import Image from "next/image";
import Images from "../../../public/mob.webp";

const HeroSection = () => {
  return (
    <div className="hero-wrapper">
      <div className="hero-container">
        <div className="top">
          <h3>AirPods Pro 2 are on us</h3>
          <h4 className="discover">Discover now</h4>
          <h3 className="phone">0123 456 789</h3>
        </div>
        <div className="bottom">
          <div className="hs-left">
            <div className="hero-header">NEW:ROAMING NOW INCLUDED IN ALL PLANS</div>
            <p>
              With a permanent loyalty of -20.-/mth + 250.- bonus on selected
              plans
            </p>
            
              <h4 className="discover">Order online</h4>
              <h3 className="phone">0123 456 789</h3>
            
          </div>
          <div className="hs-right">
            <Image
              src={Images}
              width={600}
              height={600}
              alt="abc"
              className="home-image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
