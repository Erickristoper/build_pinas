import { fetchProjects, fetchProjectMaterials } from './api';

export const getProjects = async (userId) => {
  return await fetchProjects(userId);
};

export const getMaterials = async (projectId) => {
  console.log('projectID: ' + projectId)
  return await fetchProjectMaterials(projectId);
};