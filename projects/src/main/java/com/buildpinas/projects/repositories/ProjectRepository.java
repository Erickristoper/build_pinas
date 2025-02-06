package com.buildpinas.projects.repositories;

import com.buildpinas.projects.models.Project;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProjectRepository extends JpaRepository<Project, Long> {
    List<Project> findByProjectOwner(Long projectOwner);
}
