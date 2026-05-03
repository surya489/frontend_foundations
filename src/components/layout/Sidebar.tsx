"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import clsx from "clsx";
import { ChevronRight, ChevronLeft } from "lucide-react";

type Item = {
  title: string;
  href: string;
};

type Group = {
  group: string;
  items: Item[];
};

type SidebarData = Group[] | Item[];

function isGrouped(data: SidebarData): data is Group[] {
  return (data as Group[])[0]?.items !== undefined;
}

export default function Sidebar({ items }: { items: SidebarData }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <>
    
      <button
        onClick={() => setOpen(true)}
        className="md:hidden fixed right-4 top-20 z-50 bg-black text-white !p-2 rounded-full shadow-lg hover:scale-105 transition"
      >
        {open ? <ChevronLeft size={20} /> : <ChevronRight size={20} />}
      </button>

      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-40 md:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      <aside
        className={clsx(
          "w-64 bg-white border-r fixed left-0 z-50 p-4 overflow-y-auto transform transition-transform duration-300",
          "top-[80px] h-[calc(100vh-80px)]",
          open ? "translate-x-0" : "-translate-x-full",
          "md:translate-x-0 md:static md:h-[calc(100vh-80px)] md:sticky md:top-[80px]"
        )}
      >
        <div className="space-y-6 mt-10 md:mt-0">
          {isGrouped(items) ? (
            items.map((group) => (
              <div key={group.group}>
                <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                  {group.group}
                </h3>

                <div className="flex flex-col gap-1">
                  {group.items.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className={clsx(
                        "px-3 py-2 rounded-lg text-sm transition",
                        pathname.startsWith(item.href)
                          ? "bg-black text-white"
                          : "text-gray-600 hover:bg-gray-100"
                      )}
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
              </div>
            ))
          ) : (
            <div className="flex flex-col gap-1">
              {items.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={clsx(
                    "px-3 py-2 rounded-lg text-sm transition",
                    pathname.startsWith(item.href)
                      ? "bg-black text-white"
                      : "text-gray-600 hover:bg-gray-100"
                  )}
                >
                  {item.title}
                </Link>
              ))}
            </div>
          )}
        </div>
      </aside>
    </>
  );
}