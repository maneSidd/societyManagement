import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Dashboard from './LayoutComponents/Dashboard';
import AdminDash from './Pages/Admin/AdminDash';
import AddOwner from './Pages/Admin/AddOwner';
import Calender from './Pages/Expendature/Calender';
import AddExpendature from './Pages/Expendature/AddExpendature';

function App() {
  return (
    <>
      <Router>
        <Routes>        
          <Route path="/admin" element={<Dashboard></Dashboard>}>
            <Route index element={<AdminDash></AdminDash>}></Route>        
            <Route path="add-owner" element={<AddOwner></AddOwner>}></Route> 
            <Route path="calender" element={<Calender></Calender>}></Route> 
            <Route path="add-expendature" element={<AddExpendature></AddExpendature>}></Route>
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
