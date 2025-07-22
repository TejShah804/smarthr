// src/components/DealsCharts.jsx
import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
} from "recharts";


const barData = [
  { name: "Inpipeline", value: 180 },
  { name: "Follow Up", value: 140 },
  { name: "Schedule", value: 200 },
  { name: "Conversion", value: 120 },
];

const radarData = [
  { subject: "Jan", Marketing: 65, Chat: 50, Email: 80 },
  { subject: "Feb", Marketing: 40, Chat: 30, Email: 90 },
  { subject: "Mar", Marketing: 100, Chat: 120, Email: 60 },
  { subject: "Apr", Marketing: 90, Chat: 80, Email: 70 },
  { subject: "May", Marketing: 60, Chat: 60, Email: 40 },
  { subject: "Jun", Marketing: 45, Chat: 65, Email: 35 },
  { subject: "Jul", Marketing: 75, Chat: 95, Email: 55 },
];

const companyDeals = [
  { name: "Pitch", date: "05 April, 2025", amount: "$3655", icon: "/img/company-24.svg" },
  { name: "Initech", date: "05 May, 2025", amount: "$2185", icon: "/img/company-25.svg" },
  { name: "Umbrella Corp", date: "29 April, 2025", amount: "$1583", icon: "/img/company-26.svg" },
  { name: "Capital Partners", date: "23 Mar, 2025", amount: "$6584", icon: "/img/company-27.svg" },
  { name: "Massive Dynamic", date: "23 Feb, 2025", amount: "$2153", icon: "/img/company-28.svg" },
   { name: "Umbrella Corp", date: "29 April, 2025", amount: "$1583", icon: "/img/company-26.svg" },
];

const DealsCharts = () => {
  return (
    <div className="deals-charts-wrapper">
      {/* Deals by Stage */}
      <div className="chart-card">
        <div className="chart-header">
          <h4>Deals by Stage</h4>
          <button>This Week</button>
        </div>
        <div className="bar-overview">
          <span className="percentage">98%</span>
          <span className="growth">+12%</span>
          <span className="compare">vs last years</span>
        </div>
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={barData}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="value" fill="#f97316" barSize={40} radius={[6, 6, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Deals by Companies */}
      <div className="chart-card">
        <div className="chart-header">
          <h4>Deals By Companies</h4>
          <button>This Week</button>
        </div>
        <div className="company-list">
          {companyDeals.map((item, i) => (
            <div key={i} className="company-item">
              <img src={item.icon} alt={item.name} />
              <div className="company-info">
                <strong>{item.name}</strong>
                <p>Closing Deal date {item.date}</p>
              </div>
              <span className="deal-amount">{item.amount}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Top Deals */}
      <div className="chart-card">
        <div className="chart-header">
          <h4>Top Deals</h4>
          <button>This Week</button>
        </div>
        <ResponsiveContainer width="100%" height={250}>
          <RadarChart data={radarData}>
            <PolarGrid />
            <PolarAngleAxis dataKey="subject" />
            <PolarRadiusAxis angle={30} domain={[0, 120]} />
            <Radar name="Marketing" dataKey="Marketing" stroke="#f97316" fill="#f97316" fillOpacity={0.6} />
            <Radar name="Chat" dataKey="Chat" stroke="#7c3aed" fill="#7c3aed" fillOpacity={0.6} />
            <Radar name="Email" dataKey="Email" stroke="#22c55e" fill="#22c55e" fillOpacity={0.6} />
          </RadarChart>
        </ResponsiveContainer>
        <div className="status-summary">
          <p><span className="dot orange"></span> Marketing: <strong>$5,69,877</strong></p>
          <p><span className="dot purple"></span> Chat: <strong>$4,84,575</strong></p>
          <p><span className="dot green"></span> Email: <strong>$1,84,575</strong></p>
        </div>
      </div>
    </div>
  );
};

export default DealsCharts;
