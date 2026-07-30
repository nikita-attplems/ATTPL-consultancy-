"use client";
import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { FiArrowRight } from "react-icons/fi";
import { useRouter } from "next/navigation";

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  const [activeOrbitId, setActiveOrbitId] = useState<number>(1);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const router = useRouter();

  const ringRef = useRef(null);
  const iconRefs = useRef([]);
  const systemRef = useRef(null);
  const ringAnim = useRef(null);
  const iconsAnim = useRef(null);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setActiveOrbitId((prevId) => (prevId === 5 ? 1 : prevId + 1));
    }, 2500); // Sped up rotation from 4000ms
    return () => clearInterval(timer);
  }, [isPaused]);

  const bgRef = useRef(null);

  useGSAP(() => {
    // Set initial state out to the right
    gsap.set(systemRef.current, { x: 500, opacity: 0 });

    // Use a fixed duration animation so it always enters slowly regardless of scroll speed
    ScrollTrigger.create({
      trigger: "#services",
      start: "top 70%",
      end: "bottom 20%",
      onEnter: () =>
        gsap.to(systemRef.current, {
          x: 0,
          opacity: 1,
          duration: 3.5,
          ease: "power3.out",
          overwrite: "auto",
        }),
      onLeave: () =>
        gsap.to(systemRef.current, {
          x: -500,
          opacity: 0,
          duration: 2.5,
          ease: "power3.in",
          overwrite: "auto",
        }),
      onEnterBack: () =>
        gsap.to(systemRef.current, {
          x: 0,
          opacity: 1,
          duration: 3.5,
          ease: "power3.out",
          overwrite: "auto",
        }),
      onLeaveBack: () =>
        gsap.to(systemRef.current, {
          x: 500,
          opacity: 0,
          duration: 2.5,
          ease: "power3.in",
          overwrite: "auto",
        }),
    });

    // Floating Orbs Animation
    gsap.to(".orb-1", {
      x: "10vw",
      y: "5vh",
      duration: 15,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });
    gsap.to(".orb-2", {
      x: "-15vw",
      y: "-10vh",
      duration: 20,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });
    gsap.to(".orb-3", {
      x: "10vw",
      y: "-15vh",
      duration: 18,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    ringAnim.current = gsap.to(ringRef.current, {
      rotation: 360,
      duration: 30,
      repeat: -1,
      ease: "none",
    });

    iconsAnim.current = gsap.to(iconRefs.current, {
      rotation: -360,
      duration: 30,
      repeat: -1,
      ease: "none",
    });
  }, []);

  useEffect(() => {
    if (isPaused) {
      ringAnim.current?.pause();
      iconsAnim.current?.pause();
    } else {
      ringAnim.current?.play();
      iconsAnim.current?.play();
    }
  }, [isPaused]);

  const servicesData = [
    {
      id: 1,
      title: "Corporate",
      fullName: "Corporate Advisory",
      description:
        "Strategic corporate advisory, governance, restructuring, mergers, acquisitions, and business growth consulting.",
      color: "#2F80ED", // Blue
      image:'/services/ps.jpg',
      
      link: '/services/corporate-advisory',
    },
    {
      id: 2,
      title: "Business",
      fullName: "Business Consulting",
      description:
        "Business strategy, operational excellence, market expansion, and organizational performance improvement.",
      color: "#EF5350", // Red
      image:'/marketplace/bs.jpg',
        
        link: '/services/business-consulting',
    },
    {
      id: 3,
      title: "Registration",
      fullName: "Registration Services",
      description:
        "Company incorporation, MSME, Startup India, GST, IEC, FSSAI, and statutory registration support.",
      color: "#36C66A", // Green
      image: '/marketplace/companyreg.jpg',
       
        link: '/services/registration-services',
    },
    {
      id: 4,
      title: "Certification",
      fullName: "Certification Services",
      description:
        "ISO certifications, quality management, environmental standards, and regulatory certification services.",
      color: "#00B8D9", // Cyan
      image:'/marketplace/cr.jpg',
       
        link: '/services/certification-services',
    },
    {
      id: 5,
      title: "Projects",
      fullName: "Project Consulting",
      description:
        "Project planning, DPR preparation, feasibility studies, execution strategy, and project management.",
      color: "#9B51E0", // Purple
      image:'/marketplace/startup.jpg',
       
        link: '/services/project-consulting',
    },
    {
      id: 6,
      title: "Subsidy",
      fullName: "Subsidy Consulting",
      description:
        "Government subsidy identification, documentation, application support, and incentive advisory.",
      color: "#F2C94C", // Yellow
      image:'/services/ps.jpg',
      
        link: '/services/subsidy-consulting',
    },
    {
      id: 7,
      title: "Legal",
      fullName: "Legal Advisory",
      description:
        "Corporate legal advisory, contracts, litigation support, intellectual property, and compliance.",
      color: "#F5A623", // Orange
      image:'/marketplace/legal.jpg',
       
        link: '/services/legal-advisory',
    },
    {
      id: 8,
      title: "CA",
      fullName: "CA & Accounting",
      description:
        "Accounting, taxation, auditing, financial reporting, and statutory compliance.",
      color: "#26A69A", // Teal
      image:'/marketplace/ca.jpg',
      
        link: '/services/ca-accounting-services',
    },
    {
      id: 9,
      title: "Compliance",
      fullName: "Compliance Management",
      description:
        "End-to-end regulatory compliance, governance, internal audits, and risk management.",
      color: "#5C6BC0", // Indigo
      image:'/marketplace/complaince',
      
        link: '/services/compliance-management',
    },
    {
      id: 10,
      title: "Digital",
      fullName: "Digital Transformation",
      description:
        "Digital strategy, AI, automation, ERP implementation, and enterprise transformation.",
      color: "#7E57C2", // Deep Purple
      image:'/marketplace/technology.jpg',
    
        link: '/services/digital-transformation',
    },
  ];
  const activeOrbitService =
    servicesData.find((s) => s.id === activeOrbitId) || servicesData[0];

  return (
    <section
      id="services"
      className="py-32 relative overflow-hidden bg-[#070b14]"
    >
      {/* Dynamic Background Images */}
      {servicesData.map((service) => (
        <div
          key={`bg-${service.id}`}
          className={`absolute top-0 left-0 w-full h-full bg-cover bg-center transition-all duration-500 ease-in-out z-0 ${activeOrbitId === service.id ? "opacity-100 scale-105" : "opacity-0 scale-100"}`}
          style={{ backgroundImage: `url(${service.image})` }}
        ></div>
      ))}

      {/* Deep Dark Overlay to ensure perfect text readability */}
      <div
        className="absolute top-0 left-0 w-full h-full bg-[#0a0a1a]/85 z-10 transition-colors duration-1000"
        style={{ backgroundColor: `${activeOrbitService.color}20` }}
      ></div>
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-[#0a0a1a] to-transparent z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-black text-white uppercase leading-tight">
            Our Consulting <br />
            <span className="text-logo-green">Solutions</span>
          </h2>

          {/* Mobile Services List */}
          <div className="mt-10 grid grid-cols-1 gap-4 md:hidden">
            {servicesData.map((service) => (
              <button

                key={service.id}
                type="button"
                onClick={() => setActiveOrbitId(service.id)}
                className={`group w-full rounded-2xl border px-5 py-4 text-left transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/30 ${
                  activeOrbitId === service.id
                    ? "border-transparent bg-white shadow-xl"
                    : "border-white/10 bg-white/5 hover:border-white/30 hover:bg-white/10"
                }`}
              >
                <div className="flex items-center justify-between gap-4">
                  <div className="flex-1">
                    <h3
                      className="text-lg font-semibold transition-colors duration-300"
                      style={{
                        color:
                          activeOrbitId === service.id ? service.color : "#fff",
                      }}
                    >
                      {service.fullName}
                    </h3>

                    <p
                      className={`mt-2 text-sm leading-relaxed transition-colors duration-300 ${
                        activeOrbitId === service.id
                          ? "text-gray-600"
                          : "text-gray-300"
                      }`}
                    >
                      {service.description}
                    </p>
                  </div>

                  <FiArrowRight
                    size={22}
                    className={`flex-shrink-0 transition-all duration-300 ${
                      activeOrbitId === service.id
                        ? "translate-x-1 text-black"
                        : "text-black group-hover:translate-x-1"
                    }`}
                  />
                </div>
              </button>
            ))}
          </div>
          <div className="w-20 h-1 bg-logo-green mx-auto mt-6"></div>
        </div>

        <div className="relative flex justify-center items-center py-4 min-h-[550px] hidden md:flex">
          <div
            ref={systemRef}
            className="relative w-[500px] h-[500px]"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* The Rotating Ring with Nodes */}
            <div
              ref={ringRef}
              className="absolute inset-0 rounded-full border-[1.5px] border-dashed border-gray-300"
            >
              {servicesData.map((service, index) => {
                const angle =
                  (index / servicesData.length) * (2 * Math.PI) - Math.PI / 2;
                const radius = 250;
                const x = radius * Math.cos(angle);
                const y = radius * Math.sin(angle);

                return (
                  <div
                    key={`orbit-${service.id}`}
                    className="group absolute top-1/2 left-1/2 cursor-pointer"
                    style={{
                      transform: `translate(${x}px, ${y}px) translate(-50%, -50%)`,
                    }}
                    onMouseEnter={() => setActiveOrbitId(service.id)}
                  >
                    {/* Dot */}
                    <div
                      className="rounded-full transition-all duration-300"
                      style={{
                        width: activeOrbitId === service.id ? 40 : 24,
                        height: activeOrbitId === service.id ? 40 : 24,
                        backgroundColor: service.color,
                        boxShadow:
                          activeOrbitId === service.id
                            ? `0 0 20px ${service.color}`
                            : "none",
                      }}
                    />
                  </div>
                );
              })}
            </div>

            {/* The Static Center Planet */}
            <button
              onClick={() => router.push(activeOrbitService.link)}
              className="group absolute top-1/2 left-1/2 w-[280px] h-[280px] -ml-[140px] -mt-[140px] rounded-full bg-white shadow-[0_20px_50px_rgba(0,0,0,0.1)] flex flex-col items-center justify-center text-center p-8 z-10 border-[6px] overflow-hidden"
              style={{ borderColor: activeOrbitService.color }}
            >
              {/* Animated Background */}
              <span
                className="absolute inset-0 rounded-full origin-center scale-0 transition-transform duration-500 ease-out group-hover:scale-100"
                style={{ backgroundColor: activeOrbitService.color }}
              />

              {/* Text */}
              <span
                className="relative z-10 text-2xl font-black leading-tight transition-colors duration-300 group-hover:text-white!"
                style={{
                  color: activeOrbitService.color,
                }}
              >
                {activeOrbitService.fullName}
              </span>
      <span className="mt-10 flex h-12 w-12 items-center justify-center rounded-full border border-current/30 bg-white/10 backdrop-blur-sm transition-all duration-300 group-hover:bg-white/20 group-hover:scale-110">
  <FiArrowRight className="h-5 w-5" />
</span>
            </button>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
