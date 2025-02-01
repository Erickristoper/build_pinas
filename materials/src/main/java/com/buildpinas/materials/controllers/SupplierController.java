package com.buildpinas.materials.controllers;

import com.buildpinas.materials.models.Material;
import com.buildpinas.materials.models.Supplier;
import com.buildpinas.materials.repositories.MaterialsRepository;
import com.buildpinas.materials.repositories.SupplierRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("api/v1/suppliers")
public class SupplierController {

    @Autowired
    SupplierRepository supplierRepo;

    @GetMapping
    public List<Supplier> getSuppliers(){
        return supplierRepo.findAll();
    }

    @GetMapping("/{id}")
    public Supplier getSupplier(@PathVariable Long id){
        Supplier x = supplierRepo.findById(id).get();
        System.out.println("xxxdd : " + x.toString());
        return x;
    }

}
