"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
  FaPinterestP,
  FaYoutube,
} from "react-icons/fa6";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const quickLinks = [
  {
    name: "Home",
    href: "/",
  },

  {
    name: "Experts",
    href: "/marketplace",
  },

  {
    name: "About Us",
    href: "/about",
  },
  {
    name: "Contact Us",
    href: "/contact",
  },
];
const platforms = [
  {
    name: "ATTPL Group",
    href: "https://attplgroup.com/",
  },
  {
    name: "ATTPL IT",
    href: "https://it.attplgroup.com/",
  },
  {
    name: "ATTPL Consultancy",
    href: "https://consultancy.attplgroup.com/",
  },
  {
    name: "ATTPL Infra",
    href: "https://infra.attplgroup.com/",
  },
  {
    name: "ATTPL Solar",
    href: "https://solar.attplgroup.com/",
  },
  {
    name: "ATTPL Finance",
    href: "https://finance.attplgroup.com/",
  },
];
const intellectualPropertyLinks = [
  {
    name: "Copyright Policy",
    href: "/policies/copyright-policy",
  },
  {
    name: "Trademark Policy",
    href: "/policies/trademark-policy",
  },
  {
    name: "DMCA Policy",
    href: "/policies/dmca-policy",
  },
  {
    name: "Research & Scientific Content Policy",
    href: "/policies/research-scientific-content-policy",
  },
];
const aiEthicalTechnologyLinks = [
  {
    name: "Responsible AI Policy",
    href: "/policies/responsible-ai-policy",
  },
  {
    name: "Ethical Use Declaration",
    href: "/policies/ethical-use-declaration",
  },
  {
    name: "Digital Trust Charter",
    href: "/policies/digital-trust-charter",
  },
];
const informationSecurityLinks = [
  {
    name: "Enterprise Information Security Policy",
    href: "/policies/enterprise-information-security-policy",
  },
  {
    name: "Security Vulnerability Disclosure Policy",
    href: "/policies/security-vulnerability-disclosure-policy",
  },
  {
    name: "Incident Response Policy",
    href: "/policies/incident-response-policy",
  },
  {
    name: "Business Continuity Policy",
    href: "/policies/business-continuity-policy",
  },
  {
    name: "Disaster Recovery Policy",
    href: "/policies/disaster-recovery-policy",
  },
];
const dataGovernanceLinks = [
  {
    name: "Data Governance Framework",
    href: "/policies/data-governance-framework",
  },
  {
    name: "Data Retention & Deletion Policy",
    href: "/policies/data-retention-deletion-policy",
  },
  {
    name: "Farmer Data Rights Charter",
    href: "/policies/farmer-data-rights-charter",
  },
];
const marketplaceApiLinks = [
  {
    name: "Marketplace Seller Policy",
    href: "/policies/marketplace-seller-policy",
  },
  {
    name: "API Usage Policy",
    href: "/policies/api-usage-policy",
  },
];

const sustainabilityLinks = [
  {
    name: "Responsible Agriculture Charter",
    href: "/policies/responsible-agriculture-charter",
  },
  {
    name: "ESG & Sustainability Policy",
    href: "/policies/esg-sustainability-policy",
  },
];
const transparencyLinks = [
  {
    name: "Transparency Report",
    href: "/policies/transparency-report",
  },
  {
    name: "Government & Regulatory Requests Policy",
    href: "/policies/government-regulatory-requests-policy",
  },
];
const supportGovernanceLinks = [
  {
    name: "Community Guidelines",
    href: "/policies/community-guidelines",
  },
  {
    name: "Grievance Redressal Policy",
    href: "/policies/grievance-redressal-policy",
  },
  {
    name: "Contact & Support Policy",
    href: "/policies/contact-support-policy",
  },
];

