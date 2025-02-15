package com.buildpinas.materials.controllers;

import com.buildpinas.materials.models.Material;
import com.buildpinas.materials.repositories.MaterialsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("api/v1/materials")
public class MaterialController {

    @Autowired
    MaterialsRepository materialRepo;

    @GetMapping
    public List<Material> getMaterials(){

        System.out.println("testing");
        return materialRepo.findAll();
    }
    @GetMapping("/{id}")
    public Material getMaterial(@PathVariable Long id){
        return materialRepo.findById(id).orElseThrow();
    }

}
