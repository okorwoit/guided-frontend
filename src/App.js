import React, { useState } from "react";
import "./styles.css";

import Header from "./components /Header";
import Sidebar from "./components /Sidebar";
import Main from "./components /Main";


function App() {
  const [activeCategory, setActiveCategory] = useState("Dashboard");

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
  };

  return (
      <div className="app">
        <div className="content">
          <Header activeCategory={activeCategory} />
          <Main />
          {/* Other components and content */}
        </div>
        <Sidebar
          activeCategory={activeCategory}
          onCategoryClick={handleCategoryClick}
        />
      </div>
  );
}

export default App;
