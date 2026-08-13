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

/* ================= QUICK LINKS ================= */

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

/* ================= PLATFORMS ================= */

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

/* ================= MARKETPLACE ================= */

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

/* ================= TRANSPARENCY ================= */

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

/* ================= SUSTAINABILITY ================= */

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

/* ================= SUPPORT ================= */

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

/* ================= INTELLECTUAL PROPERTY ================= */

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

/* ================= AI ================= */

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

/* ================= INFORMATION SECURITY ================= */

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

/* ================= DATA GOVERNANCE ================= */

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

export default function Footer() {
  const sectionRef = useRef<HTMLElement>(null);

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
    {
      scope: sectionRef,
    },
  );

  return (
    <footer
      ref={sectionRef}
      className="
        border-t
        border-[var(--footer-border)]
        bg-[var(--footer)]
        px-4
        py-16
        text-[var(--footer-text)]
      "
    >
      <div className="footer-content mx-auto max-w-7xl">

        {/* ========================================================= */}
        {/* TOP BRAND AREA */}
        {/* ========================================================= */}

        <div className="flex flex-col items-center text-center">

          {/* Logo */}

          <Image
            src="/logo/logo-crop.gif"
            alt="ATTPL Logo"
            width={300}
            height={80}
            className="h-25 w-auto object-contain"
            priority
            unoptimized
          />

          {/* Description */}

          <p
            className="
              mt-5
              max-w-3xl
              text-base
              leading-7
              text-[var(--footer-secondary)]
              md:text-lg
              md:leading-8
            "
          >
            Your trusted partner for corporate advisory, business consulting,
            legal solutions, compliance management, certifications, project
            consulting, and enterprise transformation across industries.
          </p>

          {/* ========================================================= */}
          {/* SOCIAL ICONS */}
          {/* ========================================================= */}

          <div className="mt-8 flex items-center justify-center gap-3">

            <a
              href="https://www.facebook.com/attplgroup/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-full
                border
                border-[var(--footer-border)]
                text-[var(--footer-secondary)]
                transition-all
                duration-300
                hover:border-[var(--gold)]
                hover:bg-[var(--gold)]
                hover:text-white
              "
            >
              <FaFacebookF />
            </a>

            <a
              href="https://www.instagram.com/attpleasylife"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-full
                border
                border-[var(--footer-border)]
                text-[var(--footer-secondary)]
                transition-all
                duration-300
                hover:border-[var(--gold)]
                hover:bg-[var(--gold)]
                hover:text-white
              "
            >
              <FaInstagram />
            </a>

            <a
              href="https://www.linkedin.com/in/ashok-godara-381947261"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-full
                border
                border-[var(--footer-border)]
                text-[var(--footer-secondary)]
                transition-all
                duration-300
                hover:border-[var(--gold)]
                hover:bg-[var(--gold)]
                hover:text-white
              "
            >
              <FaLinkedinIn />
            </a>

            <a
              href="https://x.com/attplgroup"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X"
              className="
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-full
                border
                border-[var(--footer-border)]
                text-[var(--footer-secondary)]
                transition-all
                duration-300
                hover:border-[var(--gold)]
                hover:bg-[var(--gold)]
                hover:text-white
              "
            >
              <FaXTwitter />
            </a>

            <a
              href="https://www.pinterest.com/attplgroup/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Pinterest"
              className="
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-full
                border
                border-[var(--footer-border)]
                text-[var(--footer-secondary)]
                transition-all
                duration-300
                hover:border-[var(--gold)]
                hover:bg-[var(--gold)]
                hover:text-white
              "
            >
              <FaPinterestP />
            </a>

            <a
              href="https://www.youtube.com/@attplgroup"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-full
                border
                border-[var(--footer-border)]
                text-[var(--footer-secondary)]
                transition-all
                duration-300
                hover:border-[var(--gold)]
                hover:bg-[var(--gold)]
                hover:text-white
              "
            >
              <FaYoutube />
            </a>

          </div>
        </div>

        {/* ========================================================= */}
        {/* SPACE */}
        {/* ========================================================= */}

        <div className="h-20" />

        {/* ========================================================= */}
        {/* FOOTER LINKS */}
        {/* ========================================================= */}

        <div
          className="
            grid
            grid-cols-2
            gap-x-8
            gap-y-12
            md:grid-cols-3
            lg:grid-cols-5
          "
        >

          {/* ========================================================= */}
          {/* QUICK LINKS */}
          {/* ========================================================= */}

          <div>
            <h3
              className="
                mb-6
                text-lg
                font-semibold
                text-[var(--footer-text)]
              "
            >
              Quick Links
            </h3>

            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="
                      text-sm
                      text-[var(--footer-muted)]
                      transition-colors
                      duration-200
                      hover:text-[var(--gold)]
                    "
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ========================================================= */}
          {/* MARKETPLACE */}
          {/* ========================================================= */}

          <div>
            <h3
              className="
                mb-6
                text-lg
                font-semibold
                text-[var(--footer-text)]
              "
            >
              Marketplace & API
            </h3>

            <ul className="space-y-4">
              {marketplaceApiLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="
                      text-sm
                      text-[var(--footer-muted)]
                      transition-colors
                      duration-200
                      hover:text-[var(--gold)]
                    "
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ========================================================= */}
          {/* TRANSPARENCY */}
          {/* ========================================================= */}

          <div>
            <h3
              className="
                mb-6
                text-lg
                font-semibold
                text-[var(--footer-text)]
              "
            >
              Transparency
            </h3>

            <ul className="space-y-4">
              {transparencyLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="
                      text-sm
                      text-[var(--footer-muted)]
                      transition-colors
                      duration-200
                      hover:text-[var(--gold)]
                    "
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ========================================================= */}
          {/* SUSTAINABILITY */}
          {/* ========================================================= */}

          <div>
            <h3
              className="
                mb-6
                text-lg
                font-semibold
                text-[var(--footer-text)]
              "
            >
              Sustainability
            </h3>

            <ul className="space-y-4">
              {sustainabilityLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="
                      text-sm
                      text-[var(--footer-muted)]
                      transition-colors
                      duration-200
                      hover:text-[var(--gold)]
                    "
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ========================================================= */}
          {/* SUPPORT */}
          {/* ========================================================= */}

          <div>
            <h3
              className="
                mb-6
                text-lg
                font-semibold
                text-[var(--footer-text)]
              "
            >
              Support & Governance
            </h3>

            <ul className="space-y-4">
              {supportGovernanceLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="
                      text-sm
                      text-[var(--footer-muted)]
                      transition-colors
                      duration-200
                      hover:text-[var(--gold)]
                    "
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ========================================================= */}
          {/* INTELLECTUAL PROPERTY */}
          {/* ========================================================= */}

          <div>
            <h3
              className="
                mb-6
                text-lg
                font-semibold
                text-[var(--footer-text)]
              "
            >
              Intellectual Property
            </h3>

            <ul className="space-y-4">
              {intellectualPropertyLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="
                      text-sm
                      text-[var(--footer-muted)]
                      transition-colors
                      duration-200
                      hover:text-[var(--gold)]
                    "
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ========================================================= */}
          {/* AI */}
          {/* ========================================================= */}

          <div>
            <h3
              className="
                mb-6
                text-lg
                font-semibold
                text-[var(--footer-text)]
              "
            >
              AI & Ethical Technology
            </h3>

            <ul className="space-y-4">
              {aiEthicalTechnologyLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="
                      text-sm
                      text-[var(--footer-muted)]
                      transition-colors
                      duration-200
                      hover:text-[var(--gold)]
                    "
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ========================================================= */}
          {/* INFORMATION SECURITY */}
          {/* ========================================================= */}

          <div>
            <h3
              className="
                mb-6
                text-lg
                font-semibold
                text-[var(--footer-text)]
              "
            >
              Information Security
            </h3>

            <ul className="space-y-4">
              {informationSecurityLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="
                      text-sm
                      text-[var(--footer-muted)]
                      transition-colors
                      duration-200
                      hover:text-[var(--gold)]
                    "
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ========================================================= */}
          {/* DATA GOVERNANCE */}
          {/* ========================================================= */}

          <div>
            <h3
              className="
                mb-6
                text-lg
                font-semibold
                text-[var(--footer-text)]
              "
            >
              Data Governance
            </h3>

            <ul className="space-y-4">
              {dataGovernanceLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="
                      text-sm
                      text-[var(--footer-muted)]
                      transition-colors
                      duration-200
                      hover:text-[var(--gold)]
                    "
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ========================================================= */}
          {/* PLATFORMS */}
          {/* ========================================================= */}

          <div>
            <h3
              className="
                mb-6
                text-lg
                font-semibold
                text-[var(--footer-text)]
              "
            >
              Our Platforms
            </h3>

            <ul className="space-y-4">
              {platforms.map((platform) => (
                <li key={platform.name}>
                  <a
                    href={platform.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      text-sm
                      text-[var(--footer-muted)]
                      transition-colors
                      duration-200
                      hover:text-[var(--gold)]
                    "
                  >
                    {platform.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* ========================================================= */}
        {/* BOTTOM BORDER / COPYRIGHT */}
        {/* ========================================================= */}

        <div
          className="
            mt-16
            border-t
            border-[var(--footer-border)]
            pt-8
            text-center
          "
        >
          <p className="text-sm text-[var(--footer-muted)]">
            © {new Date().getFullYear()} ATTPL Group. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}