import Link from "next/link";

export default function InterviewHomePage() {
  return (
    <main className="space-y-10 max-w-6xl mx-auto">
        
      <section className="space-y-4">
        <h1 className="text-4xl font-bold">Interview Preparation</h1>
        <p className="text-gray-600 max-w-2xl">
          A structured collection of coding problems and real-world scenarios
          designed to strengthen JavaScript fundamentals and practical skills.
        </p>
      </section>


      <div className="grid md:grid-cols-2 gap-6">
        
        <Link
          href="/javascript/interview/core"
          className="border rounded-2xl p-6 hover:shadow-md transition group"
        >
          <h2 className="text-xl font-semibold mb-2 group-hover:underline">
            Coding Problems
          </h2>

          <p className="text-gray-600 text-sm mb-4">
            Practice core JavaScript interview questions with multiple solutions,
            explanations, and interactive demos.
          </p>

          <ul className="text-sm text-gray-500 space-y-1">
            <li>• Arrays, Strings, Objects</li>
            <li>• Recursion & Patterns</li>
            <li>• Optimization Techniques</li>
          </ul>
        </Link>

        <Link
          href="/javascript/interview/scenarios"
          className="border rounded-2xl p-6 hover:shadow-md transition group"
        >
          <h2 className="text-xl font-semibold mb-2 group-hover:underline">
            Real-World Scenarios
          </h2>

          <p className="text-gray-600 text-sm mb-4">
            Build practical frontend features like debounce, API handling,
            and performance optimizations.
          </p>

          <ul className="text-sm text-gray-500 space-y-1">
            <li>• UI Interaction Patterns</li>
            <li>• API Handling</li>
            <li>• Performance Optimization</li>
          </ul>
        </Link>
      </div>

      <section className="border rounded-2xl p-6">
        <h2 className="text-lg font-semibold mb-2">
          Why This Section?
        </h2>
        <p className="text-gray-600 text-sm">
          This section was built as part of a focused effort to revisit and
          strengthen core JavaScript concepts after identifying gaps during an
          interview. It reflects hands-on practice, problem-solving, and a
          commitment to continuous improvement.
        </p>
      </section>

      <section className="border rounded-2xl p-6 text-center">
        <h2 className="text-lg font-semibold mb-2">
          More Coming Soon
        </h2>
        <p className="text-gray-600 text-sm">
          Additional topics like system design and advanced frontend patterns
          will be added.
        </p>
      </section>
    </main>
  );
}