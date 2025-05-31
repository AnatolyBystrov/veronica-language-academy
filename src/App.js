import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import AdminDashboard from './pages/AdminDashboard';
import ParentPortal from './pages/ParentPortal';
import Navigation from './components/Navigation';

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Routes>
          <Route path="/" element={<AdminDashboard />} />
          <Route path="/parent" element={<ParentPortal />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;