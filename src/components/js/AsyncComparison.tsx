"use client";

export default function AsyncComparison() {
  return (
    <div className="overflow-x-auto mt-4">
      <table className="w-full border text-sm">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-3 border text-left">Feature</th>
            <th className="p-3 border text-left">Promise</th>
            <th className="p-3 border text-left">Async/Await</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="p-3 border">Syntax</td>
            <td className="p-3 border">.then().catch()</td>
            <td className="p-3 border">async / await</td>
          </tr>
          <tr>
            <td className="p-3 border">Readability</td>
            <td className="p-3 border">Less readable</td>
            <td className="p-3 border">More readable</td>
          </tr>
          <tr>
            <td className="p-3 border">Error Handling</td>
            <td className="p-3 border">.catch()</td>
            <td className="p-3 border">try/catch</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}