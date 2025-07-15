import React from "react";


const DashboardStatusCards = () => {
  return (
    <div className="dashboard-cards-wrapper">
      {/* Employee Status */}
      <div className="status-card employee-status-card">
        <div className="status-card-header">
          <h6>Employee Status</h6>
          <button className="status-btn-small">📅 This Week</button>
        </div>
        <h2 className="employee-count">Total Employee <span>154</span></h2>
        <div className="employee-bar-chart">
          <div className="bar bar-fulltime"></div>
          <div className="bar bar-contract"></div>
          <div className="bar bar-probation"></div>
          <div className="bar bar-wfh"></div>
        </div>
        <div className="employee-type-grid">
          <div><span className="dot dot-fulltime"></span> Fulltime (48%)<h3>112</h3></div>
          <div><span className="dot dot-contract"></span> Contract (20%)<h3>112</h3></div>
          <div><span className="dot dot-probation"></span> Probation (22%)<h3>12</h3></div>
          <div><span className="dot dot-wfh"></span> WFH (20%)<h3>04</h3></div>
        </div>
        <div className="top-performer-section">
          <span className="medal-icon">🏅</span>
          <img src="https://i.pravatar.cc/40?img=1" alt="avatar" />
          <div>
            <h5>Daniel Esbella</h5>
            <p>IOS Developer</p>
          </div>
          <div className="performance-label">Performance <strong>99%</strong></div>
        </div>
        <button className="btn-full-width">View All Employees</button>
      </div>

      {/* Attendance Overview */}
      <div className="status-card attendance-overview-card">
        <div className="status-card-header">
          <h6>Attendance Overview</h6>
          <button className="status-btn-small">📅 Today</button>
        </div>
        <div className="attendance-chart">
          {/* <svg viewBox="0 0 36 18" className="semi-circle">
            <path d="M2 18 A16 16 0 0 1 34 18" fill="none" stroke="#0f172a" strokeWidth="3" />
            <path d="M2 18 A16 16 0 0 1 12 4" fill="none" stroke="#22c55e" strokeWidth="3" />
            <path d="M12 4 A16 16 0 0 1 25 4" fill="none" stroke="#facc15" strokeWidth="3" />
            <path d="M25 4 A16 16 0 0 1 30 10" fill="none" stroke="#ef4444" strokeWidth="3" />
          </svg> */}
          <img src="img/download.png"></img>
          <div className="attendance-total">
            <p>Total Attendance</p>
            <h2>120</h2>
          </div>
        </div>
        <div className="attendance-breakdown">
          <p><span className="dot dot-present"></span> Present - 59%</p>
          <p><span className="dot dot-late"></span> Late - 21%</p>
          <p><span className="dot dot-permission"></span> Permission - 2%</p>
          <p><span className="dot dot-absent"></span> Absent - 15%</p>
        </div>
        <div className="avatar-footer">
          <div className="avatar-list">
            <img src="https://i.pravatar.cc/30?img=2" alt="user" />
            <img src="https://i.pravatar.cc/30?img=3" alt="user" />
            <img src="https://i.pravatar.cc/30?img=4" alt="user" />
            <span>+1</span>
          </div>
          <a href="/">View Details</a>
        </div>
      </div>

      {/* Clock In/Out */}
      <div className="status-card clock-status-card">
        <div className="status-card-header space-between">
          <h6>Clock-In/Out</h6>
          <div>
            <select>
              <option>All Departments</option>
            </select>
            <button className="status-btn-small">📅 Today</button>
          </div>
        </div>

        {[{
          name: "Daniel Esbella", role: "UI/UX Designer", time: "09:15", img: 5
        }, {
          name: "Doglas Martini", role: "Project Manager", time: "09:36", img: 6
        }, {
          name: "Brian Villalobos", role: "PHP Developer", time: "09:15", img: 7, details: {
            in: "10:30 AM", out: "09:45 AM", prod: "09:21 Hrs"
          }
        }, {
          name: "Anthony Lewis", role: "Marketing Head", late: true, time: "08:35", img: 8, delay: "30 Min"
        }].map((emp, idx) => (
          <div className={`clock-entry ${emp.details ? "with-details" : ""} ${emp.late ? "late-entry" : ""}`} key={idx}>
            <img src={`https://i.pravatar.cc/40?img=${emp.img}`} alt="avatar" />
            <div>
              <h5>{emp.name}</h5>
              <p>{emp.role}</p>
              {emp.details && (
                <div className="time-details">
                  <span>Clock In: {emp.details.in}</span>
                  <span>Clock Out: {emp.details.out}</span>
                  <span>Production: {emp.details.prod}</span>
                </div>
              )}
            </div>
            {emp.late ? (
              <div className="late-info">
                <span className="badge badge-green">{emp.delay}</span>
                <span className="badge badge-red">{emp.time}</span>
              </div>
            ) : (
              <span className="badge badge-green">{emp.time}</span>
            )}
          </div>
        ))}
        <button className="btn-full-width">View All Attendance</button>
      </div>
    </div>
  );
};

export default DashboardStatusCards;
