import React, { useState, useEffect } from 'react';
import { getProjects, getMaterials } from './services/projectService';
import ProjectList from './components/ProjectList/ProjectList';
import AddProjectButton from './components/AddProjectButton/AddProjectButton';
import ProjectDetails from './components/ProjectDetails/ProjectDetails';
import MaterialTable from './components/MaterialTable/MaterialTable';
import './App.css';

const App = () => {
  const [userId] = useState(202); // Hardcoded for now
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);
  const [materials, setMaterials] = useState([]);

  useEffect(() => {
    const loadProjects = async () => {
      const data = await getProjects(userId);
      setProjects(data);
    };
    loadProjects();
  }, [userId]);

  useEffect(() => {
    if (selectedProject) {
      const loadMaterials = async () => {
        const data = await getMaterials(selectedProject);
        setMaterials(data);
      };
      loadMaterials();
    }
  }, [selectedProject]);

  const handleAddProject = () => {
    // Add logic to create a new project
    console.log('Add Project clicked');
  };

  return (
    <div className="app">
      <div className="left-panel">
        <AddProjectButton onClick={handleAddProject} />
        <ProjectList projects={projects} onSelectProject={setSelectedProject} />
      </div>
      <div className="right-panel">
        <ProjectDetails project={projects.find((p) => p.id === selectedProject)} />
        <MaterialTable materials={materials} />
      </div>
    </div>
  );
};

export default App;