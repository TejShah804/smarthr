import React from "react";


const applicants = [
  { name: "Brian Villalobos", exp: "5+ Years", location: "USA", role: "UI/UX Designer", badge: "uiux" },
  { name: "Anthony Lewis", exp: "4+ Years", location: "USA", role: "Python Developer", badge: "python" },
  { name: "Stephan Peralt", exp: "6+ Years", location: "USA", role: "Android Developer", badge: "android" },
  { name: "Doglas Martini", exp: "2+ Years", location: "USA", role: "React Developer", badge: "react" },
];

const employees = [
  { name: "Anthony Lewis", dept: "Finance", tag: "finance" },
  { name: "Brian Villalobos", dept: "Development", tag: "development" },
  { name: "Stephan Peralt", dept: "Marketing", tag: "marketing" },
  { name: "Doglas Martini", dept: "Manager", tag: "manager" },
  { name: "Anthony Lewis", dept: "UI/UX Design", tag: "uiux" },
];

const todos = [
  "Add Holidays",
  "Add Meeting to Client",
  "Chat with Adrian",
  "Management Call",
  "Add Payroll",
  "Add Policy for Increment"
];

const DashboardPanel = () => {
  return (
    <div className="dashboard-panel">
      <div className="card applicants">
        <div className="card-header">
          <h5>Jobs Applicants</h5>
          <button className="view-all">View All</button>
        </div>
        <div className="tab-toggle">
          <button>Openings</button>
          <button className="active">Applicants</button>
        </div>
        <ul className="applicant-list">
          {applicants.map((a, i) => (
            <li key={i}>
              <img src={`https://i.pravatar.cc/40?img=${i + 1}`} alt="avatar" />
              <div>
                <h6>{a.name}</h6>
                <p>Exp : {a.exp} • {a.location}</p>
              </div>
              <span className={`badge ${a.badge}`}>{a.role}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="card employees">
        <div className="card-header">
          <h5>Employees</h5>
          <button className="view-all">View All</button>
        </div>
        <div className="employee-table">
          <div className="table-head">
            <span>Name</span>
            <span>Department</span>
          </div>
          {employees.map((e, i) => (
            <div className="table-row" key={i}>
              <div className="emp-name">
                <img src={`https://i.pravatar.cc/40?img=${i + 2}`} alt="avatar" />
                <div>
                  <h6>{e.name}</h6>
                  <p>{e.dept}</p>
                </div>
              </div>
              <span className={`badge ${e.tag}`}>{e.dept}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="card todo">
        <div className="card-header">
          <h5>Todo</h5>
          <div>
            <button className="today">📅 Today</button>
            <button className="add">＋</button>
          </div>
        </div>
        <ul className="todo-list">
          {todos.map((item, i) => (
            <li key={i}>
              <span className="drag-icon">⋮⋮</span>
              <input type="checkbox" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DashboardPanel;
