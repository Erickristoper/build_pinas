import { fetchProjects, fetchProjectMaterials, fetchMaterials, fetchWorks } from './api';

export const getProjects = async (userId) => {
  return await fetchProjects(userId);
};

export const getMaterials = async () => {
  console.log('once')
  return await fetchMaterials();
};

export const getWorks = async () => {
  console.log('once work')
  return await fetchWorks();
};

const materials = await getMaterials();
const allWorks = await getWorks();

export const getProjectMaterials = async (projectId) => {
  console.log('projectID: ' + projectId);
  
  const projectMaterials = await fetchProjectMaterials(projectId);

  const materialsMap = new Map();
  materials.forEach((material) => {
    materialsMap.set(material.id, material);
  });
  
  const worksMap = new Map();
  allWorks.forEach((work) => {
    worksMap.set(work.id, work.name);
  });


  const enrichedProjectMaterials = projectMaterials.map((projectMaterial) => {
    const material = materialsMap.get(projectMaterial.materialId);
    const workName = worksMap.get(projectMaterial.workId);
    
    return {
      ...projectMaterial,
      name: material ? material.name : 'Unknown',
      workName: workName,
      unitOfMeasurement: material ? material.unitOfMeasurement : 'N/A',
    };
  });

  return enrichedProjectMaterials;
};

export const getMaterialsGroupedByWork = async (projectId) => {
  const materials = await getProjectMaterials(projectId);
  
  // Group materials by workId
  const groupedMaterials = materials.reduce((acc, material) => {
    const { workName } = material;
    if (!acc[workName]) {
      acc[workName] = [];
    }
    acc[workName].push(material);
    return acc;
  }, {});
  

  // Convert grouped materials into an array of works
  const works = Object.keys(groupedMaterials).map((workId) => ({
    id: workId,
    name: groupedMaterials[workId][0].workName , // You can customize the work name
    materials: groupedMaterials[workId],
  }));

  return works;
};