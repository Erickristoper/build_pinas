package com.buildpinas.materials.controllers;

import com.buildpinas.materials.models.Material;
import com.buildpinas.materials.repositories.MaterialsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("api/v1/materials")
public class MaterialController {

    @Autowired
    MaterialsRepository materialRepo;
    @GetMapping("/{id}")
    public Material getMaterial(@PathVariable Long id){
        Material x = materialRepo.findById(id).get();
        System.out.println("xxxdd : " + x.toString());
        return x;
    }

}
