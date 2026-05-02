"use client";

export default function ClosureRealWorld() {
  function createBankAccount() {
    let balance = 0;

    return {
      deposit(amount: number) {
        balance += amount;
        return balance;
      },
      getBalance() {
        return balance;
      },
    };
  }

  const account = createBankAccount();

  return (
    <div className="border rounded-lg p-4 mt-4">
      <h3 className="font-semibold mb-3">Real-world Use Case</h3>

      <p className="text-sm text-gray-600 mb-3">
        Closures are used to create private variables.
      </p>

      <pre className="bg-gray-100 p-3 rounded text-sm overflow-x-auto">
{`function createBankAccount() {
  let balance = 0;

  return {
    deposit(amount) {
      balance += amount;
    },
    getBalance() {
      return balance;
    }
  };
}`}
      </pre>

      <p className="text-xs text-gray-500 mt-2">
        balance is not accessible directly — only through methods
      </p>
    </div>
  );
}