import React from 'react';
import './ProjectList.css';

const ProjectList = ({ projects, onSelectProject }) => {
  return (
    <div className="project-list">
      <h3>Projects</h3>
      <ul>
        {projects.map((project) => (
          <li key={project.id} onClick={() => onSelectProject(project.id)}>
            {project.id} - {project.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectList;