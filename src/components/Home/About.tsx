"use client";
import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
const sectionRef = useRef<HTMLElement | null>(null);
const textRef = useRef<HTMLDivElement | null>(null);
const numberRef = useRef<HTMLSpanElement | null>(null);

  useGSAP(() => {
  if (!sectionRef.current || !textRef.current || !numberRef.current) return;

  gsap.from(textRef.current.children, {
    y: 50,
    opacity: 0,
    duration: 1,
    stagger: 0.2,
    ease: "power3.out",
    scrollTrigger: {
      trigger: sectionRef.current,
      start: "top 60%",
      toggleActions: "restart reverse restart reverse",
    },
  });

  gsap.to(numberRef.current, {
    innerHTML: 16,
    duration: 2.5,
    ease: "power2.out",
    snap: { innerHTML: 1 },
    scrollTrigger: {
      trigger: sectionRef.current,
      start: "top 60%",
      once: true,
    },
  });
}, []);
  return (
<section
  id="about"
  ref={sectionRef}
  className="relative overflow-hidden bg-background py-32"
>
  <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">

    {/* Left Side: Stats and Visuals */}
    <div className="relative h-96">
      <div>

        <span className="mb-4 block text-xs font-semibold uppercase tracking-wider text-text-secondary">
          Who We Are
        </span>

        <h2 className="mb-10 text-4xl leading-tight text-gold md:text-5xl">
          RELIABLE <br />

          <span className="text-primary">
            CONSULTANCY
          </span>
        </h2>

        {/* Grounded Corporate Counter Box */}
        <div className="inline-flex items-center gap-6 rounded-lg border border-border bg-surface px-8 py-6 shadow-xl">

          <span className="flex items-baseline text-6xl font-black leading-none tracking-tighter text-primary">

            <span ref={numberRef}>
              0
            </span>

            <span className="ml-1 text-4xl text-gold">
              +
            </span>

          </span>

          <span className="ml-2 border-l border-border pl-6 text-sm font-medium uppercase leading-relaxed tracking-wider text-text-secondary">
            Years of <br /> Excellence
          </span>

        </div>
      </div>
    </div>

    {/* Right Side: Text Description */}
    <div
      ref={textRef}
      className="space-y-8 text-lg font-light leading-relaxed text-text-secondary"
    >

      <p className="text-2xl font-medium leading-snug text-primary">

        <strong className="font-bold text-gold">
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

      <div className="my-8 h-px w-24 bg-border" />

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
