package com.buildpinas.materials.models;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class ProjectMaterials {

    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private Long id;
    private Long projectId;
    private Long workId;
    private Long materialId;
    private Double quantity;
    private Double cost;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getProjectId() {
        return projectId;
    }

    public void setProjectId(Long projectId) {
        this.projectId = projectId;
    }

    public Long getWorkId() {
        return workId;
    }

    public void setWorkId(Long workId) {
        this.workId = workId;
    }

    public Long getMaterialId() {
        return materialId;
    }

    public void setMaterialId(Long materialId) {
        this.materialId = materialId;
    }

    public Double getQuantity() {
        return quantity;
    }

    public void setQuantity(Double quantity) {
        this.quantity = quantity;
    }

    public Double getCost() {
        return cost;
    }

    public void setCost(Double cost) {
        this.cost = cost;
    }

    public ProjectMaterials() {
    }

    public ProjectMaterials(Long id, Long projectId, Long workId, Long materialId, Double quantity, Double cost) {
        this.id = id;
        this.projectId = projectId;
        this.workId = workId;
        this.materialId = materialId;
        this.quantity = quantity;
        this.cost = cost;
    }
}
