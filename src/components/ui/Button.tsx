"use client";

import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
}

export default function Button({
  children,
  href,
  onClick,
  className = "",
}: ButtonProps) {
  const styles =
    "group inline-flex items-center gap-3 rounded-full border border-slate-900 bg-white px-7 py-3 text-base font-medium text-slate-900 transition-all duration-300   hover:text-";

  const content = (
    <>
      <span>{children}</span>

      <FiArrowRight
        size={18}
        className="transition-transform duration-300 group-hover:translate-x-1"
      />
    </>
  );

  if (href) {
    return (
      <Link href={href} className={`${styles} ${className}`}>
        {content}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={`${styles} ${className}`}>
      {content}
    </button>
  );
}