import React from 'react';
import './MaterialComponent.css';

const MaterialComponent = ({ material }) => {
  return (
    <div className="material">
      <p><strong>Name:</strong> {material.name}</p>
      <p><strong>Cost:</strong> ${material.cost}</p>
      <p><strong>Quantity:</strong> {material.quantity}</p>
      <p><strong>Unit:</strong> {material.unitOfMeasurement}</p>
    </div>
  );
};

export default MaterialComponent;