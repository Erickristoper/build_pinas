package com.buildpinas.projects.controllers;

import com.buildpinas.projects.models.Project;
import com.buildpinas.projects.repositories.ProjectRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/v1/projects")
public class ProjectController {

    @Autowired
    ProjectRepository projectRepo;

    @GetMapping("/of/{userId}")
    public List<Project> getProjects(@PathVariable Long userId) {
        return projectRepo.findByProjectOwner(userId);
    }


    @PostMapping
    public void saveProject(@RequestBody Project proj) {
        projectRepo.save(proj);
    }
}
