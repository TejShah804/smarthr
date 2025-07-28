import React from "react";
import { useNavigate } from "react-router-dom";
import DashboardStatusCards from "./status";
import DashboardPanel from "./je";
import SalesAndInvoices from "./invoice";
import ProjectsAndTasks from "./deals";
import DashboardWidgets from "./schedules";
// Link this to the CSS provided below

const cardData = [
  {
    title: "Attendance Overview",
    value: "120/154",
    change: "+2.1%",
    trend: "up",
    color: "orange",
    icon: "bi bi-calendar", 
  },
  {
    title: "Total No of Project's",
    value: "90/125",
    change: "-2.1%",
    trend: "down",
    color: "dark-teal",
    icon: "bi bi-kanban",
  },
  {
    title: "Total No of Clients",
    value: "69/86",
    change: "-11.2%",
    trend: "down",
    color: "blue",
    icon: "bi bi-people",
  },
  {
    title: "Total No of Tasks",
    value: "225/28",
    change: "+11.2%",
    trend: "up",
    color: "pink",
    icon: "bi bi-list-task",
  },
  {
    title: "Earnings",
    value: "$21445",
    change: "+10.2%",
    trend: "up",
    color: "purple",
    icon: "bi bi-currency-dollar",
  },
  {
    title: "Profit This Week",
    value: "$5,544",
    change: "+2.1%",
    trend: "up",
    color: "red",
    icon: "bi bi-graph-up",
  },
  {
    title: "Job Applicants",
    value: "98",
    change: "+2.1%",
    trend: "up",
    color: "green",
    icon: "bi bi-person-lines-fill",
  },
  {
    title: "New Hire",
    value: "45/48",
    change: "-11.2%",
    trend: "down",
    color: "black",
    icon: "bi bi-person-plus",
  },
];


const departments = [
  { name: "UI/UX", value: 85 },
  { name: "Development", value: 105 },
  { name: "Management", value: 95 },
  { name: "HR", value: 30 },
  { name: "Testing", value: 55 },
  { name: "Marketing", value: 110 },
];

const AdminDashboard = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="admin-wrapper">
        {/* Sidebar */}
        <aside className="sidebar">
          <div className="logo">
            
            <img src="/img/logo.svg" alt="" />
            
          </div> 
          <div className="menu">
            <button className="menu-item active">
              Dashboard <span className="hot">Hot</span>
            </button>
            <button className="submenu">Admin Dashboard</button>
            <button className="submenu">Employee Dashboard</button>
            {/* <button className="submenu">Deals Dashboard</button> */}
            <button className="submenu" onClick={() => navigate("/deals")}>
  Deals Dashboard
