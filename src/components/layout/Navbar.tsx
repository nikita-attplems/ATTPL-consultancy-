"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { HiOutlineMenu , HiOutlineX } from "react-icons/hi";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

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
  {
    label: "Contact",
    href: "/contact",
  },
];

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

 useEffect(() => {
  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    // Always show navbar at the very top
    if (currentScrollY <= 10) {
      setIsVisible(true);
    }
    // Scrolling down → hide
    else if (currentScrollY > lastScrollY.current) {
      setIsVisible(false);
    }
    // Scrolling up → show
    else if (currentScrollY < lastScrollY.current) {
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
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileMenuOpen(false);
        setMobileServicesOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
  <nav
  className={`fixed left-1/2 top-4 z-50 w-[94%] -translate-x-1/2
    sm:w-[95%] lg:w-[96%] max-w-7xl rounded-2xl
    border border-gray-200 bg-white
    shadow-[0_8px_30px_rgba(0,0,0,0.07)]
    transition-transform duration-300 ease-out
    ${isVisible ? "translate-y-0" : "-translate-y-32"}`}
>
      <div className="flex h-16 lg:h-18 items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logo/logo-crop.gif"
            alt="ATTPL Consultancy"
            width={180}
            height={60}
            priority
            className="h-12 sm:h-14 lg:h-16 w-auto object-contain"
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
            href="/service-form"
            className="rounded-full bg-[#252025] px-6 py-3 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-800 hover:shadow-xl"
          >
            Book Consultation →
          </Link>
        </div>

        {/* Mobile Button */}
    
       <button
  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
  className="flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 bg-white lg:hidden"
  aria-label="Open Menu"
>
  {mobileMenuOpen ? (
    <HiOutlineX className="h-6 w-6 text-black" />
  ) : (
    <HiOutlineMenu  className="h-6 w-6 text-black" />
  )}
</button>
      </div>
      {/* Mobile Menu */}
<div
  className={`overflow-hidden transition-all duration-300 lg:hidden ${
    mobileMenuOpen ? "max-h-[700px] border-t" : "max-h-0"
  }`}
>
  <div className="space-y-2 bg-white px-6 py-5">

    {navigation.map((item) => (
      <div key={item.label}>

        {/* Normal Link */}
        {!item.children && (
          <Link
            href={item.href}
            onClick={() => setMobileMenuOpen(false)}
            className="block rounded-lg px-3 py-3 text-gray-700 hover:bg-gray-100"
          >
            {item.label}
          </Link>
        )}

        {/* Services */}
        {item.children && (
          <>
            <button
              onClick={() =>
                setMobileServicesOpen(!mobileServicesOpen)
              }
              className="flex w-full items-center justify-between rounded-lg px-3 py-3 text-left text-gray-700 hover:bg-gray-100"
            >
              <span>{item.label}</span>

              {mobileServicesOpen ? (
                <FiChevronUp />
              ) : (
                <FiChevronDown />
              )}
            </button>

            <div
              className={`overflow-hidden transition-all duration-300 ${
                mobileServicesOpen
                  ? "max-h-[700px] mt-2"
                  : "max-h-0"
              }`}
            >
              <div className="ml-4 border-l border-gray-200 pl-4">

                {item.children.map((child) => (
                  <Link
                    key={child.label}
                    href={child.href}
                    onClick={() => {
                      setMobileMenuOpen(false);
                      setMobileServicesOpen(false);
                    }}
                    className="block rounded-lg px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-black"
                  >
                    {child.label}
                  </Link>
                ))}

              </div>
            </div>
          </>
        )}
      </div>
    ))}

    <Link
      href="/service-form"
      onClick={() => setMobileMenuOpen(false)}
      className="mt-4 block rounded-full bg-black px-5 py-3 text-center font-semibold text-white"
    >
      Book Consultation →
    </Link>

  </div>
</div>
    </nav>
  );
}
