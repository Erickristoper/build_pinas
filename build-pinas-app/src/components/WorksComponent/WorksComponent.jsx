import React, { useState } from 'react';
import MaterialComponent from '../MaterialComponent/MaterialComponent';
import './WorksComponent.css';

const WorksComponent = ({ works }) => {
  const [expandedWorkId, setExpandedWorkId] = useState(null);
  const toggleWork = (workId) => {
    setExpandedWorkId((prevId) => (prevId === workId ? null : workId));
  };

  return (
    <div className="works">
      {works.map((work) => (
        <div key={work.id} className="work">
          <div className="work-header" onClick={() => toggleWork(work.id)}>
            <h3>{work.name}</h3>
            <span>{expandedWorkId === work.id ? '▼' : '►'}</span>
          </div>
          {expandedWorkId === work.id && (
            <div className="materials">
              {work.materials.map((material) => (
                <MaterialComponent key={material.id} material={material} />
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default WorksComponent;