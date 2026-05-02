"use client";

export default function ESComparison() {
  return (
    <div className="overflow-x-auto mt-4 text-sm">
      <table className="w-full border">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-3 border text-left">Feature</th>
            <th className="p-3 border text-left">ES5</th>
            <th className="p-3 border text-left">ES6+</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="p-3 border">Variables</td>
            <td className="p-3 border">var</td>
            <td className="p-3 border">let, const</td>
          </tr>
          <tr>
            <td className="p-3 border">Functions</td>
            <td className="p-3 border">function()</td>
            <td className="p-3 border">() =&gt; {}</td>
          </tr>
          <tr>
            <td className="p-3 border">Strings</td>
            <td className="p-3 border">"Hello " + name</td>
            <td className="p-3 border">`Hello ${"{name}"}`</td>
          </tr>
          <tr>
            <td className="p-3 border">Objects</td>
            <td className="p-3 border">Manual access</td>
            <td className="p-3 border">Destructuring</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}