import Link from "next/link";
import { sidebarConfig } from "@/lib/sidebarConfig";

const sidebarItems = sidebarConfig.typescript;

export default function TypeScriptHome() {
  return (
    <main className="space-y-10">
      {/* HERO */}
      <section className="space-y-4">
        <h1 className="text-4xl font-bold">TypeScript</h1>
        <p className="text-gray-600 max-w-2xl">
          Learn TypeScript from basics to advanced concepts with real-world
          examples and React integration.
        </p>
      </section>

      {/* SECTIONS */}
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

      {/* CTA */}
      <section className="border rounded-xl p-6 text-center">
        <h2 className="text-lg font-semibold mb-2">
          Ready for TypeScript Interviews?
        </h2>
        <p className="text-gray-600 text-sm mb-4">
          Practice real-world TypeScript scenarios and questions.
        </p>

        <Link
          href="/typescript/interview"
          className="px-4 py-2 bg-black text-white rounded"
        >
          Start Practice
        </Link>
      </section>
    </main>
  );
}