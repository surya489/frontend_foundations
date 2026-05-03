'use client';

import { useState } from 'react';

// Custom hook for form validation
function useFormValidation(initialValues, validate) {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues(prev => ({ ...prev, [name]: value }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched(prev => ({ ...prev, [name]: true }));

    // Validate on blur
    const validationErrors = validate(values);
    if (validationErrors[name]) {
      setErrors(prev => ({ ...prev, [name]: validationErrors[name] }));
    }
  };

  const handleSubmit = (e, onSubmit) => {
    e.preventDefault();
    const validationErrors = validate(values);
    setErrors(validationErrors);
    setTouched(Object.keys(values).reduce((acc, key) => ({ ...acc, [key]: true }), {}));

    if (Object.keys(validationErrors).length === 0) {
      onSubmit(values);
    }
  };

  return {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit
  };
}

// Validation function
function validateForm(values) {
  const errors = {};

  if (!values.name.trim()) {
    errors.name = 'Name is required';
  } else if (values.name.length < 2) {
    errors.name = 'Name must be at least 2 characters';
  }

  if (!values.email.trim()) {
    errors.email = 'Email is required';
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = 'Email is invalid';
  }

  if (!values.password) {
    errors.password = 'Password is required';
  } else if (values.password.length < 6) {
    errors.password = 'Password must be at least 6 characters';
  }

  if (values.password !== values.confirmPassword) {
    errors.confirmPassword = 'Passwords do not match';
  }

  if (!values.age || values.age < 18) {
    errors.age = 'You must be at least 18 years old';
  }

  return errors;
}

export default function FormValidationPage() {
  const initialValues = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    age: ''
  };

  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit
  } = useFormValidation(initialValues, validateForm);

  const onSubmit = (formData) => {
    alert(`Form submitted successfully!\n${JSON.stringify(formData, null, 2)}`);
  };

  return (
    <main className="space-y-10">
      <h1 className="text-3xl font-bold">Form Validation in React</h1>

      {/* WHAT */}
      <section>
        <h2 className="text-xl font-semibold">What is Form Validation?</h2>
        <p className="text-gray-600 mt-2">
          Form validation ensures that user input meets certain criteria before the form is submitted.
          In React, we can validate forms on the client-side to provide immediate feedback.
        </p>
      </section>

      {/* VALIDATION TYPES */}
      <section>
        <h2 className="text-xl font-semibold">Types of Validation</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold">Client-side Validation</h3>
            <ul className="list-disc ml-6 mt-2 text-gray-600">
              <li>Immediate feedback</li>
              <li>Better user experience</li>
              <li>Reduces server requests</li>
              <li>JavaScript-based</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold">Server-side Validation</h3>
            <ul className="list-disc ml-6 mt-2 text-gray-600">
              <li>Security (cannot be bypassed)</li>
              <li>Handles complex business logic</li>
              <li>Always necessary</li>
              <li>Slower feedback</li>
            </ul>
          </div>
        </div>
      </section>

      {/* VALIDATION STRATEGIES */}
      <section>
        <h2 className="text-xl font-semibold">Validation Strategies</h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold">1. On Change</h3>
            <pre className="bg-gray-100 p-2 rounded text-sm mt-1">
{`const handleChange = (e) => {
  setValue(e.target.value);
  // Validate immediately
  if (!e.target.value.trim()) {
    setError('Field is required');
  }
};`}
            </pre>
          </div>
          <div>
            <h3 className="font-semibold">2. On Blur</h3>
            <pre className="bg-gray-100 p-2 rounded text-sm mt-1">
{`const handleBlur = () => {
  // Validate when user leaves field
  const error = validateField(value);
  setError(error);
};`}
            </pre>
          </div>
          <div>
            <h3 className="font-semibold">3. On Submit</h3>
            <pre className="bg-gray-100 p-2 rounded text-sm mt-1">
{`const handleSubmit = (e) => {
  e.preventDefault();
  const errors = validateAllFields();
  if (Object.keys(errors).length === 0) {
    // Submit form
  }
};`}
            </pre>
          </div>
        </div>
      </section>

      {/* CUSTOM HOOK */}
      <section>
        <h2 className="text-xl font-semibold">Custom Validation Hook</h2>
        <pre className="bg-gray-100 p-3 rounded text-sm">
{`function useFormValidation(initialValues, validate) {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues(prev => ({ ...prev, [name]: value }));
    // Clear error on change
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched(prev => ({ ...prev, [name]: true }));
    // Validate on blur
  };

  const handleSubmit = (e, onSubmit) => {
    e.preventDefault();
    const validationErrors = validate(values);
    // Set all fields as touched and show errors
  };

  return { values, errors, touched, handleChange, handleBlur, handleSubmit };
}`}
        </pre>
      </section>

      {/* DEMO FORM */}
      <section>
        <h2 className="text-xl font-semibold">Validation Demo</h2>
        <form onSubmit={(e) => handleSubmit(e, onSubmit)} className="max-w-md space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Name</label>
            <input
              type="text"
              name="name"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`w-full p-2 border rounded ${errors.name && touched.name ? 'border-red-500' : 'border-gray-300'}`}
            />
            {errors.name && touched.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`w-full p-2 border rounded ${errors.email && touched.email ? 'border-red-500' : 'border-gray-300'}`}
            />
            {errors.email && touched.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Password</label>
            <input
              type="password"
              name="password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`w-full p-2 border rounded ${errors.password && touched.password ? 'border-red-500' : 'border-gray-300'}`}
            />
            {errors.password && touched.password && (
              <p className="text-red-500 text-sm mt-1">{errors.password}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              value={values.confirmPassword}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`w-full p-2 border rounded ${errors.confirmPassword && touched.confirmPassword ? 'border-red-500' : 'border-gray-300'}`}
            />
            {errors.confirmPassword && touched.confirmPassword && (
              <p className="text-red-500 text-sm mt-1">{errors.confirmPassword}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Age</label>
            <input
              type="number"
              name="age"
              value={values.age}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`w-full p-2 border rounded ${errors.age && touched.age ? 'border-red-500' : 'border-gray-300'}`}
            />
            {errors.age && touched.age && (
              <p className="text-red-500 text-sm mt-1">{errors.age}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Submit
          </button>
        </form>
      </section>

      {/* LIBRARIES */}
      <section>
        <h2 className="text-xl font-semibold">Popular Validation Libraries</h2>
        <ul className="list-disc ml-6 mt-2 text-gray-600">
          <li><strong>Formik</strong> - Comprehensive form management</li>
          <li><strong>React Hook Form</strong> - Performance-focused validation</li>
          <li><strong>Yup</strong> - Schema validation</li>
          <li><strong>Joi</strong> - Object schema validation</li>
          <li><strong>Zod</strong> - TypeScript-first validation</li>
        </ul>
      </section>

      {/* BEST PRACTICES */}
      <section>
        <h2 className="text-xl font-semibold">Best Practices</h2>
        <ul className="list-disc ml-6 mt-2 text-gray-600 space-y-2">
          <li>Validate on blur for better UX</li>
          <li>Clear errors when user starts typing</li>
          <li>Show validation feedback immediately</li>
          <li>Use descriptive error messages</li>
          <li>Always validate on server-side too</li>
          <li>Consider accessibility (screen readers)</li>
        </ul>
      </section>

      {/* ACCESSIBILITY */}
      <section>
        <h2 className="text-xl font-semibold">Accessibility Considerations</h2>
        <ul className="list-disc ml-6 mt-2 text-gray-600">
          <li>Use proper labels for all inputs</li>
          <li>Associate errors with inputs using aria-describedby</li>
          <li>Use role="alert" for error messages</li>
          <li>Ensure color isn't the only error indicator</li>
          <li>Test with screen readers</li>
        </ul>
      </section>
    </main>
  );
}