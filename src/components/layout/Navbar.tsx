"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import clsx from "clsx";
import { Menu, X } from "lucide-react";
import { navItems } from "@/lib/navbarConfig";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-black/5 bg-white/85 px-4 py-4 backdrop-blur md:px-6">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-black text-sm font-semibold text-white shadow-[0_10px_30px_rgba(0,0,0,0.16)]">
            FR
          </div>
          <div className="space-y-0.5">
            <p className="text-sm font-semibold tracking-[0.24em] text-black/45 uppercase">
              Frontend
            </p>
            <h1 className="text-base font-semibold text-black md:text-lg">
              Frontend Redemption
            </h1>
          </div>
        </Link>

        <div className="hidden items-center gap-2 rounded-full border border-black/10 bg-black/[0.03] p-1 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={clsx(
                "rounded-full px-4 py-2 text-sm font-medium transition-colors duration-200",
                pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href))
                  ? "bg-white text-black shadow-sm"
                  : "text-black/55 hover:text-black"
              )}
            >
              {item.name}
            </Link>
          ))}
        </div>

        <button
          type="button"
          aria-expanded={open}
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          className="flex h-auto w-auto items-center justify-center rounded-2xl border border-black/10 bg-white text-black shadow-sm transition hover:bg-black hover:text-white md:hidden !p-2"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <div
        className={clsx(
          "pointer-events-none absolute inset-x-0 top-full z-50 md:hidden",
          open && "pointer-events-auto"
        )}
      >
        <div
          aria-hidden={!open}
          className={clsx(
            "fixed inset-0 z-40 bg-black/20 transition-opacity duration-200",
            open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          )}
          onClick={() => setOpen(false)}
        />
        <div
          className={clsx(
            "relative z-50 mx-4 mt-3 overflow-hidden rounded-3xl border border-black/8 bg-white p-3 shadow-[0_24px_60px_rgba(0,0,0,0.14)] transition-all duration-200",
            open
              ? "translate-y-0 opacity-100 pointer-events-auto"
              : "pointer-events-none -translate-y-3 opacity-0"
          )}
        >
          <div className="mb-3 px-2 pt-1">
            <p className="text-xs font-semibold tracking-[0.22em] text-black/40 uppercase">
              Explore
            </p>
          </div>
          <div className="flex flex-col gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={clsx(
                  "rounded-2xl px-4 py-3 text-sm font-medium transition-colors",
                  pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href))
                    ? "bg-black text-white"
                    : "text-black/70 hover:bg-black/[0.04] hover:text-black"
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
