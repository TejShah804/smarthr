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
      <div className="breadcrumb1" style={{padding:"20px"}}>
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
