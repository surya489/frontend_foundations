"use client";

import { useState } from "react";

type Item = {
  name: string;
  price: number;
  qty: number;
};

export default function CartTotalDemo() {
  const [items, setItems] = useState<Item[]>([
    { name: "Product A", price: 100, qty: 1 },
    { name: "Product B", price: 200, qty: 2 },
  ]);

  const [discount, setDiscount] = useState(10); // %
  const [tax, setTax] = useState(5); // %

  function updateQty(index: number, value: number) {
    const updated = [...items];
    updated[index].qty = value;
    setItems(updated);
  }

  function calculateTotal() {
    const subtotal = items.reduce(
      (sum, item) => sum + item.price * item.qty,
      0
    );

    const discountAmount = (subtotal * discount) / 100;
    const taxAmount = (subtotal * tax) / 100;

    const total = subtotal - discountAmount + taxAmount;

    return {
      subtotal,
      discountAmount,
      taxAmount,
      total,
    };
  }

  const { subtotal, discountAmount, taxAmount, total } =
    calculateTotal();

  return (
    <div className="border rounded-lg p-4 mt-4 space-y-4">
      <h3 className="font-semibold">Cart Demo</h3>

      {/* ITEMS */}
      {items.map((item, i) => (
        <div key={i} className="flex items-center gap-2">
          <span className="w-24">{item.name}</span>
          <span>₹{item.price}</span>

          <input
            type="number"
            value={item.qty}
            onChange={(e) =>
              updateQty(i, Number(e.target.value))
            }
            className="w-16 border px-2 py-1 rounded"
          />
        </div>
      ))}

      {/* SETTINGS */}
      <div className="flex gap-4 text-sm">
        <div>
          Discount %
          <input
            type="number"
            value={discount}
            onChange={(e) => setDiscount(Number(e.target.value))}
            className="ml-2 border px-2 py-1 rounded w-16"
          />
        </div>

        <div>
          Tax %
          <input
            type="number"
            value={tax}
            onChange={(e) => setTax(Number(e.target.value))}
            className="ml-2 border px-2 py-1 rounded w-16"
          />
        </div>
      </div>

      {/* RESULT */}
      <div className="bg-gray-100 p-3 rounded text-sm">
        <p>Subtotal: ₹{subtotal}</p>
        <p>Discount: -₹{discountAmount}</p>
        <p>Tax: +₹{taxAmount}</p>
        <p className="font-semibold">Total: ₹{total}</p>
      </div>
    </div>
  );
}