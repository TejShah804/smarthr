import React from "react";
// import { PieChart, Pie, Cell } from "recharts";
// import "./ProjectsAndTasks.css";

const data = [
  { name: "Ongoing", value: 24, color: "#FEC107" },
  { name: "On Hold", value: 10, color: "#007BFF" },
  { name: "Completed", value: 40, color: "#28C76F" },
  { name: "Overdue", value: 16, color: "#EA5455" },
];

const ProjectsAndTasks = () => {
  const total = data.reduce((sum, d) => sum + d.value, 0);
  const completed = data[2].value;

  return (
    <div className="dashboard-section row g-4">
      {/* Projects Table */}
      <div className="col-lg-8">
        <div className="card p-3 h-100">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h5 className="fw-bold">Projects</h5>
            <button className="btn btn-light border">This Week</button>
          </div>
          <div className="table-responsive">
            <table className="table project-table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Team</th>
                  <th>Hours</th>
                  <th>Deadline</th>
                  <th>Priority</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["PRO-001", "Office Management App", "12 Sep 2024", "High"],
                  ["PRO-002", "Clinic Management", "24 Oct 2024", "Low"],
                  ["PRO-003", "Educational Platform", "18 Feb 2024", "Medium"],
                  ["PRO-004", "Chat & Call Mobile App", "19 Feb 2024", "High"],
                  ["PRO-005", "Travel Planning Website", "18 Feb 2024", "Medium"],
                  ["PRO-006", "Service Booking Software", "20 Feb 2024", "Low"],
                  ["PRO-008", "Travel Planning Website", "17 Oct 2024", "Medium"],
                ].map(([id, name, deadline, priority], i) => (
                  <tr key={i}>
                    <td>{id}</td>
                    <td className="fw-semibold">{name}</td>
                    <td>
                      <div className="avatar-group">
                        <img src={`https://i.pravatar.cc/150?img=${i + 1}`} className="avatar" alt="" />
                        <img src={`https://i.pravatar.cc/150?img=${i + 2}`} className="avatar" alt="" />
                        {i === 1 && <div className="extra-count">+1</div>}
                        {i === 6 && <div className="extra-count">+2</div>}
                      </div>
                    </td>
                    <td>
                      <span>15/255 Hrs</span>
                      <div className="progress">
                        <div className="progress-bar" style={{ width: `${(15 / 255) * 100}%` }}></div>
                        
                      </div>
                    </td>
                    <td>{deadline}</td>
                    <td>
                      <span className={`badge priority-${priority.toLowerCase()}`}>{priority}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Tasks Statistics */}
      <div className="col-lg-4">
        <div className="card p-3 h-100">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h5 className="fw-bold">Tasks Statistics</h5>
            <button className="btn btn-light border">This Week</button>
          </div>

          <div className="d-flex flex-column align-items-center">
            {/* <img
              alt="Tasks Chart"
              className="task-chart-img mb-3"
            /> */} <img src="/img/download (1).png" alt="Tasks " className="task-chart-img mb-3" style={{width:"70%", height:"70%"}}/>

            <p className="fw-bold fs-5 mb-2" style={{marginTop:"-33px"}}>Total Tasks</p>
            <h4 className="fw-bold mb-3">{completed + 24 + 10 + 16}/{total}</h4>

            <div className="d-flex justify-content-between w-100 px-3 mb-3 text-center flex-wrap">
              {data.map((d, i) => (
                <div key={i} className="legend-item">
                  <span className="legend-dot" style={{ backgroundColor: d.color }}></span> 
                  <div className="small">{d.name}</div>
                  <div className="fw-semibold">{d.value}%</div>
                </div>
              ))}
            </div>

            <div className="summary-box">
              <span className="text-success fw-bold">389/689 hrs</span>
              <div className="small">Spent on Overall Tasks This Week</div>
              <button className="btn btn-dark btn-sm mt-2">View All</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsAndTasks;
