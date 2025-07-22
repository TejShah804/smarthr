import React from "react";
import {
  ResponsiveContainer,
  FunnelChart,
  Funnel,
  LabelList,
  Tooltip,
} from "recharts";


const funnelData = [
  { stage: "Marketing", value: 7898 },
  { stage: "Sales", value: 4658 },
  { stage: "Email", value: 2898 },
  { stage: "Chat", value: 789 },
  { stage: "Operational", value: 655 },
  { stage: "Calls", value: 454 },
];

const kpiCards = [
  {
    title: "Total Deals",
    value: "$45,221,45",
    change: "-4.01%",
    note: "from last week",
    icon: "bi-exclamation-diamond-fill",
    color: "orange",
    trend: "down",
  },
  {
    title: "Total Customers",
    value: "9895",
    change: "+55%",
    note: "from last week",
    icon: "bi-people-fill",
    color: "purple",
    trend: "up",
  },
  {
    title: "Deal Value",
    value: "$12,545,68",
    change: "+20.01%",
    note: "from last week",
    icon: "bi-gear-wide-connected",
    color: "teal",
    trend: "up",
  },
  {
    title: "Conversion Rate",
    value: "51.96%",
    change: "-6.01%",
    note: "from last week",
    icon: "bi-clipboard2-check-fill",
    color: "blue",
    trend: "down",
  },
  {
    title: "Revenue this month",
    value: "$46,548,48",
    change: "+55%",
    note: "from last week",
    icon: "bi-graph-up-arrow",
    color: "pink",
    trend: "up",
  },
  {
    title: "Active Customers",
    value: "8987",
    change: "-3.22%",
    note: "from last week",
    icon: "bi-star-fill",
    color: "yellow",
    trend: "down",
  },
];

const DealsOverview = () => {
  return (
    <div className="deals-overview" style={{display:'flex'}}>
      <div className="cards">
        {kpiCards.map((card, i) => (
          <div className="card" key={i}>
            <div className={`icon ${card.color}`}>
              <i className={`bi ${card.icon}`}></i>
            </div>
            <h4>{card.title}</h4>
            <h3>{card.value}</h3>
            <div className={`change ${card.trend}`}>
              {card.trend === "up" ? "↑" : "↓"} {card.change}
              <span className="notes"> {card.note}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="funnel-chart-card">
        <div className="header-row">
          <h4>Pipeline Stages</h4>
          <button>This Week</button>
        </div>
        <ResponsiveContainer width="100%" height={300}>
          <FunnelChart>
            <Tooltip />
            <Funnel dataKey="value" data={funnelData} isAnimationActive>
              <LabelList dataKey="stage" position="right" fill="#fff" />
            </Funnel>
          </FunnelChart>
        </ResponsiveContainer>

        <div className="leads-values">
          <div><span className="dot marketing" /> Marketing: <strong>$5,221,45</strong></div>
          <div><span className="dot sales" /> Sales: <strong>$30,424</strong></div>
          <div><span className="dot email" /> Email: <strong>$21,135</strong></div>
          <div><span className="dot chat" /> Chat: <strong>$15,235</strong></div>
          <div><span className="dot operational" /> Operational: <strong>$10,557</strong></div>
        </div>
      </div>
    </div>
  );
};

export default DealsOverview;
