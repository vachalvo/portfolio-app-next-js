"use client"

import React, { ReactNode } from "react";
import SocialList from "../elements/SocialList";
import Typed from "react-typed";
import Particles from "../elements/Particles";

function Hero(): ReactNode {
    return (
        <div id="home" className="hero min-h-screen max-h-screen bg-base-200">
            <Particles />
            <div className="hero-content">
                <div className="w-full">
                    <span className="text-5xl font-bold">Hello there, I am </span>
                    <span className="text-5xl md:text-6xl font-bold text-primary">
            Vojtěch Váchal
          </span>
                    <div className="py-6">
                        <Typed
                            className="text-3xl font-medium"
                            strings={["Software Developer", "Mobile App Developer", "Web Developer", "IT Enthusiast"]}
                            typeSpeed={60}
                            backSpeed={80}
                            loop
                        />
                    </div>
                </div>
            </div>
            <div className={"mb-6 self-end"}>
                <SocialList />
            </div>
        </div>
    );
}

export default Hero;
