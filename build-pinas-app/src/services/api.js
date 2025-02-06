import axios from 'axios';

const API_BASE_URL = 'http://localhost:9091/api/v1';

export const fetchProjects = async (userId) => {
  const response = await axios.get(`${API_BASE_URL}/projects/of/${userId}`);
  return response.data;
};

export const fetchProjectMaterials = async (projectId) => {
  const response = await axios.get(`${API_BASE_URL}/project_material/${projectId}`);
  return response.data;
};