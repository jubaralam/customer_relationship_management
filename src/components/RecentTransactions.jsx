import { useState, useEffect } from "react";

// Demo data for recent transactions
const demoTransactions = [
  { id: 10, date: "2025-01-30", amount: 150.0, status: "Completed" },
  { id: 23, date: "2025-01-29", amount: 320.5, status: "Pending" },
  { id: 32, date: "2025-01-28", amount: 85.0, status: "Completed" },
  { id: 33, date: "2025-01-28", amount: 85.0, status: "Completed" },
];

const RecentTransactions = () => {
  const [transactions, setTransactions] = useState(demoTransactions);

  useEffect(() => {
    // Here, you would fetch the transactions from an API
    // For now, we're using the demo data
    // Example:
    // fetch('/api/transactions')
    //   .then(response => response.json())
    //   .then(data => setTransactions(data));
  }, []);

  return (
    <div className="w-full bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Recent Transactions</h2>
      <table>
        <thead>
          <tr className="w-full ">
            <th className="py-2 px-2 border-b text-left">Transaction ID</th>
            <th className="py-2 px-2 border-b text-left">Date</th>
            <th className="py-2 px-2 border-b text-left">Amount</th>
            {/* <th className="py-2 px-2 border-b text-left">Status</th> */}
          </tr>
        </thead>
        <tbody>
          {transactions?.map((transaction) => (
            <tr key={transaction.id} className="hover:bg-gray-100">
              <td className="py-2 px-2 border-b">{transaction.id}</td>
              <td className="py-2 px-2 border-b">{transaction.date}</td>
              <td className="py-2 px-2 border-b">
                ${transaction.amount.toFixed(2)}
              </td>
              {/* <td className="py-2 px-4 border-b">
                <span
                  className={`${
                    transaction.status === "Completed"
                      ? "text-green-500"
                      : transaction.status === "Pending"
                      ? "text-yellow-500"
                      : "text-red-500"
                  } font-semibold`}
                >
                  {transaction.status}
                </span>
              </td> */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RecentTransactions;
