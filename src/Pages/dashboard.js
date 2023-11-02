import React, { useState } from 'react';
import { Card, CardContent, Button, Dialog } from '@material-ui/core';
import { useNavigate } from 'react-router-dom';
import MentoringOpportunityForm from './MentoringOpportunityForm';


const Dashboard = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const handleButtonClick = (path) => {
    if (path === '/mentoring') {
      setOpen(true);
    } else {
      navigate(path);
    }
  };

  const handleClose = () => {
    setOpen(false);
    // update the opportunities page here
  };

  const cardInfo = [
    { title: 'Message Mentor', path: '/messages' },
    { title: 'Resume Review', path: '/mentoring' },
    { title: 'Mock Interview', path: '/mentoring' },
    { title: 'Career Advice', path: '/mentoring' },
  ];

  return (
    <div className="dashboard-container">
      {/* rest of the code... */}
      <div className="welcome">
        <span>Welcome, User!</span>
        <p>What would you love to do?</p>
      </div>
      <div className="card-container">
        {cardInfo.map((card, index) => (
          <Card key={index} className="dashboard-card">
            <CardContent>
              <h2>{card.title}</h2>
              <Button variant="contained" color="primary" onClick={() => handleButtonClick(card.path)}>
                Go to {card.title}
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
      <Dialog open={open} onClose={handleClose}>
        <MentoringOpportunityForm />
        <Button type="submit" className="submit-button" onClick={handleClose}>Save</Button>
      </Dialog>
    </div>
  );
};

export default Dashboard;
