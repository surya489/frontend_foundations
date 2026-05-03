import ListsDemo from '@/components/react/ListsDemo';

export default function ListsKeysPage() {
  return (
    <main className="space-y-10">
      <h1 className="text-3xl font-bold">Lists & Keys</h1>

      {/* WHAT */}
      <section>
        <h2 className="text-xl font-semibold">What are Lists in React?</h2>
        <p className="text-gray-600 mt-2">
          Lists in React are created by transforming arrays of data into arrays of elements.
          Each list item needs a unique "key" prop to help React identify which items have changed.
        </p>
      </section>

      {/* BASIC LIST */}
      <section>
        <h2 className="text-xl font-semibold">Basic List Rendering</h2>
        <pre className="bg-gray-100 p-3 rounded text-sm">
{`const numbers = [1, 2, 3, 4, 5];

function NumberList() {
  return (
    <ul>
      {numbers.map(number => (
        <li key={number}>{number}</li>
      ))}
    </ul>
  );
}`}
        </pre>
      </section>

      {/* WHY KEYS */}
      <section>
        <h2 className="text-xl font-semibold">Why Do We Need Keys?</h2>
        <p className="text-gray-600 mt-2">
          Keys help React identify which items have changed, are added, or are removed.
          They give elements a stable identity.
        </p>
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-4">
          <p className="text-yellow-700">
            <strong>Warning:</strong> Never use array indexes as keys if the list can be reordered!
          </p>
        </div>
      </section>

      {/* INTERACTIVE DEMO */}
      <section>
        <h2 className="text-xl font-semibold">Interactive Demo</h2>
        <ListsDemo />
      </section>

      {/* KEY RULES */}
      <section>
        <h2 className="text-xl font-semibold">Key Rules</h2>
        <ul className="list-disc ml-6 mt-2 text-gray-600 space-y-2">
          <li><strong>Unique:</strong> Keys must be unique among siblings</li>
          <li><strong>Stable:</strong> Keys should not change between renders</li>
          <li><strong>Predictable:</strong> Use IDs from your data when possible</li>
          <li><strong>Not Index:</strong> Avoid using array index as key</li>
        </ul>
      </section>

      {/* GOOD KEYS */}
      <section>
        <h2 className="text-xl font-semibold">Good Key Examples</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h3 className="font-medium text-green-600"> Good Keys</h3>
            <pre className="bg-gray-100 p-2 rounded text-sm mt-1">
{`// Database IDs
{todos.map(todo => (
  <li key={todo.id}>{todo.text}</li>
))}

// Unique identifiers
{users.map(user => (
  <li key={user.email}>{user.name}</li>
))}`}
            </pre>
          </div>
          <div>
            <h3 className="font-medium text-red-600"> Bad Keys</h3>
            <pre className="bg-gray-100 p-2 rounded text-sm mt-1">
{`// Array index (changes on reorder)
{items.map((item, index) => (
  <li key={index}>{item}</li>
))}

// Random values (unstable)
{items.map(item => (
  <li key={Math.random()}>{item}</li>
))}`}
            </pre>
          </div>
        </div>
      </section>

      {/* COMPLEX LISTS */}
      <section>
        <h2 className="text-xl font-semibold">Complex List Components</h2>
        <pre className="bg-gray-100 p-3 rounded text-sm">
{`function TodoList({ todos }) {
  return (
    <ul>
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={() => toggleTodo(todo.id)}
        />
      ))}
    </ul>
  );
}

function TodoItem({ todo, onToggle }) {
  return (
    <li>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={onToggle}
      />
      <span style={{
        textDecoration: todo.completed ? 'line-through' : 'none'
      }}>
        {todo.text}
      </span>
    </li>
  );
}`}
        </pre>
      </section>

      {/* FILTERING LISTS */}
      <section>
        <h2 className="text-xl font-semibold">Filtering Lists</h2>
        <pre className="bg-gray-100 p-3 rounded text-sm">
{`function ProductList({ products, filter }) {
  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ul>
      {filteredProducts.map(product => (
        <li key={product.id}>
          {product.name} - {product.price}
        </li>
      ))}
    </ul>
  );
}`}
        </pre>
      </section>

      {/* NESTED LISTS */}
      <section>
        <h2 className="text-xl font-semibold">Nested Lists</h2>
        <pre className="bg-gray-100 p-3 rounded text-sm">
{`function CategoryList({ categories }) {
  return (
    <div>
      {categories.map(category => (
        <div key={category.id}>
          <h3>{category.name}</h3>
          <ul>
            {category.items.map(item => (
              <li key={item.id}>{item.name}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}`}
        </pre>
      </section>

      {/* CONDITIONAL LISTS */}
      <section>
        <h2 className="text-xl font-semibold">Conditional List Rendering</h2>
        <pre className="bg-gray-100 p-3 rounded text-sm">
{`function UserList({ users, showActiveOnly }) {
  const displayUsers = showActiveOnly
    ? users.filter(user => user.isActive)
    : users;

  return (
    <ul>
      {displayUsers.length > 0 ? (
        displayUsers.map(user => (
          <li key={user.id}>{user.name}</li>
        ))
      ) : (
        <li>No users found</li>
      )}
    </ul>
  );
}`}
        </pre>
      </section>

      {/* PERFORMANCE */}
      <section>
        <h2 className="text-xl font-semibold">Performance Considerations</h2>
        <ul className="list-disc ml-6 mt-2 text-gray-600 space-y-2">
          <li>Keys help React optimize re-renders</li>
          <li>Avoid creating new arrays in render</li>
          <li>Use React.memo for expensive list items</li>
          <li>Consider virtualization for very large lists</li>
        </ul>
      </section>

      {/* COMMON USE CASES */}
      <section>
        <h2 className="text-xl font-semibold">Common Use Cases</h2>
        <ul className="list-disc ml-6 mt-2 text-gray-600 space-y-2">
          <li><strong>Todo lists</strong> - Managing tasks</li>
          <li><strong>Product catalogs</strong> - Displaying items</li>
          <li><strong>User lists</strong> - Showing user data</li>
          <li><strong>Comments</strong> - Discussion threads</li>
          <li><strong>Navigation menus</strong> - Menu items</li>
        </ul>
      </section>

      {/* BEST PRACTICES */}
      <section>
        <h2 className="text-xl font-semibold">Best Practices</h2>
        <ul className="list-disc ml-6 mt-2 text-gray-600 space-y-2">
          <li>Always provide a key prop</li>
          <li>Use stable, unique identifiers</li>
          <li>Avoid index as key when order can change</li>
          <li>Extract list items to separate components</li>
          <li>Use meaningful key names in development</li>
        </ul>
      </section>

      {/* COMMON MISTAKES */}
      <section>
        <h2 className="text-xl font-semibold">Common Mistakes</h2>
        <ul className="list-disc ml-6 mt-2 text-gray-600 space-y-2">
          <li>Using array index as key</li>
          <li>Missing key prop (causes warnings)</li>
          <li>Using unstable keys (random, timestamps)</li>
          <li>Duplicating keys in the same list</li>
          <li>Using non-string values as keys</li>
        </ul>
      </section>

      {/* INTERVIEW */}
      <section className="border-l-4 border-black pl-4">
        <h2 className="text-lg font-semibold">Explanation</h2>
        <p className="text-gray-600 text-sm mt-2">
          Keys are special props that help React identify which items in a list have changed. They must be unique
          among siblings and stable across renders. Use database IDs or unique identifiers from your data. Never
          use array indexes as keys, especially for dynamic lists that can be reordered or filtered.
        </p>
      </section>
    </main>
  );
}