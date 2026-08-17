package com.forgeit.controller;

import com.forgeit.dto.RequirementDTO;
import com.forgeit.entity.Requirement;
import com.forgeit.exception.ResourceNotFoundException;
import com.forgeit.exception.ValidationException;
import com.forgeit.service.RequirementService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/requirements")
@CrossOrigin(origins = "*")
public class RequirementController {

    @Autowired
    private RequirementService requirementService;

    @PostMapping
    public ResponseEntity<?> createRequirement(@Valid @RequestBody Requirement requirement) {
        if (requirement.getTitle() == null || requirement.getTitle().isEmpty()) {
            throw new ValidationException("Requirement title cannot be empty");
        }
        Requirement createdRequirement = requirementService.createRequirement(requirement);
        return new ResponseEntity<>(convertToDTO(createdRequirement), HttpStatus.CREATED);
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getRequirementById(@PathVariable Long id) {
        Requirement requirement = requirementService.getRequirementById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Requirement not found with id: " + id));
        return new ResponseEntity<>(convertToDTO(requirement), HttpStatus.OK);
    }

    @GetMapping("/project/{projectId}")
    public ResponseEntity<?> getRequirementsByProject(@PathVariable Long projectId) {
        List<Requirement> requirements = requirementService.getRequirementsByProject(projectId);
        List<RequirementDTO> requirementDTOs = requirements.stream().map(this::convertToDTO).collect(Collectors.toList());
        return new ResponseEntity<>(requirementDTOs, HttpStatus.OK);
    }

    @GetMapping("/project/{projectId}/core")
    public ResponseEntity<?> getCoreRequirements(@PathVariable Long projectId) {
        List<Requirement> requirements = requirementService.getCoreRequirements(projectId);
        List<RequirementDTO> requirementDTOs = requirements.stream().map(this::convertToDTO).collect(Collectors.toList());
        return new ResponseEntity<>(requirementDTOs, HttpStatus.OK);
    }

    @GetMapping("/project/{projectId}/optional")
    public ResponseEntity<?> getOptionalRequirements(@PathVariable Long projectId) {
        List<Requirement> requirements = requirementService.getOptionalRequirements(projectId);
        List<RequirementDTO> requirementDTOs = requirements.stream().map(this::convertToDTO).collect(Collectors.toList());
        return new ResponseEntity<>(requirementDTOs, HttpStatus.OK);
    }

    @GetMapping
    public ResponseEntity<?> getAllRequirements() {
        List<Requirement> requirements = requirementService.getAllRequirements();
        List<RequirementDTO> requirementDTOs = requirements.stream().map(this::convertToDTO).collect(Collectors.toList());
        return new ResponseEntity<>(requirementDTOs, HttpStatus.OK);
    }

    @PutMapping("/{id}")
    public ResponseEntity<?> updateRequirement(@PathVariable Long id, @Valid @RequestBody Requirement requirement) {
        Requirement updatedRequirement = requirementService.updateRequirement(id, requirement);
        if (updatedRequirement == null) {
            throw new ResourceNotFoundException("Requirement not found with id: " + id);
        }
        return new ResponseEntity<>(convertToDTO(updatedRequirement), HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteRequirement(@PathVariable Long id) {
        requirementService.deleteRequirement(id);
        Map<String, String> response = new HashMap<>();
        response.put("message", "Requirement deleted successfully");
        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    private RequirementDTO convertToDTO(Requirement requirement) {
        RequirementDTO dto = new RequirementDTO();
        dto.setId(requirement.getId());
        dto.setTitle(requirement.getTitle());
        dto.setDescription(requirement.getDescription());
        dto.setPriority(requirement.getPriority().toString());
        dto.setCategory(requirement.getCategory());
        dto.setIsCore(requirement.getIsCore());
        if (requirement.getProject() != null) {
            dto.setProjectId(requirement.getProject().getId());
        }
        return dto;
    }
}
