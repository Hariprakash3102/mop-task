import React from 'react'; 
import './App.css';
import Login from './components/login/Login';
import { Route, BrowserRouter as Router, Routes,  } from 'react-router-dom';
import Dashboard from './components/dashboard/Dashborad';
import PrivateRoute, { ReturnRouter } from './components/private-router/PrivateRouter';
import Patients from './components/patients/patients';
import Referrals from './components/referals/Referrals';

function App() {
  return (
    <>
        <Router>
        <Routes>
          {/* <Route path="/" element={<Login />} />  */}
          <Route element={<ReturnRouter /> } >
            <Route path="/" element={<Login />} />
          </Route> 
          <Route element={<PrivateRoute />}>
            <Route path="/Dashboard" element={<Dashboard />} />
             <Route path="/Patients" element={<Patients />} />
            <Route path="/Referrals" element={<Referrals />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
