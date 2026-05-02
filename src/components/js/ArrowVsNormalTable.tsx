"use client";

export default function ArrowVsNormalTable() {
  return (
    <div className="overflow-x-auto mt-4">
      <table className="w-full border text-sm">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-3 border text-left">Feature</th>
            <th className="p-3 border text-left">Normal Function</th>
            <th className="p-3 border text-left">Arrow Function</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="p-3 border">this</td>
            <td className="p-3 border">Depends on how it's called</td>
            <td className="p-3 border">Inherits from parent scope</td>
          </tr>
          <tr>
            <td className="p-3 border">arguments</td>
            <td className="p-3 border">Available</td>
            <td className="p-3 border">Not available</td>
          </tr>
          <tr>
            <td className="p-3 border">constructor</td>
            <td className="p-3 border">Can be used with new</td>
            <td className="p-3 border">Cannot be used as constructor</td>
          </tr>
          <tr>
            <td className="p-3 border">syntax</td>
            <td className="p-3 border">Verbose</td>
            <td className="p-3 border">Short & concise</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}