import React from "react";
import { useNavigate } from "react-router-dom";
import RecentPanels from "./recentpanel";

import DealsCharts from "./dealcharts";
import SalesDashboard from "./dealcountry";
import DealsOverview from "./dealsoverview";






const DealDashboard = () => {
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
  <button className="submenu" onClick={() => navigate("/admin")}>
    Admin Dashboard
  </button>
  <button className="submenu">Employee Dashboard</button>
  <button className="submenu" onClick={() => navigate("/deals")} style={{color:" #F26522;"}}>
    Deals Dashboard
  </button>
  <button className="submenu">Leads Dashboard</button>
</div>

        </aside>

        {/* Main Content */}
        <div className="main-content">
          <div className="topbar">
            <div style={{justifyContent:'space-between'}}>
            <button className="">←</button>
            <input type="text" placeholder="Search in HRMS" className="search" />
             {/* <i class="bi bi-grid"></i>
            <i class="bi bi-gear"></i> */}

            
            </div>
           
            {/* <div className="topbar-icons">
              <i class="bi bi-chat-fill"></i>
              <span className="icon"><i class="bi bi-bell-fill"></i></span>
              <span className="icon"><i class="bi bi-envelope-fill"></i></span>
              <span className="icon"><i class="bi bi-person"></i></span>
            </div> */}
            <div className="topbar-icons">
              
              <i class="bi bi-fullscreen"></i>
              <i class="bi bi-grid"></i>
              <i class="bi bi-chat"></i>
            <span className="icon"><i class="bi bi-bell"></i></span>
            <span className="icon"><i class="bi bi-envelope"></i></span>
            <span className="icon3"><img src="/img/avatar-02.jpg" alt="" style={{width:'25px', height:'25px', borderRadius:'50px'}}/></span>
          </div>
          </div>
      <div className="breadcrumb1">
             <div className="breadcrumb">
       <h3>Deal Dashboard</h3>
         </div>
        <div className="breadcrumb-path">
    <span className="icon"><i className="bi bi-house-door"></i></span>
    <span className="divider">/</span>
    <span className="path">Dashboard</span>
    <span className="divider">/</span>
    <span className="current">Deal Dashboard</span>
  </div>
      </div>
        <DealsOverview/>
         <DealsCharts/>
          <SalesDashboard/>
        <RecentPanels/>
       

         
          
        </div>
        
      </div>
   
    </>
  );
};

export default DealDashboard;
