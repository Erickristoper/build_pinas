package com.buildpinas.materials.repositories;

import com.buildpinas.materials.models.Material;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MaterialsRepository extends JpaRepository<Material, Long> {
}
