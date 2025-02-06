import React, { useState, useEffect } from 'react';
import './ProjectDetails.css';

const ProjectDetails = ({ project }) => {
  // Initialize state with default values
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [description, setDescription] = useState('');

  // Update state when the `project` prop changes
  useEffect(() => {
    if (project) {
      setName(project.name || '');
      setLocation(project.location || '');
      setDescription(project.description || '');
    }
  }, [project]);
  return (
    <div className="project-details">
      <h3>Project Details</h3>
      <input
        type="text"
        placeholder="Project Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
    </div>
  );
};

export default ProjectDetails;