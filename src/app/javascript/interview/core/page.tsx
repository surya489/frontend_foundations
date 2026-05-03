const problems = [
  {
    title: "Reverse String",
    slug: "reverse-string",
    difficulty: "Easy",
    category: "String",
  },
  {
    title: "Palindrome Check",
    slug: "palindrome",
    difficulty: "Easy",
    category: "String",
  },
  {
    title: "First Non-Repeating Character",
    slug: "first-non-repeating",
    difficulty: "Medium",
    category: "String",
  },
  {
    title: "Group Anagrams",
    slug: "group-anagrams",
    difficulty: "Medium",
    category: "String",
  },
  {
    title: "Add Two Arrays",
    slug: "add-two-arrays",
    difficulty: "Medium",
    category: "Array",
  },
  {
    title: "Two Sum",
    slug: "two-sum",
    difficulty: "Medium",
    category: "Array",
  },
  {
    title: "Flatten Nested Array",
    slug: "flatten-array",
    difficulty: "Medium",
    category: "Array",
  },
  {
    title: "Remove Duplicates",
    slug: "remove-duplicates",
    difficulty: "Easy",
    category: "Array",
  },
  {
    title: "Deep Clone Object",
    slug: "deep-clone",
    difficulty: "Hard",
    category: "Object",
  },
  {
    title: "Curry Function",
    slug: "curry-function",
    difficulty: "Hard",
    category: "Function",
  },
  {
    title: "Memoization",
    slug: "memoization",
    difficulty: "Hard",
    category: "Function",
  },
  {
    title: "Promise.all Implementation",
    slug: "promise-all",
    difficulty: "Hard",
    category: "Async",
  },
  {
    title: "Event Emitter",
    slug: "event-emitter",
    difficulty: "Hard",
    category: "System",
  },
];

import Link from "next/link";

export default function CoreProblemsPage() {
  const categories = ["All", "String", "Array", "Object", "Function"];

  return (
    <main className="space-y-10">
        
      <section>
        <h1 className="text-3xl font-bold">
          JavaScript Coding Problems
        </h1>
        <p className="text-gray-600 mt-2">
          Practice real interview questions with multiple solutions and explanations.
        </p>
      </section>

      <div className="flex gap-2 flex-wrap">
        {categories.map((cat) => (
          <button
            key={cat}
            className="px-3 py-1 border rounded-full text-sm hover:bg-black hover:text-white transition"
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        {problems.map((p) => (
          <Link
            key={p.slug}
            href={`/javascript/interview/core/${p.slug}`}
            className="border rounded-xl p-4 hover:shadow-sm transition"
          >
            <div className="flex justify-between items-center mb-2">
              <h2 className="font-semibold">{p.title}</h2>

              <span
                className={`text-xs px-2 py-1 rounded ${
                  p.difficulty === "Easy"
                    ? "bg-green-100 text-green-700"
                    : p.difficulty === "Medium"
                    ? "bg-yellow-100 text-yellow-700"
                    : "bg-red-100 text-red-700"
                }`}
              >
                {p.difficulty}
              </span>
            </div>

            <p className="text-sm text-gray-500">
              Category: {p.category}
            </p>
          </Link>
        ))}
      </div>
    </main>
  );
}