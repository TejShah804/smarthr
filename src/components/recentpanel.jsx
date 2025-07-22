import React from "react";
// import "./RecentPanels.css";

const deals = [
  {
    name: "Collins",
    stage: "Quality To Buy",
    value: "$4,50,000",
    owner: "Anthony Lewis",
    avatar: "https://i.pravatar.cc/40?img=11",
    date: "14 Jan 2024",
  },
  {
    name: "Konopelski",
    stage: "Proposal Made",
    value: "$3,15,000",
    owner: "Brian Villalobos",
    avatar: "https://i.pravatar.cc/40?img=12",
    date: "21 Jan 2024",
  },
  {
    name: "Adams",
    stage: "Contact Made",
    value: "$8,40,000",
    owner: "Harvey Smith",
    avatar: "https://i.pravatar.cc/40?img=13",
    date: "20 Feb 2024",
  },
  {
    name: "Schumm",
    stage: "Quality To Buy",
    value: "$6,10,000",
    owner: "Stephan Peralt",
    avatar: "https://i.pravatar.cc/40?img=14",
    date: "15 Mar 2024",
  },
  {
    name: "Wisozk",
    stage: "Presentation",
    value: "$4,70,000",
    owner: "Doglas Martini",
    avatar: "https://i.pravatar.cc/40?img=15",
    date: "12 Apr 2024",
  },
];

const activities = [
  {
    icon: "",
    desc: "Drain responded to your appointment schedule question.",
    time: "09:25 PM",
  },
  {
    icon: "",
    desc: "You sent 1 Message to the James.",
    time: "10:25 PM",
  },
  {
    icon: "",
    desc: "Denwar responded to your appointment on 25 Jan 2025, 08:15 PM",
    time: "09:25 PM",
  },
  {
    icon: "",
    desc: "Meeting With Abraham",
    time: "09:25 PM",
    // avatar: "https://i.pravatar.cc/30?img=16",
  },
];

const RecentPanels = () => {
  return (
    <div className="recent-panels">
      {/* Deals Table */}
      <div className="deals-panel">
        <div className="panel-header">
          <h4>Recent Deals</h4>
          <button>View All</button>
        </div>
        <table>
          <thead>
            <tr>
              <th>Deal Name</th>
              <th>Stage</th>
              <th>Deal Value</th>
              <th>Owner</th>
              <th>Closed Date</th>
            </tr>
          </thead>
          <tbody>
            {deals.map((deal, index) => (
              <tr key={index}>
                <td>{deal.name}</td>
                <td>{deal.stage}</td>
                <td>{deal.value}</td>
                <td>
                  <img src={deal.avatar} alt="owner" className="avatar" />
                  {deal.owner}
                </td>
                <td>{deal.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Activities Timeline */}
      <div className="activities-panel">
        <div className="panel-header">
          <h4>Recent Activities</h4>
          <button>View All</button>
        </div>
        <ul className="activity-list">
          {activities.map((act, index) => (
            <li key={index}>
              <span className="activity-icon">{act.icon}</span>
              <div className="activity-content">
                <p>{act.desc}</p>
                <span className="activity-time">{act.time}</span>
              </div>
              {act.avatar && <img src={act.avatar} alt="avatar" className="activity-avatar" />}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RecentPanels;