export default function Footer() {
  const sectionRef = useRef(null);

  useGSAP(
    () => {
      gsap.from(".footer-content > *", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
        },
      });
    },
    { scope: sectionRef },
  );

  return (
    <footer
      ref={sectionRef}
      className="bg-[#1B2435] text-white py-16  px-4 border-t border-gray-100  "
    >
      <div className="max-w-7xl mx-auto footer-content">
        {/* ================= TOP ================= */}

        <div className="flex flex-col items-center text-center">
          <Image
            src="/logo/frame-1.webp"
            alt="ATTPL Logo"
            width={200}
            height={80}
            className="h-20 w-auto object-contain"
            priority
            unoptimized
          />

          <p className="mt-5 max-w-3xl text-lg leading-8 text-gray-500">
            Your trusted partner for corporate advisory, business consulting,
            legal solutions, compliance management, certifications, project
            consulting, and enterprise transformation across industries.
          </p>

          <div className="flex items-center justify-center gap-7 mt-8">
            <a
              href="https://www.facebook.com/attplgroup/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#1877F2] text-2xl hover:scale-110 transition duration-300"
            >
              <FaFacebookF />
            </a>

            <a
              href="https://www.instagram.com/attpleasylife"
              className="text-[#E4405F] text-2xl hover:scale-110 transition duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>

            <a
              href="https://www.linkedin.com/in/ashok-godara-381947261"
              className="text-[#0A66C2] text-2xl hover:scale-110 transition duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn />
            </a>

            <a
              href="https://x.com/attplgroup"
              className="text-black text-2xl hover:scale-110 transition duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaXTwitter />
            </a>

            <a
              href="https://www.pinterest.com/attplgroup/"
              className="text-[#E60023] text-2xl hover:scale-110 transition duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaPinterestP />
            </a>

            <a
              href="https://www.youtube.com/@attplgroup"
              className="text-[#FF0000] text-2xl hover:scale-110 transition duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutube />
            </a>
          </div>

          {/* Social */}
          <div className="mt-8 flex items-center gap-7">
            {/* Keep all your social icons here exactly as they are */}
          </div>
        </div>

        {/* ================= GAP ================= */}

        <div className="h-20"></div>

        {/* ================= LINKS ================= */}

        <div className="grid grid-cols-2 gap-10 md:grid-cols-3 lg:grid-cols-5 ">
          {/* Quick Links */}

          <div>
            <h3 className="mb-6 text-xl font-semibold ">Quick Links</h3>

            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-500 hover:text-[#1A6DB5] transition"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-6 text-xl font-semibold text-white">
              Marketplace & API
            </h3>

            <ul className="space-y-4">
              {marketplaceApiLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-500 hover:text-[#1A6DB5] transition"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-6 text-xl font-semibold text-white">
              Transparency
            </h3>

            <ul className="space-y-4">
              {transparencyLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-500 hover:text-[#1A6DB5] transition"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-6 text-xl font-semibold text-white">
              Sustainability
            </h3>

            <ul className="space-y-4">
              {sustainabilityLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-500 hover:text-[#1A6DB5] transition"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-6 text-xl font-semibold text-white">
              Support & Governance
            </h3>

            <ul className="space-y-4">
              {supportGovernanceLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-500 hover:text-[#1A6DB5] transition"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-6 text-xl font-semibold text-white">
              Intellectual Property
            </h3>

            <ul className="space-y-4">
              {intellectualPropertyLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-500 hover:text-[#1A6DB5] transition"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-6 text-xl font-semibold text-white">
              AI & Ethical Technology
            </h3>

            <ul className="space-y-4">
              {aiEthicalTechnologyLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-500 hover:text-[#1A6DB5] transition"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-6 text-xl font-semibold text-white">
              Information Security
            </h3>

            <ul className="space-y-4">
              {informationSecurityLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-500 hover:text-[#1A6DB5] transition"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-6 text-xl font-semibold text-white">
              Data Governance
            </h3>

            <ul className="space-y-4">
              {dataGovernanceLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-500 hover:text-[#1A6DB5] transition"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-6 text-xl font-semibold">Our Platforms</h3>

            <ul className="space-y-4">
              {platforms.map((platform) => (
                <li key={platform.name}>
                  <a
                    href={platform.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-[#1A6DB5] transition"
                  >
                    {platform.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
