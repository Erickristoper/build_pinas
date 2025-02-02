package com.buildpinas.projects.repositories;

import com.buildpinas.projects.models.ProjectMaterial;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProjectMaterialRepository extends JpaRepository<ProjectMaterial, Long> {
    List<ProjectMaterial> findByProjectId(Long projectId);
}
