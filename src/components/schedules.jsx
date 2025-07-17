import React from "react";
// import "./DashboardWidgets.css";

const schedules = [
  {
    title: "Interview Candidates - UI/UX Designer",
    tag: "UI/ UX Designer",
    time: "01:00 PM - 02:20 PM",
    date: "Thu, 15 Feb 2025",

    
    
  },
  {
    title: "Interview Candidates - IOS Developer",
    tag: "IOS Developer",
    time: "02:00 PM - 04:20 PM",
    date: "Thu, 15 Feb 2025",
  },
];

const activities = [
  { name: "Matt Morgan", time: "05:30 PM", desc: "Added New Project", project: "HRMS Dashboard", color: "text-danger" },
  { name: "Jay Ze", time: "05:00 PM", desc: "Commented on Uploaded Document" },
  { name: "Mary Donald", time: "05:30 PM", desc: "Approved Task Projects" },
  { name: "George David", time: "06:00 PM", desc: "Requesting Access to Module Tickets" },
  { name: "Aaron Zeen", time: "06:30 PM", desc: "Downloaded App Reportss" },
  { name: "Hendry Daniel", time: "05:30 PM", desc: "Completed New Project HMS" },
];

const birthdays = {
  today: [{ name: "Andrew Jermia", role: "IOS Developer" }],
  tomorrow: [
    { name: "Mary Zeen", role: "UI/UX Designer" },
    { name: "Antony Lewis", role: "Android Developer" },
  ],
  others: [{ name: "Doglas Martini", role: ".Net Developer", date: "25 Jan 2025" }],
};

const DashboardWidgets = () => {
  return (
    <div className="dashboard-widgets container-fluid py-3">
      <div className="row g-4">
        {/* Schedules */}
        <div className="col-lg-4">
          <div className="widget-card">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h5 className="fw-bold">Schedules</h5>
              <button className="btn btn-light border">View All</button>
            </div>
            {schedules.map((item, index) => (
              <div className="schedule-box mb-3" key={index}>
                <span className="badge bg-dark mb-2">{item.tag}</span>
                <h6 className="fw-semibold">{item.title}</h6>
                <div className="small text-muted mb-2">
                  <i className="bi bi-calendar-event me-1"></i> {item.date}
                  <span className="ms-3">
                    <i className="bi bi-clock me-1"></i> {item.time}
                  </span>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="avatar-group">
                    {[...Array(5)].map((_, i) => (
                      <img key={i} src={`https://i.pravatar.cc/40?img=${i + index * 5}`} alt="avatar" className="avatar" />
                    ))}
                    <span className="extra-count">+3</span>
                  </div>
    <button
      className="btn btn-warning btn-sm"
      style={{
        backgroundColor: "#F26522",
        border: "1px solid #F26522",
        color:"white"
      }}
    >
      Join Meeting
    </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Activities */}
        <div className="col-lg-4">
          <div className="widget-card">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h5 className="fw-bold">Recent Activities</h5>
              <button className="btn btn-light border">View All</button>
            </div>
            {activities.map((activity, idx) => (
              <div className="d-flex justify-content-between align-items-start mb-3" key={idx}>
                <div className="d-flex align-items-start">
                  <img
                    src={`https://i.pravatar.cc/40?img=${idx + 10}`}
                    className="avatar rounded-circle me-3"
                    alt="avatar"
                  />
                  <div>
                    <h6 className="mb-0 fw-bold">{activity.name}</h6>
                    <small>
                      {activity.desc}{" "}
                      {activity.project && <span className={activity.color}>{activity.project}</span>}
                    </small>
                  </div>
                </div>
                <span className="text-muted small">{activity.time}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Birthdays */}
        <div className="col-lg-4">
          <div className="widget-card">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h5 className="fw-bold">Birthdays</h5>
              <button className="btn btn-light border">View All</button>
            </div>
            <div>
              <p className="fw-semibold mb-2">Today</p>
              {birthdays.today.map((b, i) => (
                <div className="birthday-item" key={i}>
                  <div className="d-flex align-items-center">
                    <img src={`https://i.pravatar.cc/40?img=${i + 20}`} alt="avatar" className="avatar me-3" />
                    <div>
                      <h6 className="fw-bold mb-0">{b.name}</h6>
                      <small className="text-muted">{b.role}</small>
                    </div>
                  </div>
    <button
      className="btn btn-outline-secondary btn-sm"
      style={{
        backgroundColor: "#3B7080",
        border: "1px solid #3B7080",
        color: "#FFF"
      }}
    >
      <i className="bi bi-cake"></i> Send
    </button>
                </div>
              ))}
              <p className="fw-semibold mt-4 mb-2">Tomorrow</p>
              {birthdays.tomorrow.map((b, i) => (
                <div className="birthday-item" key={i}>
                  <div className="d-flex align-items-center">
                    <img src={`https://i.pravatar.cc/40?img=${i + 30}`} alt="avatar" className="avatar me-3" />
                    <div>
                      <h6 className="fw-bold mb-0">{b.name}</h6>
                      <small className="text-muted">{b.role}</small>
                    </div>
                  </div>
    <button
      className="btn btn-outline-secondary btn-sm"
      style={{
        backgroundColor: "#3B7080",
        border: "1px solid #3B7080",
        color: "#FFF"
      }}
    >
      <i className="bi bi-cake"></i> Send
    </button>
                </div>
              ))}
              <p className="fw-semibold mt-4 mb-2">{birthdays.others[0].date}</p>
              {birthdays.others.map((b, i) => (
                <div className="birthday-item" key={i}>
                  <div className="d-flex align-items-center">
                    <img src={`https://i.pravatar.cc/40?img=${i + 40}`} alt="avatar" className="avatar me-3" />
                    <div>
                      <h6 className="fw-bold mb-0">{b.name}</h6>
                      <small className="text-muted">{b.role}</small>
                    </div>
                  </div>
    <button
      className="btn btn-outline-secondary btn-sm"
      style={{
        backgroundColor: "#3B7080",
        border: "1px solid #3B7080",
        color: "#FFF"
      }}
    >
      <i className="bi bi-cake"></i> Send
    </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardWidgets;
