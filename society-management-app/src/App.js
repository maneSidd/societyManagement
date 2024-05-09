import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './LayoutComponents/Header';
import Dashboard from './LayoutComponents/Dashboard';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard></Dashboard>}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
