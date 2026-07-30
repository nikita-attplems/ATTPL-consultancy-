"use client";
import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const numberRef = useRef(null);

  useGSAP(() => {
    // Entrance animation for the text blocks on the right
    gsap.from(textRef.current.children, {
      y: 50,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 60%", // Triggers when the top of the section hits 60% of the viewport height
        toggleActions: "restart reverse restart reverse",
      },
    });

    // High-performance GSAP count animation
    gsap.to(numberRef.current, {
      innerHTML: 16,
      duration: 2.5,
      ease: "power2.out",
      snap: { innerHTML: 1 },
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 60%", // Triggers when the top of the section hits 60% of the viewport height
        once: true, // Ensures the animation only plays once upon loading the section
      },
    });
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-32 bg-[#FFFDF8]  border-gray-200 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Side: Stats and Visuals */}
        <div className="relative h-96">
          <div>
            <span className="text-gray-500 font-semibold tracking-wider text-xs uppercase block mb-4">
              Who We Are
            </span>
            <h2 className="text-4xl md:text-5xl  leading-tight mb-10 text-[#FBB040]">
              RELIABLE <br />
              <span className="text-logo-blue">CONSULTANCY</span>
            </h2>

            {/* Grounded Corporate Counter Box */}
            <div className="inline-flex items-center gap-6 bg-white border border-gray-200 px-8 py-6 rounded-lg shadow-xl">
              <span className="text-6xl font-black text-gray-900 leading-none flex items-baseline tracking-tighter">
                <span ref={numberRef}>0</span>
                <span className="text-logo-blue text-4xl ml-1">+</span>
              </span>
              <span className="text-sm text-gray-600 font-medium uppercase tracking-wider leading-relaxed border-l border-gray-200 pl-6 ml-2">
                Years of <br /> Excellence
              </span>
            </div>
          </div>
        </div>

        {/* Right Side: Text Description */}
        <div
          ref={textRef}
          className="space-y-8 text-lg font-light leading-relaxed text-gray-600"
        >
          <p className="text-2xl font-medium leading-snug text-gray-900">
            <strong className="font-bold text-logo-blue">
              About ATTPL Consultancy Services
            </strong>{" "}
            is the flagship Enterprise Consulting Division of ATTPL Group,
            delivering integrated Business Consulting, Corporate Advisory,
            Legal, Financial, Compliance, Certification, and Digital
            Transformation solutions through one unified enterprise ecosystem.
            We empower organizations with strategic expertise, innovative
            technology, and trusted professional guidance to accelerate
            sustainable business growth.
          </p>

          <p>
            Serving startups, SMEs, enterprises, institutions, and government
            organizations, ATTPL Consultancy Services provides end-to-end
            consulting support across every stage of the business lifecycle—from
            company registration and regulatory compliance to strategic
            planning, business transformation, digital enablement,
            certification, and global expansion. Our integrated approach ensures
            every client receives comprehensive, future-ready solutions from a
            single trusted platform.
          </p>

          <div className="my-8 h-px w-24 bg-gray-300" />

          <p>
            Backed by a multidisciplinary network of Business Consultants,
            Corporate Advisors, Chartered Accountants, Company Secretaries,
            Legal Professionals, Industry Specialists, and Technology Experts,
            we combine domain expertise with AI-enabled consulting capabilities
            to deliver measurable business outcomes, operational excellence,
            regulatory confidence, and long-term organizational success.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
