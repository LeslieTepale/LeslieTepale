"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { TypeAnimation } from 'react-type-animation';


const HeroSection = () => {
    return(
        <section>
            <div className="grid grid-cols-1 sm:grid-cols-12">
                <div className="col-span-7 place-self-center text-center sm:text-left">
                    <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C5E898] to-[#29ADB2]">
                            Hi there! I'm
                        </span>
                        <br />
                        <TypeAnimation
                            sequence={[
                                "Leslie",
                                1000,
                                "UX Researcher",
                                1000,
                                "UX Designer",
                                1000,
                                "Frond-End Web Developer",
                                1000,
                                ]}
                        wrapper="span"
                        speed={50}
                        repeat={Infinity}
                        />
                        </h1>
                    <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
                        Undergrad student graduating in Spring 2024, eager to learn and create diverse
                        and empathetic solutions in design. 
                    </p>
                    <div>
                        <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-[#C5E898] via-[#29ADB2] to-[#0766AD] hover:bg-slate-200 text-white">
                            <a href="#contact">Contact Me</a>
                        </button>
                        <button
                        onClick={() => {
                            const filePath = 'LeslieTepale_Resume.pdf'; // Replace with the actual path to your file
                            window.open(filePath, '_blank');
                            }}
                        className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-[#C5E898] via-[#29ADB2] to-[#0766AD] hover:bg-slate-800 text-white mt-3">
                            <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">View Resume</span>
                            </button>
                    </div>
                </div>
                <div className="col-span-5 place-self-center mt-4 lg:mt-0">
                    <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
                    <Image
                        src="/images/profile_image.png"
                        alt="hero image"
                        className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                        width={300}
                        height={300}
                    />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;