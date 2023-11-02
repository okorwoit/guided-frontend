import React, { useState } from "react";

const MentoringOpportunityForm = () => {
  // Define state variables to manage form input fields
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [date, setDate] = useState("");
  const [mentor, setMentor] = useState("");
  const [duration, setDuration] = useState("");
  
  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch('/api/mentoring-opportunities', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title,
          category,
          date,
          mentor,
          duration,
        }),
      });
  
      const data = await response.json(); // Parse the response data
  
      console.log(data); // Log the response data to the console
    } catch (error) {
      console.error(error); // Log any errors to the console
    }
  };

  return (
    <div className="mentoring-opportunity-form">
      <h2>Create Mentoring Opportunity</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Description:</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Category:</label>
          <select value={category} onChange={(e) => setCategory(e.target.value)}>
            <option value="">Select a category</option>
            <option value="Career Advice">Career Advice</option>
            <option value="Resume Review">Resume Review</option>
            <option value="Mock Interview">Mock Interview</option>
            {/* Add other categories as needed */}
          </select>
        </div>
        <div className="form-group">
          <label>Date:</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Mentor:</label>
          <select value={mentor} onChange={(e) => setMentor(e.target.value)}>
            <option value="">Select a mentor</option>
            {/* You can dynamically populate the mentor options from your backend */}
          </select>
        </div>
        <div className="form-group">
          <label>Duration (in minutes):</label>
          <input
            type="number"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
          />
        </div>
        {/* <div className="form-group">
          <button type="submit" className="submit-button">Save</button>
        </div> */}
      </form>
    </div>
  );
};

export default MentoringOpportunityForm;
