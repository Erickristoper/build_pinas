package com.buildpinas.projects.controllers;

import com.buildpinas.projects.models.Project;
import com.buildpinas.projects.repositories.ProjectRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("api/v1/projects")
public class ProjectController {

    @Autowired
    ProjectRepository projectRepo;

    @GetMapping()
    public List<Project> getProjects() {
        return projectRepo.findAll();
    }

    @GetMapping("/{id}")
    public Project getProject(@PathVariable Long id) {
        return projectRepo.findById(id).orElseThrow();
    }
}
