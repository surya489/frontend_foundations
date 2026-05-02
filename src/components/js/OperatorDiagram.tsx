"use client";

export default function OperatorDiagram() {
  return (
    <div className="border rounded-xl p-6 mt-4 bg-gray-50 text-sm">
      <h3 className="font-semibold mb-4">Logical Flow</h3>

      <div className="space-y-4">

        <div>
          <p className="font-medium">OR (||)</p>
          <p className="text-gray-600 text-xs">
            Returns first truthy value
          </p>
        </div>

        <div>
          <p className="font-medium">AND (&&)</p>
          <p className="text-gray-600 text-xs">
            Returns first falsy or last truthy
          </p>
        </div>

        <div>
          <p className="font-medium">NOT (!)</p>
          <p className="text-gray-600 text-xs">
            Converts value to boolean and reverses it
          </p>
        </div>

      </div>
    </div>
  );
}