import DeepCloneDemo from "@/components/js/problems/DeepCloneDemo";

export default function DeepClonePage() {
  return (
    <main className="space-y-10">
      <h1 className="text-3xl font-bold">Deep Clone Object</h1>

      <section>
        <h2 className="text-xl font-semibold">Problem</h2>
        <p className="text-gray-600 mt-2">
          Create a deep copy of an object so that changes in the copy do not affect the original.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Shallow vs Deep Copy</h2>

        <pre className="bg-gray-100 p-3 rounded text-sm">
{`// Shallow
const copy = { ...obj };

// Deep
const copy = deepClone(obj);`}
        </pre>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Solutions</h2>

        <h3 className="font-medium mt-4">1. Recursive Deep Clone</h3>
        <pre className="bg-gray-100 p-3 rounded text-sm">
{`function clone(obj) {
  if (obj === null || typeof obj !== "object") return obj;

  if (Array.isArray(obj)) {
    return obj.map(clone);
  }

  const result = {};
  for (let key in obj) {
    result[key] = clone(obj[key]);
  }

  return result;
}`}
        </pre>

        <h3 className="font-medium mt-4">2. JSON Method</h3>
        <pre className="bg-gray-100 p-3 rounded text-sm">
{`JSON.parse(JSON.stringify(obj));`}
        </pre>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Interactive Demo</h2>
        <DeepCloneDemo />
      </section>

      <section>
        <h2 className="text-xl font-semibold">Explanation</h2>
        <ul className="list-disc ml-6 mt-2 text-gray-600 space-y-1">
          <li>Shallow copy copies only first level</li>
          <li>Deep clone copies nested objects</li>
          <li>Recursion is used to traverse nested structures</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Limitations</h2>
        <ul className="list-disc ml-6 mt-2 text-gray-600">
          <li>JSON method fails for functions</li>
          <li>Cannot handle undefined, Date, Map, Set</li>
        </ul>
      </section>

      <section className="border-l-4 border-black pl-4">
        <h2 className="text-lg font-semibold">Explanation</h2>
        <p className="text-gray-600 text-sm mt-2">
          Deep cloning ensures complete independence between objects. Recursive cloning
          is the most flexible solution, while JSON methods are quick but limited.
        </p>
      </section>
    </main>
  );
}