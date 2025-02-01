package com.buildpinas.materials.repositories;

import com.buildpinas.materials.models.Supplier;
import com.buildpinas.materials.models.Work;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SupplierRepository extends JpaRepository<Supplier, Long> {
}
