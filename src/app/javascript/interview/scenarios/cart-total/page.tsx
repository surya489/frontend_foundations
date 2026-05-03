import CartTotalDemo from "@/components/js/scenarios/CartTotalDemo";

export default function CartTotalPage() {
  return (
    <main className="space-y-10">
      <h1 className="text-3xl font-bold">
        Cart Total Calculation
      </h1>

      {/* PROBLEM */}
      <section>
        <h2 className="text-xl font-semibold">Problem</h2>
        <p className="text-gray-600 mt-2">
          Calculate total cart value including quantity, discount, and tax.
        </p>
      </section>

      {/* NAIVE */}
      <section>
        <h2 className="text-xl font-semibold">Naive Approach</h2>

        <p className="text-gray-600 mt-2">
          Hardcoding values or calculating without structure leads to errors.
        </p>
      </section>

      {/* SOLUTION */}
      <section>
        <h2 className="text-xl font-semibold">Optimized Approach</h2>

        <pre className="bg-gray-100 p-3 rounded text-sm">
{`subtotal = sum(price * qty)
discount = subtotal * %
tax = subtotal * %
total = subtotal - discount + tax`}
        </pre>
      </section>

      {/* DEMO */}
      <section>
        <h2 className="text-xl font-semibold">Interactive Demo</h2>
        <CartTotalDemo />
      </section>

      {/* EXPLANATION */}
      <section>
        <h2 className="text-xl font-semibold">Explanation</h2>
        <ul className="list-disc ml-6 mt-2 text-gray-600 space-y-1">
          <li>Calculate subtotal first</li>
          <li>Apply discount</li>
          <li>Add tax</li>
          <li>Return final total</li>
        </ul>
      </section>

      {/* REAL WORLD */}
      <section>
        <h2 className="text-xl font-semibold">Real-World Use</h2>
        <ul className="list-disc ml-6 mt-2 text-gray-600">
          <li>E-commerce checkout</li>
          <li>Billing systems</li>
          <li>Order summary pages</li>
        </ul>
      </section>

      {/* INTERVIEW */}
      <section className="border-l-4 border-black pl-4">
        <h2 className="text-lg font-semibold">Explanation</h2>
        <p className="text-gray-600 text-sm mt-2">
          This problem tests business logic handling. It involves calculations,
          data transformation, and handling real-world conditions like tax and discounts.
        </p>
      </section>
    </main>
  );
}