package com.forgeit.service;

import com.forgeit.entity.Requirement;
import com.forgeit.repository.RequirementRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

@Service
public class RequirementService {
    @Autowired
    private RequirementRepository requirementRepository;

    public Requirement createRequirement(Requirement requirement) {
        return requirementRepository.save(requirement);
    }

    public Optional<Requirement> getRequirementById(Long id) {
        return requirementRepository.findById(id);
    }

    public List<Requirement> getRequirementsByProject(Long projectId) {
        return requirementRepository.findByProjectId(projectId);
    }

    public List<Requirement> getCoreRequirements(Long projectId) {
        return requirementRepository.findByProjectIdAndIsCore(projectId, true);
    }

    public List<Requirement> getOptionalRequirements(Long projectId) {
        return requirementRepository.findByProjectIdAndIsCore(projectId, false);
    }

    public List<Requirement> getAllRequirements() {
        return requirementRepository.findAll();
    }

    public Requirement updateRequirement(Long id, Requirement requirement) {
        return requirementRepository.findById(id).map(existingReq -> {
            existingReq.setTitle(requirement.getTitle());
            existingReq.setDescription(requirement.getDescription());
            existingReq.setPriority(requirement.getPriority());
            existingReq.setCategory(requirement.getCategory());
            existingReq.setIsCore(requirement.getIsCore());
            return requirementRepository.save(existingReq);
        }).orElse(null);
    }

    public void deleteRequirement(Long id) {
        requirementRepository.deleteById(id);
    }
}
