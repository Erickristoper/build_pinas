import React from 'react';
import './MaterialTable.css';

const MaterialTable = ({ materials }) => {
  return (
    <div className="material-table">
      <h3>Materials</h3>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Quantity</th>
            <th>Unit</th>
          </tr>
        </thead>
        <tbody>
          {materials.map((material) => (
            <tr key={material.id}>
              <td>{material.name}</td>
              <td>{material.quantity}</td>
              <td>{material.unit}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MaterialTable;