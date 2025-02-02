package com.buildpinas.projects.controllers;

import com.buildpinas.projects.models.ProjectMaterial;
import com.buildpinas.projects.repositories.ProjectMaterialRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("api/v1/project_material")
public class ProjectMaterialController {

    @Autowired
    private ProjectMaterialRepository pmRepo;

    @GetMapping("/{projectId}")
    public List<ProjectMaterial> getProjectMaterial(@PathVariable Long projectId) {
        return pmRepo.findByProjectId(projectId);
    }

}
