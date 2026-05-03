"use client";

import { useState } from "react";

type Errors = {
  name?: string;
  email?: string;
  password?: string;
};

export default function FormValidationDemo() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState<Errors>({});
  const [success, setSuccess] = useState("");

  function validate() {
    const newErrors: Errors = {};

    if (!form.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!form.email.includes("@")) {
      newErrors.email = "Invalid email";
    }

    if (form.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    return newErrors;
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setSuccess("Form submitted successfully");
    } else {
      setSuccess("");
    }
  }

  return (
    <div className="border rounded-lg p-4 mt-4 max-w-md space-y-4">
      <h3 className="font-semibold">Form Demo</h3>

      <form onSubmit={handleSubmit} className="space-y-3">
        {/* NAME */}
        <div>
          <input
            placeholder="Name"
            value={form.name}
            onChange={(e) =>
              setForm({ ...form, name: e.target.value })
            }
            className="border px-3 py-2 rounded w-full"
          />
          {errors.name && (
            <p className="text-red-500 text-xs mt-1">
              {errors.name}
            </p>
          )}
        </div>

        {/* EMAIL */}
        <div>
          <input
            placeholder="Email"
            value={form.email}
            onChange={(e) =>
              setForm({ ...form, email: e.target.value })
            }
            className="border px-3 py-2 rounded w-full"
          />
          {errors.email && (
            <p className="text-red-500 text-xs mt-1">
              {errors.email}
            </p>
          )}
        </div>

        {/* PASSWORD */}
        <div>
          <input
            type="password"
            placeholder="Password"
            value={form.password}
            onChange={(e) =>
              setForm({ ...form, password: e.target.value })
            }
            className="border px-3 py-2 rounded w-full"
          />
          {errors.password && (
            <p className="text-red-500 text-xs mt-1">
              {errors.password}
            </p>
          )}
        </div>

        <button
          type="submit"
          className="px-4 py-2 bg-black text-white rounded"
        >
          Submit
        </button>
      </form>

      {success && (
        <p className="text-green-600 text-sm">{success}</p>
      )}
    </div>
  );
}