import React from "react";

const DashboardStatusCards = () => {
  return (
    <div className="dashboard-cards-wrapper">
      {/* Employee Status */}
      <div className="status-card employee-status-card">
        <div className="status-card-header">
          <h6>Employee Status</h6>
          <button className="status-btn-small">
            {" "}
            <i class="bi bi-calendar"></i> This Week
          </button>
        </div>
        <h2 className="employee-count">
          Total Employee <span>154</span>
        </h2>
        <div
          className="employee-bar-chart"
          style={{
            height: 25,
            backgroundColor: "rgb(211, 211, 197)",
            borderRadius: 6,
            overflow: "hidden",
            minWidth: 34,
            gap: 0,
            marginBottom: "40px",
          }}
        >
          <div
            className="bar bar-fulltime"
            style={{
              flex: 1,
              height: 25,
              backgroundColor: "#FFC107",
              border: "1px solid #FFC107",
              borderRadius: "0px",
              overflow: "hidden",
              minWidth: "40px",
            }}
          ></div>
          <div
            className="bar bar-contract"
            style={{
              flex: 1,
              height: 25,
              backgroundColor: "#3B7080",
              border: "1px solid #3B7080",
              borderRadius: "0px",
              overflow: "hidden",
              minWidth: "40px",
            }}
          ></div>
          <div
            className="bar bar-probation"
            style={{
              flex: 1,
              height: 25,
              backgroundColor: "#E70D0D",
              border: "1px solid #E70D0D",
              borderRadius: "0px",
              overflow: "hidden",
              minWidth: "40px",
            }}
          ></div>
          <div
            className="bar bar-wfh"
            style={{
              flex: 1,
              height: 25,
              backgroundColor: "#FD3995",
              borderRadius: "0px",
              overflow: "hidden",
              minWidth: "40px",
            }}
          ></div>
        </div>
        <div className="employee-type-grid">
          <div>
            <span
              className="dot dot-fulltime"
              style={{ backgroundColor: "#FFC107" }}
            ></span>{" "}
            Fulltime (48%)<h3 style={{ marginLeft: "25px" }}>112</h3>
          </div>
          <div>
            <span
              className="dot dot-contract"
              style={{ backgroundColor: "#3B7080" }}
            ></span>{" "}
            Contract (20%)<h3 style={{ marginLeft: "25px" }}>112</h3>
          </div>
          <div>
            <span
              className="dot dot-probation"
              style={{ backgroundColor: "#E70D0D" }}
            ></span>{" "}
            Probation (22%)<h3 style={{ marginLeft: "25px" }}>12</h3>
          </div>
          <div>
            <span
              className="dot dot-wfh"
              style={{ backgroundColor: "#FD3995" }}
            ></span>{" "}
            WFH (20%)<h3 style={{ marginLeft: "25px" }}>04</h3>
          </div>
        </div>
        <div className="top-performer-section">
          <span className="medal-icon">🏅</span>
          <img src="https://i.pravatar.cc/40?img=1" alt="avatar" />
          <div>
            <h5>Daniel Esbella</h5>
            <p>IOS Developer</p>
          </div>
          <div className="performance-label">
            Performance <strong>99%</strong>
          </div>
        </div>
        <button className="btn-full-width">View All Employees</button>
      </div>

      {/* Attendance Overview */}
      <div className="status-card attendance-overview-card">
        <div className="status-card-header">
          <h6>Attendance Overview</h6>
          <button className="status-btn-small">
            {" "}
            <i class="bi bi-calendar"></i> Today
          </button>
        </div>
        <div className="attendance-chart">
          <img src="img/download.png"></img>
          <div className="attendance-total">
            <p>Total Attendance</p>
            <h2>120</h2>
          </div>
        </div>
        <div className="attendance-breakdown">
          <p>
            <span className="dot dot-present"></span> Present - 59%
          </p>
          <p>
            <span className="dot dot-late"></span> Late - 21%
          </p>
          <p>
            <span className="dot dot-permission"></span> Permission - 2%
          </p>
          <p>
            <span className="dot dot-absent"></span> Absent - 15%
          </p>
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
            {/* <select>
              <option>All Departments</option>
            </select> */}
            <button className="status-btn-small">
              <i class="bi bi-calendar"></i> Today
            </button>
          </div>
        </div>

        {[
          {
            name: "Daniel Esbella",
            role: "UI/UX Designer",
            time: "09:15",
            img: 5,
          },
          {
            name: "Doglas Martini",
            role: "Project Manager",
            time: "09:36",
            img: 6,
          },
          {
            name: "Brian Villalobos",
            role: "PHP Developer",
            time: "09:15",
            img: 7,
            details: {
              in: "10:30 AM",
              out: "09:45 AM",
              prod: "09:21 Hrs",
            },
          },
          {
            name: "Anthony Lewis",
            role: "Marketing Head",
            late: true,
            time: "08:35",
            img: 8,
            delay: "30 Min",
          },
        ].map((emp, idx) => (
          <div
            className={`clock-entry ${emp.details ? "with-details" : ""} ${
              emp.late ? "late-entry" : ""
            }`}
            key={idx}
          >
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
              <span className="badge badge-green" style={{marginLeft:'175px'}}>{emp.time}</span>
            )}
          </div>
        ))}
        <button className="btn-full-width">View All Attendance</button>
      </div>
    </div>
  );
};

export default DashboardStatusCards;
