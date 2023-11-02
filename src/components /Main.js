// import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "../Pages/dashboard";

const Main = () => {
  // const [searchInput, setSearchInput] = useState('');

  // const handleSearch = (e) => {
  //     setSearchInput(e.target.value);
  // }
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />} />
        </Routes>
      </Router>
    </div>
  );
};

export default Main;
