"use client";

import { IconType } from "react-icons";
import Image from "next/image";
import { ATTPL_ANIMATED_CROPPED_DARK_LOGO } from "@/constants/Images";
import { useState, useEffect, useRef } from "react";
import Button from "../ui/Button";

import {
  FaBriefcase,
  FaBalanceScale,
  FaFileAlt,
  FaUsers,
} from "react-icons/fa";

import { MdOutlineAccountBalance } from "react-icons/md";

import { HiOutlineCalculator } from "react-icons/hi";

const nodes: {
  title: string;
  icon: IconType;
  position: string;
}[] = [
  {
    title: "Business Consulting",
    icon: FaBriefcase,
    position: "top-[2%] left-1/2 -translate-x-1/2",
  },
  {
    title: "Legal Advisory",
    icon: FaBalanceScale,
    position: "top-[18%] right-[2%]",
  },
  {
    title: "Financial Consulting",
    icon: HiOutlineCalculator,
    position: "bottom-[18%] right-[2%]",
  },
  {
    title: "Compliance & Documentation",
    icon: FaFileAlt,
    position: "bottom-[2%] left-1/2 -translate-x-1/2",
  },
  {
    title: "Government Liaison",
    icon: MdOutlineAccountBalance,
    position: "bottom-[18%] left-[2%]",
  },
  {
    title: "Corporate Strategy",
    icon: FaUsers,
    position: "top-[18%] left-[2%]",
  },
];

export default function Ecosystem() {
  const fullText = `ATTPL
Your Integrated
Enterprise
Consulting
Ecosystem.`;

  const sectionRef = useRef<HTMLDivElement | null>(null);

  const [isVisible, setIsVisible] = useState(false);

  const [typedText, setTypedText] = useState("");
  const [typingDone, setTypingDone] = useState(false);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.3,
      },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let index = 0;

    const interval = setInterval(() => {
      setTypedText(fullText.slice(0, index + 1));

      index++;

      if (index >= fullText.length) {
        clearInterval(interval);

        setTypingDone(true);

        setTimeout(() => {
          setShowButton(true);
        }, 1000);
      }
    }, 60);

    return () => clearInterval(interval);
  }, [isVisible]);

 return (
  <section
    ref={sectionRef}
    className="bg-[#FFFDF8] py-16 md:py-20 lg:py-24"
  >
    <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">
      <div className="grid w-full grid-cols-1 items-center gap-8 lg:grid-cols-2 xl:gap-16">
        {/* Left */}
        <div className="w-full max-w-[560px] mx-auto text-center lg:mx-0 lg:max-w-none lg:text-left">
          <h2 className="mt-4 whitespace-pre-line text-[clamp(2.2rem,3.3vw,3.8rem)] font-bold leading-[1.05] text-[#13263F]">
            {typedText}

            {isVisible && !typingDone && (
              <span className="animate-pulse">|</span>
            )}
          </h2>

          {showButton && (
            <div className="mt-8 flex justify-center lg:justify-start animate-slide-right">
              <Button href="/service-form">
                Get Started
              </Button>
            </div>
          )}
        </div>

        {/* Right */}
        <div className="mt-12 flex justify-center lg:mt-0 lg:justify-end">
          <div className="relative aspect-square w-[340px] sm:w-[420px] md:w-[520px] lg:w-[560px] xl:w-[620px] 2xl:w-[650px]">
            {/* Orbit Ring */}
            <div className="absolute left-1/2 top-1/2 h-[68%] w-[68%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-[#F4B400]/60 animate-spin [animation-duration:50s]" />

            {/* Inner Ring */}
            <div className="absolute left-1/2 top-1/2 h-[55%] w-[55%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-gray-300" />

            {/* Center Logo */}
            <div className="absolute left-1/2 top-1/2 z-30 -translate-x-1/2 -translate-y-1/2">
              <div className="relative flex h-[clamp(110px,24vw,210px)] w-[clamp(110px,24vw,210px)] items-center justify-center rounded-full bg-white shadow-[0_20px_60px_rgba(15,76,129,0.25)]">
                <div className="absolute inset-0 rounded-full border-2 border-[#F4B400] animate-ping opacity-20" />
                <div className="absolute -inset-5 rounded-full border border-[#0F4C81]" />
                <div className="absolute -inset-10 rounded-full border border-gray-300" />

                <Image
                  src="/logo/logo-crop.gif"
                  alt="ATTPL"
                  width={160}
                  height={160}
                  className="h-auto w-[60%] md:w-[65%]"
                />
              </div>
            </div>

            {/* Connection Lines */}
            <div className="absolute left-1/2 top-1/2 h-[68%] w-[68%] -translate-x-1/2 -translate-y-1/2">
              <div className="absolute left-1/2 top-0 h-1/2 w-px bg-gray-300" />
              <div className="absolute left-0 top-1/2 h-px w-1/2 bg-gray-300" />
              <div className="absolute right-0 top-1/2 h-px w-1/2 bg-gray-300" />
              <div className="absolute bottom-0 left-1/2 h-1/2 w-px bg-gray-300" />
            </div>

            {/* Nodes */}
            {nodes.map((node) => {
              const Icon = node.icon;

              return (
                <div
                  key={node.title}
                  className={`absolute ${node.position} z-20`}
                >
                  <div className="group flex w-24 flex-col items-center rounded-xl border border-gray-200 bg-white p-2.5 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:border-[#F4B400] hover:shadow-xl sm:w-28 sm:p-3 md:w-32 lg:w-36 lg:rounded-2xl lg:p-5 xl:w-40">
                    <div className="mb-3 rounded-xl bg-[#FFF5DB] p-3">
                      <Icon className="text-lg text-[#F4B400] sm:text-xl lg:text-2xl" />
                    </div>

                    <h3 className="text-center text-[10px] font-semibold leading-snug sm:text-xs md:text-sm lg:text-base">
                      {node.title}
                    </h3>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  </section>
)}