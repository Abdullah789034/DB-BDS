import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import DonorList from './components/DonorList';
import RequestList from './components/RequestList';
import BloodInventory from './components/BloodInventory';
import HospitalList from './components/HospitalList';
import DonationList from './components/DonationList';
import StaffList from './components/StaffList';

function App() {
  return (
    <Router>
      <div className="container">
        <h1 className="text-center my-5 p-3 bg-danger text-white rounded shadow">Blood Donation Management System</h1>
        <nav className="navbar navbar-expand-lg navbar-light bg-light mb-5">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">Home</Link>
            <div className="navbar-nav">
              <Link className="nav-link" to="/donors">Donors</Link>
              <Link className="nav-link" to="/requests">Requests</Link>
              <Link className="nav-link" to="/blood-inventory">Blood Inventory</Link>
              <Link className="nav-link" to="/hospitals">Hospitals</Link>
              <Link className="nav-link" to="/donations">Donations</Link>
              <Link className="nav-link" to="/staff">Staff</Link>
            </div>
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<DonorList />} />
          <Route path="/donors" element={<DonorList />} />
          <Route path="/requests" element={<RequestList />} />
          <Route path="/blood-inventory" element={<BloodInventory />} />
          <Route path="/hospitals" element={<HospitalList />} />
          <Route path="/donations" element={<DonationList />} />
          <Route path="/staff" element={<StaffList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
