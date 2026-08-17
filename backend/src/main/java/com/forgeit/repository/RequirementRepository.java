package com.forgeit.repository;

import com.forgeit.entity.Requirement;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface RequirementRepository extends JpaRepository<Requirement, Long> {
    List<Requirement> findByProjectId(Long projectId);
    List<Requirement> findByProjectIdAndIsCore(Long projectId, Boolean isCore);
}
