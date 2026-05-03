const scenarios = [
  {
    group: "UI Interaction",
    items: [
      {
        title: "Debounce Search Input",
        slug: "debounce-search",
        description: "Delay API calls while typing",
      },
      {
        title: "Infinite Scroll",
        slug: "infinite-scroll",
        description: "Load data on scroll",
      },
      {
        title: "Scroll Progress Bar",
        slug: "scroll-progress",
        description: "Track page scroll progress",
      },
    ],
  },
  {
    group: "Data Handling",
    items: [
      {
        title: "API Retry Logic",
        slug: "api-retry",
        description: "Retry failed requests",
      },
      {
        title: "Pagination",
        slug: "pagination",
        description: "Handle paginated data",
      },
      {
        title: "Caching API Response",
        slug: "api-cache",
        description: "Avoid repeated API calls",
      },
    ],
  },
  {
    group: "Business Logic",
    items: [
      {
        title: "Cart Total Calculation",
        slug: "cart-total",
        description: "Calculate totals with discounts",
      },
      {
        title: "Filter & Sort Products",
        slug: "filter-sort",
        description: "Sort and filter list",
      },
    ],
  },
  {
    group: "Performance",
    items: [
      {
        title: "Memoized Search",
        slug: "memoized-search",
        description: "Optimize repeated searches",
      },
      {
        title: "Lazy Load Images",
        slug: "lazy-load",
        description: "Load images on demand",
      },
    ],
  },
];

import Link from "next/link";

export default function ScenariosPage() {
  return (
    <main className="space-y-10">
      {/* HEADER */}
      <section>
        <h1 className="text-3xl font-bold">
          Real-World Scenarios
        </h1>
        <p className="text-gray-600 mt-2 max-w-2xl">
          Practical frontend problems that simulate real product features.
        </p>
      </section>

      {/* GROUPS */}
      <div className="space-y-8">
        {scenarios.map((section) => (
          <div key={section.group}>
            <h2 className="text-lg font-semibold mb-4">
              {section.group}
            </h2>

            <div className="grid md:grid-cols-2 gap-4">
              {section.items.map((item) => (
                <Link
                  key={item.slug}
                  href={`/javascript/interview/scenarios/${item.slug}`}
                  className="border rounded-xl p-4 hover:shadow-sm transition"
                >
                  <h3 className="font-medium mb-1">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-500">
                    {item.description}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <section className="border rounded-xl p-6 text-center">
        <h2 className="text-lg font-semibold mb-2">
          Practice Like Real Projects
        </h2>
        <p className="text-gray-600 text-sm mb-4">
          These scenarios are designed to simulate real frontend tasks.
        </p>
      </section>
    </main>
  );
}