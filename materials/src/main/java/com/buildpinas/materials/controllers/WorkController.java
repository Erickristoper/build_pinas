package com.buildpinas.materials.controllers;

import com.buildpinas.materials.models.Work;
import com.buildpinas.materials.repositories.WorkRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/v1/works")
public class WorkController {

    @Autowired
    WorkRepository workRepo;

    @GetMapping
    public List<Work> getWorks(){
        return workRepo.findAll();
    }
}
