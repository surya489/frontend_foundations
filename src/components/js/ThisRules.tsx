"use client";

export default function ThisRules() {
  return (
    <div className="border rounded-xl p-6 mt-4 bg-gray-50">
      <h3 className="font-semibold mb-4">How "this" Works</h3>

      <ul className="text-sm text-gray-600 space-y-2">
        <li>• Global scope → this = window (browser)</li>
        <li>• Object method → this = that object</li>
        <li>• Regular function → this = window / undefined (strict mode)</li>
        <li>• Arrow function → no own this (inherits from parent)</li>
        <li>• Event handler → this = element</li>
      </ul>
    </div>
  );
}