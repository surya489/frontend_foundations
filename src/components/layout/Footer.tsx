'use client';

import Link from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import { Globe } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const navItems = [
  { name: "Home", href: "/" },
  { name: "JavaScript", href: "/javascript" },
  { name: "React", href: "/react" },
  { name: "Next.js", href: "/next" },
];

export default function Footer() {

    const pathname = usePathname();

  return (
    <footer className="mt-20 border-t border-black/5 bg-neutral-50 px-6 py-10">
      <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-[1.4fr_1fr_auto] md:items-center">
        <div className="space-y-3">
          <p className="text-xs font-semibold tracking-[0.24em] text-black/40 uppercase">
            Frontend Foundations
          </p>
          <div className="space-y-2">
            <p className="text-lg font-semibold text-black">
              Built by Jaya Surya M, Frontend Developer.
            </p>
            <p className="max-w-xl text-sm leading-6 text-black/60">
              A focused space for rebuilding JavaScript, React, and Next.js
              fundamentals with cleaner execution and clearer explanations.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3 md:justify-start">

            {navItems.map((item) => (
                <Link
                    key={item.href}
                    href={item.href}
                    className={clsx(
                    "rounded-full px-4 py-2 text-sm font-medium transition-colors duration-200",
                    pathname === item.href
                        ? "bg-white text-black"
                        : "text-black/55 hover:text-black"
                    )}
                >
                    {item.name}
                </Link>
            ))}

        </div>

        <div className="flex items-center justify-center gap-3 md:justify-end">
          <a
            href="https://github.com/surya489"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub profile"
            className="flex h-11 w-11 items-center justify-center rounded-2xl border border-black/10 bg-white text-black/70 transition hover:-translate-y-0.5 hover:text-black hover:shadow-md"
          >
            <FaGithub size={18} />
          </a>
          <a
            href="https://www.linkedin.com/in/jayasurya4899/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn profile"
            className="flex h-11 w-11 items-center justify-center rounded-2xl border border-black/10 bg-white text-black/70 transition hover:-translate-y-0.5 hover:text-black hover:shadow-md"
          >
            <FaLinkedin size={18} />
          </a>
          <a
            href="https://my-portfolio-omega-wheat-25.vercel.app/"
            target="_blank"
            rel="noreferrer"
            aria-label="Portfolio website"
            className="flex h-11 w-11 items-center justify-center rounded-2xl border border-black/10 bg-white text-black/70 transition hover:-translate-y-0.5 hover:text-black hover:shadow-md"
          >
            <Globe size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
