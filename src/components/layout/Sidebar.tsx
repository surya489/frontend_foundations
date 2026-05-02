"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

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

  return (
    <aside className="w-64 border-r h-[calc(100vh-80px)] sticky top-[80px] p-4 overflow-y-auto">
      <div className="space-y-6">
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
  );
}