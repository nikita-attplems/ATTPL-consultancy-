"use client";
import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Image from "next/image";

const Hero = () => {
  const headlines = [
    { line1: "WE HELP TO GROW", line2: "YOUR BUSINESS" },
    { line1: "NAVIGATING", line2: "COMPLEXITY" },
    { line1: "STRATEGIC", line2: "PARTNERS" },
  ];

  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const textRef = useRef(null);
  const bgRef = useRef(null);

  // GSAP Background Animation
  useGSAP(() => {
    gsap.to(bgRef.current, {
      scale: 1.1,
      xPercent: -2,
      yPercent: 1,
      duration: 25,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });
  }, []);

  const changeSlide = (newIndex: number) => {
    if (newIndex === currentIndex) return;
    gsap.to(textRef.current, {
      opacity: 0,
      x: -20,
      duration: 0.4,
      ease: "power2.in",
      onComplete: () => {
        setCurrentIndex(newIndex);
        gsap.fromTo(
          textRef.current,
          { opacity: 0, x: 20 },
          { opacity: 1, x: 0, duration: 0.4, ease: "power2.out" },
        );
      },
    });
  };

  useEffect(() => {
    const timer = setInterval(() => {
      changeSlide((currentIndex + 1) % headlines.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  return (
    <section className="relative min-h-[80vh] flex items-center">
      <div ref={bgRef} className="absolute inset-0 z-0">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        >
          <source src="/home/herobg.webm" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Dark Radial Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle,rgba(0,0,0,0.2)_0%,rgba(0,0,0,0.6)_100%)] z-10"></div>

      <div
        className="
    absolute
    bottom-0
    right-0
    translate-y-1/2
    w-24
    h-24
    sm:w-32 sm:h-32
    md:w-40 md:h-40
    lg:w-52 lg:h-52
    xl:w-64 xl:h-64
    2xl:w-72 2xl:h-72
    z-20
    pointer-events-none
    select-none
  "
      >
        <Image
          src="/home/badge.png"
          alt="ATTPL Badge"
          fill
          priority
          className="object-contain"
        />
      </div>

      <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto flex flex-col items-center text-center gap-5">
          <div className="flex items-center justify-center gap-4 mb-2">
            <span className="w-16 h-1 rounded-sm bg-gradient-to-r from-logo-purple via-logo-blue via-logo-green via-logo-yellow to-logo-red"></span>
          </div>

          <div className="min-h-[140px] flex items-start justify-center">
            <h1
              ref={textRef}
              className="text-white text-5xl md:text-7xl font-black leading-[1.1] drop-shadow-md uppercase"
            >
              {headlines[currentIndex].line1} <br />
              <span className="text-[#FBB040]">
                {headlines[currentIndex].line2}
              </span>
            </h1>
          </div>

          <p className="text-[#f0f0f0] text-lg font-medium leading-relaxed max-w-[80%] mx-auto mb-6">
            ATTPL Consultancy provides bespoke Political, Legal, and Corporate
            solutions. Navigating complexity so you can focus on growth.
          </p>

          {/* Slider Dots Indicator */}
          <div className="flex justify-center gap-3">
            {headlines.map((_, index) => (
              <span
                key={index}
                className={`h-2 rounded-full cursor-pointer transition-all duration-300 ${index === currentIndex ? "bg-accent w-6" : "bg-gray-300 w-2"}`}
                onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
                  changeSlide(index)
                }
              ></span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
