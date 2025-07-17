import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';

import AdminDashboard from './components/ad';
import DealsDashboard from './components/dealdashboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/deals" />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/deals" element={<DealsDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
