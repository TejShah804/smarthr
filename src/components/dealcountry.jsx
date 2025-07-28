import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
} from "recharts";
import { FiMail, FiPhone, FiMessageCircle } from "react-icons/fi";
// import "./DashboardDealsSection.css";

const countryDeals = [
  {
    flag: "img/country-01.svg",
    country: "USA",
    deals: 350,
    value: "$1065.00",
    trend: "up",
    trendData: [
      { value: 100 },
      { value: 130 },
      { value: 110 },
      { value: 150 },
      { value: 140 },
    ],
  },
  {
    flag: "img/country-02.svg",
    country: "UAE",
    deals: 221,
    value: "$966.00",
    trend: "up",
    trendData: [
      { value: 90 },
      { value: 120 },
      { value: 110 },
      { value: 140 },
      { value: 130 },
    ],
  },
  {
    flag: "img/country-03.svg",
    country: "Singapore",
    deals: 236,
    value: "$959.00",
    trend: "down",
    trendData: [
      { value: 150 },
      { value: 130 },
      { value: 120 },
      { value: 100 },
      { value: 90 },
    ],
  },
  {
    flag: "img/country-04.svg",
    country: "France",
    deals: 589,
    value: "$879.00",
    trend: "up",
    trendData: [
      { value: 80 },
      { value: 100 },
      { value: 120 },
      { value: 140 },
      { value: 160 },
    ],
  },
  {
    flag: "img/country-05.svg",
    country: "Norway",
    deals: 221,
    value: "$632.00",
    trend: "down",
    trendData: [
      { value: 130 },
      { value: 120 },
      { value: 100 },
      { value: 90 },
      { value: 80 },
    ],
  },
];

const wonStageData = [
  { name: "Calls", value: 24, color: "#F44336" },
  { name: "Email", value: 39, color: "#FFC107" },
  { name: "Chats", value: 20, color: "#4CAF50" },
  { name: "Conversion", value: 48, color: "#345B63" },
];

const recentFollowUps = [
  {
    name: "Alexander Jermai",
    role: "UI/UX Designer",
    img: "https://i.pravatar.cc/40?img=1",
    type: "mail",
  },
  {
    name: "Doglas Martini",
    role: "Product Designer",
    img: "https://i.pravatar.cc/40?img=2",
    type: "phone",
  },
  {
    name: "Daniel Esbella",
    role: "Project Manager",
    img: "https://i.pravatar.cc/40?img=3",
    type: "mail",
  },
  {
    name: "Daniel Esbella",
    role: "Team Lead",
    img: "https://i.pravatar.cc/40?img=4",
    type: "message",
  },
  {
    name: "Stephan Peralt",
    role: "Team Lead",
    img: "https://i.pravatar.cc/40?img=5",
    type: "message",
  },
];

const DashboardDealsSection = () => {
  return (
    <div className="dashboard-deals-section">
      {/* Deals by Country */}
      <div className="panel country-panel">
        <div className="panel-header"style={{
        borderBottom: "1px solid #E5E7EB",
        paddingBottom: "5px",
        marginBottom: "12px"
      }}>
          <h4 style={{ fontSize: "medium" }}>Deals By Country</h4>
          <button className="view-btn">View All</button>
        </div>
        {countryDeals.map((deal, index) => (
          <div key={index} className="country-row">
            <img src={deal.flag} alt={deal.country} className="flag-img" />
            <div className="country-info" style={{ marginLeft: "10px" }}>
              <div className="country-name">{deal.country}</div>
              <div className="country-deals">Deals: {deal.deals}</div>
            </div>
            <div className={`trend-line ${deal.trend}`}>
              <ResponsiveContainer width={60} height={30}>
                <AreaChart data={deal.trendData}>
                  <Area
                    type="monotone"
                    dataKey="value"
                    stroke={deal.trend === "up" ? "#4CAF50" : "#F44336"}
                    fill={deal.trend === "up" ? "#C8E6C9" : "#FFCDD2"}
                    strokeWidth={2}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
            <div className="country-value">{deal.value}</div>
          </div>
        ))}
      </div>

      {/* Won Deals Stage */}
      <div className="panel chart-panel">
        <div className="panel-header" style={{
        borderBottom: "1px solid #E5E7EB",
        paddingBottom: "5px",
        marginBottom: "12px"
      }}>
          <h4 style={{ fontSize: "medium" }}>Won Deals Stage</h4>
          <span className="dropdown" >Sales Pipeline ▼</span>
        </div>
        <div className="centered-chart">
          <h3 style={{ fontSize: "medium" }}>Stages Won This Year</h3>
          <h2>$45,899.79</h2>
          <div className="bubble-chart">
            <ResponsiveContainer width="100%" height={240}>
              <PieChart>
                <Tooltip />
                <Pie
                  data={wonStageData}
                  dataKey="value"
                  cx="50%"
                  cy="50%"
                  outerRadius={90}
                  innerRadius={30}
                  label={({ name, percent }) =>
                    `${name} ${(percent * 100).toFixed(0)}%`
                  }
                >
                  {wonStageData.map((entry, index) => (
                    <Cell key={index} fill={entry.color} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Recent Follow Up */}
      <div className="panel followup-panel">
        <div className="panel-header" style={{
        borderBottom: "1px solid #E5E7EB",
        paddingBottom: "5px",
        marginBottom: "12px"
      }}>
          <h4 style={{ fontSize: "medium" }}>Recent Follow Up</h4>
          <button className="view-btn">View All</button>
        </div>
        {recentFollowUps.map((item, index) => (
          <div key={index} className="followup-row">
            <img src={item.img} alt={item.name} className="avatar" />
            <div className="followup-info">
              <div className="name">{item.name}</div>
              <div className="role">{item.role}</div>
            </div>
            <div className="followup-icon">
              {item.type === "mail" && <FiMail />}
              {item.type === "phone" && <FiPhone />}
              {item.type === "message" && <FiMessageCircle />}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DashboardDealsSection;
