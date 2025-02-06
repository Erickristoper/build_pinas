import axios from 'axios';

const API_BASE_URL = 'http://localhost:9091/api/v1';

const API_BASE_URL_MATERIAL = 'http://localhost:9090/api/v1';

export const fetchProjects = async (userId) => {
  const response = await axios.get(`${API_BASE_URL}/projects/of/${userId}`);
  return response.data;
};

export const fetchProjectMaterials = async (projectId) => {
  const response = await axios.get(`${API_BASE_URL}/project_material/${projectId}`);
  return response.data;
};

export const fetchMaterials = async () => {
  const response = await axios.get(`${API_BASE_URL_MATERIAL}/materials`);
  return response.data;
}

export const fetchWorks = async () => {
  const response = await axios.get(`${API_BASE_URL_MATERIAL}/works`);
  return response.data;
}

export const fetchSuppliers = async () => {
  const response = await axios.get(`${API_BASE_URL_MATERIAL}/suppliers`);
  return response.data;
}