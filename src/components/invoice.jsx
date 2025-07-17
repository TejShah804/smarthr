import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";


const data = [
  { name: "Jan", income: 40, expenses: 60 },
  { name: "Feb", income: 30, expenses: 70 },
  { name: "Mar", income: 45, expenses: 55 },
  { name: "Apr", income: 80, expenses: 20 },
  { name: "May", income: 85, expenses: 15 },
  { name: "Jun", income: 90, expenses: 10 },
  { name: "Jul", income: 80, expenses: 20 },
  { name: "Aug", income: 80, expenses: 20 },
  { name: "Sep", income: 80, expenses: 20 },
  { name: "Oct", income: 85, expenses: 15 },
  { name: "Nov", income: 20, expenses: 80 },
  { name: "Dec", income: 80, expenses: 20 },
];

const invoices = [
  {
    name: "Redesign Website",
    id: "#INVO02",
    client: "Logistics",
    amount: "$3560",
    status: "Unpaid",
    img: 1,
  },
  {
    name: "Module Completion",
    id: "#INVO05",
    client: "Yip Corp",
    amount: "$4175",
    status: "Unpaid",
    img: 2,
  },
  {
    name: "Change on Emp Module",
    id: "#INVO03",
    client: "Ignis LLP",
    amount: "$6985",
    status: "Unpaid",
    img: 3,
  },
  {
    name: "Changes on the Board",
    id: "#INVO02",
    client: "Ignis LLP",
    amount: "$1457",
    status: "Unpaid",
    img: 4,
  },
  {
    name: "Hospital Management",
    id: "#INVO06",
    client: "HCL Corp",
    amount: "$6458",
    status: "Paid",
    img: 5,
  },
];

export default function SalesAndInvoices() {
  return (
    <div className="sales-invoices-container">
      <div className="sales-overview-card">
        <div className="card-header">
          <h5>Sales Overview</h5>
          <select>
            <option>All Departments</option>
          </select>
        </div>
        <div className="update-time">Last Updated at 11:30PM</div>
        <div className="chart-wrapper">
          <div className="legend">
            <span className="legend-item">
              <span className="color-box income"></span> Income
            </span>
            <span className="legend-item">
              <span className="color-box expenses"></span> Expenses
            </span>
          </div>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={data}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend verticalAlign="top" />
              <Bar dataKey="income" stackId="a" fill="#f97316" />
              <Bar dataKey="expenses" stackId="a" fill="#f1f5f9" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="invoices-card">
        <div className="card-header">
          <h5>Invoices</h5>
          <div>
            <select>
              <option>Invoices</option>
            </select>
            <button className="week-btn">This Week</button>
          </div>
        </div>
        <ul className="invoice-list">
          {invoices.map((inv, i) => (
            <li key={i}>
              <img src={`https://i.pravatar.cc/40?img=${inv.img}`} alt="" />
              <div className="invoice-info">
                <h6>{inv.name}</h6>
                <p>
                  {inv.id} • {inv.client}
                </p>
              </div>
              <div className="amount-status">
                <p>Payment</p>
                <strong>{inv.amount}</strong>
              </div>
              <span
                className={`status-badge ${
                  inv.status === "Paid" ? "paid" : "unpaid"
                }`}
              >
                {inv.status}
              </span>
            </li>
          ))}
        </ul>
        <div className="view-all-btn">View All</div>
      </div>
    </div>
  );
}
