import FormsDemo from '@/components/react/FormsDemo';

export default function FormsPage() {
  return (
    <main className="space-y-10">
      <h1 className="text-3xl font-bold">Forms in React</h1>

      {/* WHAT */}
      <section>
        <h2 className="text-xl font-semibold">What are Forms in React?</h2>
        <p className="text-gray-600 mt-2">
          Forms in React allow users to interact with your application by entering data.
          React provides controlled and uncontrolled components to manage form state.
        </p>
      </section>

      {/* CONTROLLED COMPONENTS */}
      <section>
        <h2 className="text-xl font-semibold">Controlled Components</h2>
        <p className="text-gray-600 mt-2">
          Controlled components have their value controlled by React state.
        </p>
        <pre className="bg-gray-100 p-3 rounded text-sm">
{`function ControlledInput() {
  const [value, setValue] = useState('');

  return (
    <input
      type="text"
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
}`}
        </pre>
      </section>

      {/* INTERACTIVE DEMO */}
      <section>
        <h2 className="text-xl font-semibold">Interactive Demo</h2>
        <FormsDemo />
      </section>

      {/* FORM SUBMISSION */}
      <section>
        <h2 className="text-xl font-semibold">Form Submission</h2>
        <pre className="bg-gray-100 p-3 rounded text-sm">
{`function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload
    console.log('Login attempt:', { email, password });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <button type="submit">Login</button>
    </form>
  );
}`}
        </pre>
      </section>

      {/* DIFFERENT INPUT TYPES */}
      <section>
        <h2 className="text-xl font-semibold">Different Input Types</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h3 className="font-medium">Text Input</h3>
            <pre className="bg-gray-100 p-2 rounded text-sm mt-1">
{`<input
  type="text"
  value={text}
  onChange={(e) => setText(e.target.value)}
/>`}
            </pre>
          </div>
          <div>
            <h3 className="font-medium">Checkbox</h3>
            <pre className="bg-gray-100 p-2 rounded text-sm mt-1">
{`<input
  type="checkbox"
  checked={isChecked}
  onChange={(e) => setIsChecked(e.target.checked)}
/>`}
            </pre>
          </div>
          <div>
            <h3 className="font-medium">Select</h3>
            <pre className="bg-gray-100 p-2 rounded text-sm mt-1">
{`<select value={selected} onChange={(e) => setSelected(e.target.value)}>
  <option value="option1">Option 1</option>
  <option value="option2">Option 2</option>
</select>`}
            </pre>
          </div>
          <div>
            <h3 className="font-medium">Textarea</h3>
            <pre className="bg-gray-100 p-2 rounded text-sm mt-1">
{`<textarea
  value={text}
  onChange={(e) => setText(e.target.value)}
/>`}
            </pre>
          </div>
        </div>
      </section>

      {/* FORM VALIDATION */}
      <section>
        <h2 className="text-xl font-semibold">Form Validation</h2>
        <pre className="bg-gray-100 p-3 rounded text-sm">
{`function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.message) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      // Submit form
      console.log('Form submitted:', formData);
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={formData.name}
        onChange={(e) => setFormData({...formData, name: e.target.value})}
        placeholder="Name"
      />
      {errors.name && <span className="error">{errors.name}</span>}
      {/* ... other fields */}
    </form>
  );
}`}
        </pre>
      </section>

      {/* UNCONTROLLED COMPONENTS */}
      <section>
        <h2 className="text-xl font-semibold">Uncontrolled Components</h2>
        <p className="text-gray-600 mt-2">
          Uncontrolled components maintain their own internal state.
        </p>
        <pre className="bg-gray-100 p-3 rounded text-sm">
{`function UncontrolledForm() {
  const nameRef = useRef();
  const emailRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    console.log({ name, email });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input ref={nameRef} type="text" />
      <input ref={emailRef} type="email" />
      <button type="submit">Submit</button>
    </form>
  );
}`}
        </pre>
      </section>

      {/* CONTROLLED VS UNCONTROLLED */}
      <section>
        <h2 className="text-xl font-semibold">Controlled vs Uncontrolled</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 p-2">Aspect</th>
                <th className="border border-gray-300 p-2">Controlled</th>
                <th className="border border-gray-300 p-2">Uncontrolled</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 p-2">State Management</td>
                <td className="border border-gray-300 p-2">React state</td>
                <td className="border border-gray-300 p-2">DOM state</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2">Validation</td>
                <td className="border border-gray-300 p-2">Real-time</td>
                <td className="border border-gray-300 p-2">On submit</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2">Performance</td>
                <td className="border border-gray-300 p-2">Slower re-renders</td>
                <td className="border border-gray-300 p-2">Better performance</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2">Use Case</td>
                <td className="border border-gray-300 p-2">Complex forms</td>
                <td className="border border-gray-300 p-2">Simple forms</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* COMMON USE CASES */}
      <section>
        <h2 className="text-xl font-semibold">Common Use Cases</h2>
        <ul className="list-disc ml-6 mt-2 text-gray-600 space-y-2">
          <li><strong>Login/Registration</strong> - User authentication</li>
          <li><strong>Contact forms</strong> - User feedback</li>
          <li><strong>Search inputs</strong> - Filtering data</li>
          <li><strong>Settings forms</strong> - User preferences</li>
          <li><strong>Checkout forms</strong> - E-commerce</li>
        </ul>
      </section>

      {/* BEST PRACTICES */}
      <section>
        <h2 className="text-xl font-semibold">Best Practices</h2>
        <ul className="list-disc ml-6 mt-2 text-gray-600 space-y-2">
          <li>Use controlled components for complex forms</li>
          <li>Always prevent default on form submission</li>
          <li>Validate input on both client and server</li>
          <li>Provide clear error messages</li>
          <li>Use semantic HTML form elements</li>
        </ul>
      </section>

      {/* COMMON MISTAKES */}
      <section>
        <h2 className="text-xl font-semibold">Common Mistakes</h2>
        <ul className="list-disc ml-6 mt-2 text-gray-600 space-y-2">
          <li>Forgetting to prevent default form submission</li>
          <li>Mixing controlled and uncontrolled inputs</li>
          <li>Not handling form validation properly</li>
          <li>Using value instead of defaultValue for uncontrolled inputs</li>
          <li>Not providing proper form labels</li>
        </ul>
      </section>

      {/* INTERVIEW */}
      <section className="border-l-4 border-black pl-4">
        <h2 className="text-lg font-semibold">Interview Explanation</h2>
        <p className="text-gray-600 text-sm mt-2">
          React forms can be controlled (React manages state) or uncontrolled (DOM manages state).
          Controlled components use value and onChange props, while uncontrolled use refs. Always
          prevent default behavior on form submission. Use controlled components when you need real-time
          validation or to programmatically control form values.
        </p>
      </section>
    </main>
  );
}