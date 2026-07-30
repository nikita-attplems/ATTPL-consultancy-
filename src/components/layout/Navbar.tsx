"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";


const SCROLL_THRESHOLD = 100;

const navigation = [
  
  {
    label: "About Us",
    href: "/about",
  },
  {
    label: "Experts",
    href: "/marketplace",
  },
  {
    label: "Services",
    href: "/",
    children: [
      {
        label: "Corporate Advisory",
        href: "/services/corporate-advisory",
      },
      {
        label: "Business Consulting",
        href: "/services/business-consulting",
      },
      {
        label: "Registration Services",
        href: "/services/registration-services",
      },
      {
        label: "Certification Services",
        href: "/services/certification-services",
      },
      {
        label: "Project Consulting",
        href: "/services/project-consulting",
      },
      {
        label: "Subsidy Consulting",
        href: "/services/subsidy-consulting",
      },
      {
        label: "Legal Advisory",
        href: "/services/legal-advisory",
      },
      {
        label: "CA & Accounting",
        href: "/services/ca-accounting-services",
      },
      {
        label: "Compliance Management",
        href: "/services/compliance-management",
      },
      {
        label: "Digital Transformation",
        href: "/services/digital-transformation",
      },
    ],
  },
];

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);
  

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (
        currentScrollY > lastScrollY.current &&
        currentScrollY > SCROLL_THRESHOLD
      ) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-4 left-1/2 z-50 w-[96%] max-w-7xl -translate-x-1/2 rounded-2xl
         border border-white/50 bg-white/60 backdrop-blur-4xl shadow-[0_8px_30px_rgba(0,0,0,0.08)]
          transition-all duration-500 ${
            isVisible ? "translate-y-0" : "-translate-y-32"
          }`}
    >
      <div className="flex h-18 items-center justify-between px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logo/logo-crop.gif"
            alt="ATTPL Consultancy"
            width={180}
            height={60}
            priority
            className="h-16 w-auto object-contain"
          />
        </Link>

        {/* Navigation */}
        <ul className="hidden items-center gap-2 lg:flex">
          {navigation.map((item) => (
            <li key={item.label} className="group relative">
              <Link
                href={item.href}
                onClick={(e) => {
                  if (item.children && item.children.length > 0) {
                    e.preventDefault();
                  }
                }}
                className="flex items-center gap-1 rounded-full px-4 py-2 text-[15px] font-medium text-gray-700 transition-all duration-300 hover:bg-gray-100 hover:text-black"
              >
                {item.label}

                {item.children && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 transition-transform duration-300 group-hover:rotate-180"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                )}
              </Link>

              {/* Mega Menu */}
              {item.children && (
                <div className="invisible absolute left-1/2 top-full z-50 mt-5 w-[760px] -translate-x-1/2 rounded-3xl border border-gray-200 bg-white p-8 opacity-0 shadow-2xl transition-all duration-300 group-hover:visible group-hover:opacity-100">
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-gray-900">
                      Consultancy Services
                    </h3>

                    <p className="mt-1 text-sm text-gray-500">
                      Explore our enterprise consulting ecosystem.
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    {item.children.map((child) => (
                      <Link
                        key={child.label}
                        href={child.href}
                        className="group/item flex items-center justify-between rounded-xl border border-transparent p-4 transition-all duration-300 hover:border-gray-200 hover:bg-gray-50"
                      >
                        <div>
                          <h4 className="font-medium text-gray-900">
                            {child.label}
                          </h4>

                          <p className="mt-1 text-sm text-gray-500">
                            Learn more about this service.
                          </p>
                        </div>

                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 text-gray-400 transition-transform duration-300 group-hover/item:translate-x-1"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </Link>
                    ))}
                  </div>

              
                </div>
              )}
            </li>
          ))}
        </ul>

        {/* Right Section */}
        <div className="hidden items-center gap-3 lg:flex">
          {/* CTA */}
          <Link
            href="/contact"
            className="rounded-full bg-black px-6 py-3 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-800 hover:shadow-xl"
          >
            Book Consultation →
          </Link>
        </div>

        {/* Mobile Button */}
        <button
          className="flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 lg:hidden"
          aria-label="Open Menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-800"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </nav>
  );
}
