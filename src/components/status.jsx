import React from "react";
// import "bootstrap-icons/font/bootstrap-icons.css";
// import "./DashboardStatus.css";

const DashboardStatusCards = () => {
  return (
    <div className="dashboard-grid">
      {/* Employee Status */}
      <div className="card employee-status">
        <div className="card-header">
          <h6>Employee Status</h6>
          <button className="btn-small">This Week</button>
        </div>
        <h2 className="employee-total">Total Employee <span>154</span></h2>
        <div className="bar-chart">
          <div className="bar fulltime"></div>
          <div className="bar contract"></div>
          <div className="bar probation"></div>
          <div className="bar wfh"></div>
        </div>
        <div className="status-grid">
          <div><span className="dot fulltime"></span> Fulltime (48%)<h3>112</h3></div>
          <div><span className="dot contract"></span> Contract (20%)<h3>112</h3></div>
          <div><span className="dot probation"></span> Probation (22%)<h3>12</h3></div>
          <div><span className="dot wfh"></span> WFH (20%)<h3>04</h3></div>
        </div>
        <div className="top-performer">
          <img src="https://i.pravatar.cc/40?img=1" alt="avatar" />
          <div>
            <h5>Daniel Esbella</h5>
            <p>IOS Developer</p>
          </div>
          <div className="performance">Performance <strong>99%</strong></div>
        </div>
        <button className="btn-block">View All Employees</button>
      </div>

      {/* Attendance Overview */}
      <div className="card attendance-overview">
        <div className="card-header">
          <h6>Attendance Overview</h6>
          <button className="btn-small">Today</button>
        </div>
        <div className="attendance-chart">
          <h2>Total Attendance <br /> <span>120</span></h2>
        </div>
        <div className="attendance-status">
          <p><span className="dot present"></span> Present - 59%</p>
          <p><span className="dot late"></span> Late - 21%</p>
          <p><span className="dot permission"></span> Permission - 2%</p>
          <p><span className="dot absent"></span> Absent - 15%</p>
        </div>
        <div className="footer-row">
          <div className="avatars">
            <img src="https://i.pravatar.cc/30?img=2" alt="user" />
            <img src="https://i.pravatar.cc/30?img=3" alt="user" />
            <img src="https://i.pravatar.cc/30?img=4" alt="user" />
            <span>+1</span>
          </div>
          <a href="/">View Details</a>
        </div>
      </div>

      {/* Clock In/Out */}
      <div className="card clock-in-out">
        <div className="card-header">
          <h6>Clock-In/Out</h6>
          <div>
            <select>
              <option>All Departments</option>
            </select>
            <button className="btn-small">Today</button>
          </div>
        </div>

        <div className="employee-entry">
          <img src="https://i.pravatar.cc/40?img=5" alt="avatar" />
          <div>
            <h5>Daniel Esbella</h5>
            <p>UI/UX Designer</p>
          </div>
          <span className="badge green">09:15</span>
        </div>

        <div className="employee-entry">
          <img src="https://i.pravatar.cc/40?img=6" alt="avatar" />
          <div>
            <h5>Doglas Martini</h5>
            <p>Project Manager</p>
          </div>
          <span className="badge green">09:36</span>
        </div>

        <div className="employee-entry details">
          <img src="https://i.pravatar.cc/40?img=7" alt="avatar" />
          <div>
            <h5>Brian Villalobos</h5>
            <p>PHP Developer</p>
            <div className="timing">
              <span>Clock In: 10:30 AM</span>
              <span>Clock Out: 09:45 AM</span>
              <span>Production: 09:21 Hrs</span>
            </div>
          </div>
          <span className="badge green">09:15</span>
        </div>

        <div className="employee-entry late">
          <img src="https://i.pravatar.cc/40?img=8" alt="avatar" />
          <div>
            <h5>Anthony Lewis</h5>
            <p>Marketing Head</p>
          </div>
          <div className="late-times">
            <span className="badge green">30 Min</span>
            <span className="badge red">08:35</span>
          </div>
        </div>

        <button className="btn-block">View All Attendance</button>
      </div>
    </div>
  );
};

export default DashboardStatusCards;
