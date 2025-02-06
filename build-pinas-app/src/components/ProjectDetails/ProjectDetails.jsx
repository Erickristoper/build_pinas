import React, { useState } from 'react';
import './ProjectDetails.css';

const ProjectDetails = ({ project }) => {
  const [name, setName] = useState(project.name || '');
  const [location, setLocation] = useState(project?.location || '');
  const [description, setDescription] = useState(project?.description || '');

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