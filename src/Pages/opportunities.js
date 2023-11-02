import React, { useState } from "react";

const Opportunities = ({ opportunitiesProp }) => {
  const [filter, setFilter] = useState("All");

  const filteredOpportunities =
    filter === "All"
      ? opportunitiesProp
      : opportunitiesProp.filter(
          (opportunity) => opportunity.category === filter
        );

  return (
    <div>
      <button onClick={() => setFilter("All")}>All</button>
      <button onClick={() => setFilter("Career Advice")}>Career Advice</button>
      <button onClick={() => setFilter("Resume Review")}>Resume Review</button>
      <button onClick={() => setFilter("Mock Interview")}>
        Mock Interview
      </button>

      {filteredOpportunities &&
        filteredOpportunities.map((opportunity) => (
          <div key={opportunity.id}>
            <h2>{opportunity.title}</h2>
            <p>{opportunity.description}</p>
            <p>Scheduled Date: {opportunity.date}</p>
            <p>Duration: {opportunity.duration} minutes</p>
          </div>
        ))}
    </div>
  );
};

export default Opportunities;