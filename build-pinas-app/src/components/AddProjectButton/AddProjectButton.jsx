import React from 'react';
import './AddProjectButton.css';

const AddProjectButton = ({ onClick }) => {
  return (
    <button className="add-project-button" onClick={onClick}>
      Add Project
    </button>
  );
};

export default AddProjectButton;