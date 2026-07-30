"use client";

import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
  icon?: boolean;
};

export default function Button({
  children,
  href,
  onClick,
  className = "",
  icon = true,
}: ButtonProps) {
  const classes = `
    group inline-flex items-center justify-center
    rounded-full border border-slate-900
    bg-white px-8 py-4
    text-lg font-medium text-slate-900
    transition-all duration-300
     hover:text-black
    ${className}
  `;

  const content = (
    <>
      <span>{children}</span>

      {icon && (
        <FiArrowRight
          className="ml-4 text-xl transition-transform duration-300 group-hover:translate-x-1"
        />
      )}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {content}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={classes}>
      {content}
    </button>
  );
}