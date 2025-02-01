package com.buildpinas.projects.repositories;

import com.buildpinas.projects.models.ProjectMaterial;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProjectMaterialRepository extends JpaRepository<ProjectMaterial, Long> {
}
