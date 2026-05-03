"use client";

export default function TSvsJSDiagram() {
  return (
    <div className="border rounded-xl p-6 mt-4 bg-gray-50 text-sm">
      <h3 className="font-semibold mb-4">JavaScript vs TypeScript</h3>

      <div className="grid md:grid-cols-2 gap-6">
        {/* JS */}
        <div className="border p-4 rounded">
          <h4 className="font-medium mb-2">JavaScript</h4>
          <ul className="text-gray-600 space-y-1">
            <li>No type checking</li>
            <li>Errors at runtime</li>
            <li>Flexible but risky</li>
          </ul>

          <pre className="bg-white p-2 mt-2 rounded text-xs">
{`let x = "hello";
x = 10; // allowed`}
          </pre>
        </div>

        {/* TS */}
        <div className="border p-4 rounded">
          <h4 className="font-medium mb-2">TypeScript</h4>
          <ul className="text-gray-600 space-y-1">
            <li>Static type checking</li>
            <li>Errors before runtime</li>
            <li>Safer & scalable</li>
          </ul>

          <pre className="bg-white p-2 mt-2 rounded text-xs">
{`let x: string = "hello";
x = 10; // error`}
          </pre>
        </div>
      </div>
    </div>
  );
}