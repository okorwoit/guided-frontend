// App.js

import React, { useState } from 'react';
import './styles.css'; // Import your CSS file

import Header from './components /Header';
import Sidebar from './components /Sidebar';

function App() {
  const [activeCategory, setActiveCategory] = useState('Dashboard');

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
  };

  return (
    <div className="app">
      <div className="content">
        <Header activeCategory={activeCategory} />
        {/* Other components and content */}
      </div>
      <Sidebar activeCategory={activeCategory} onCategoryClick={handleCategoryClick} />

    </div>
  );
}

export default App;
