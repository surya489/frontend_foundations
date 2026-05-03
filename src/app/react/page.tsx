import Link from "next/link";
import { sidebarConfig } from "@/lib/sidebarConfig";

const sidebarItems = sidebarConfig.react;

export default function ReactHome() {
  return (
    <main className="space-y-10">
        
      <section className="space-y-4">
        <h1 className="text-4xl font-bold">React</h1>
        <p className="text-gray-600 max-w-2xl">
          Learn React from basics to advanced concepts including hooks,
          rendering behavior, and performance optimization.
        </p>
      </section>

      <div className="grid md:grid-cols-2 gap-6">
        {sidebarItems.map((section) => (
          <div
            key={section.group}
            className="border rounded-xl p-5 hover:shadow-sm transition"
          >
            <h2 className="font-semibold mb-3">{section.group}</h2>

            <div className="flex flex-col gap-2">
              {section.items.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm text-gray-600 hover:text-black"
                >
                  → {item.title}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>

      <section className="border rounded-xl p-6 text-center">
        <h2 className="text-lg font-semibold mb-2">
          Ready to Build Real Projects?
        </h2>
        <p className="text-gray-600 text-sm mb-4">
          Apply React concepts with real-world examples.
        </p>

        <Link
          href="/react/projects"
          className="px-4 py-2 bg-black text-white rounded"
        >
          Start Building
        </Link>
      </section>
    </main>
  );
}