</button>
            <button className="submenu">Leads Dashboard</button>
          </div>
        </aside>

        {/* Main Content */}
        <div className="main-content">
 <div className="topbar" style={{
    padding: '10px 20px', 
    backgroundColor: '#fff', 
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'sticky',
    top: 0,
    zIndex: 900
      }}>
         <div style={{display: 'flex', alignItems: 'center', gap: '15px'}}>
    <button style={{
      background: 'none',
      border: 'none',
      fontSize: '18px',
      cursor: 'pointer',
      color: '#666'
    }}>←</button>
    <div style={{
      position: 'relative',
      display: 'flex',
      alignItems: 'center'
    }}>
      <input 
        type="text" 
        placeholder="Search in HRMS" 
        style={{
          border: '1px solid #ddd',
          borderRadius: '4px',
          padding: '6px 30px 6px 12px',
          outline: 'none',
          fontSize: '14px',
          width: '290px',
          boxShadow: 'inset 0 1px 2px rgba(0,0,0,0.05)'
        }} 
      />
      <div style={{
        position: 'absolute',
        right: '10px',
        fontSize: '12px',
        color: '#999',
        backgroundColor: '#f5f5f5',
        padding: '2px 4px',
        borderRadius: '3px',
        border: '1px solid #e0e0e0'
      }}>
        Ctrl+/
      </div>
      
    </div>
       <i className="bi bi-grid" style={{cursor: 'pointer', fontSize: '16px', color: '#666'}}></i>
    <i className="bi bi-gear" style={{cursor: 'pointer', fontSize: '16px', color: '#666'}}></i>
   
  </div>
  
  <div style={{
    display: 'flex',
    alignItems: 'center',
    gap: '20px'
  }}>
 
    <i className="bi bi-fullscreen" style={{cursor: 'pointer', fontSize: '16px', color: '#666'}}></i>
    <i className="bi bi-grid" style={{cursor: 'pointer', fontSize: '16px', color: '#666'}}></i>
    <i className="bi bi-chat" style={{cursor: 'pointer', fontSize: '16px', color: '#666'}}></i>
    <i className="bi bi-bell" style={{cursor: 'pointer', fontSize: '16px', color: '#666'}}></i>
    <i className="bi bi-envelope" style={{cursor: 'pointer', fontSize: '16px', color: '#666'}}></i>
    <img 
      src="/img/avatar-02.jpg" 
      alt="User" 
      style={{
        width: '30px', 
        height: '30px', 
        borderRadius: '50%',
        objectFit: 'cover'
      }}
    />
  </div>
          </div>

          <div className="maindiv" style={{padding: '20px'}}>
                  <div className="breadcrumb1"style={{marginBottom:"10px"}}>
             <div className="breadcrumb">
       <h3>Admin Dashboard</h3>
         </div>
        <div className="breadcrumb-path">
    <span className="icon"><i className="bi bi-house-door"></i></span>
    <span className="divider">/</span>
    <span className="path">Dashboard</span>
    <span className="divider">/</span>
    <span className="current">Admin Dashboard</span>
  </div>
      </div>
     



          <div className="welcome-card">
            <div className="profile-pic">
    <img
      src="/img/avatar-31.jpg"
      alt="Profile"
      style={{
        width: 60,
        height: 60,
        borderRadius: "50%",
      }}
    />
            </div>
            <div className="welcome-text">
              <h2>Welcome Back, Adrian</h2>
              <p>
                You have <span className="highlight">21</span> Pending Approvals &{" "}
                <span className="highlight">14</span> Leave Requests
              </p>
            </div>
            <div className="actions">
      <button
        className="btn add-project"
        style={{
          backgroundColor: "#3B7080",
          border: "1px solid #3B7080",
          color: "#FFF"
        }}
      >
        ＋ Add Project
      </button>
      <button
        className="btn add-request"
        style={{
          backgroundColor: "#F26522",
          border: "1px solid #F26522",
          color: "#FFF"
        }}
      >
        ＋ Add Requests
      </button>
            </div>
          </div>

          {/* Dashboard Cards + Chart Section */}
          <div className="dashboard">
            <div className="cards-container">
              {cardData.map((card, index) => (
                <div className="card" key={index} style={{}} >
                  <div className={`icon ${card.color}`}>
                    <i className={card.icon}></i> 
                  </div>
                  <h4 style={{fontSize:"medium"}}>{card.title}</h4>
                  <h3>
                    {card.value}{" "}
                    <span className={`change ${card.trend}`} style={{fontSize:"small"}}>{card.change}</span>
                  </h3>
                  <a href="#">View Detail</a>
                </div>
              ))}
            </div>

            <div className="chart-card">
              <div className="chart-header" style={{fontSize:"1rem"}}>
                <h4>Employees By Department</h4>
                <button>This Week</button>
              </div>
              <div className="bar-chart">
                {departments.map((dept, idx) => (
                  <div key={idx} className="bar-row">
                    <span>{dept.name}</span>
                    <div className="bar">
                      <div className="fill" style={{ width: `${dept.value}%` }}></div>
                    </div>
                  </div>
                ))}
              </div>
              <p className="note">
                <span className="dot" /> No of Employees increased by{" "}
                <span className="highlight">+20%</span> from last Week
              </p>
            </div>
          </div>
             <DashboardStatusCards/>
             <DashboardPanel/>
             <SalesAndInvoices/>
             <ProjectsAndTasks/>
             <DashboardWidgets/>
          </div>
     
        </div>
        
      </div>
   
    </>
  );
};

export default AdminDashboard;
