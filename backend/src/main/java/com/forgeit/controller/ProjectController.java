package com.forgeit.controller;

import com.forgeit.dto.ProjectDTO;
import com.forgeit.entity.Project;
import com.forgeit.entity.User;
import com.forgeit.exception.ResourceNotFoundException;
import com.forgeit.exception.ValidationException;
import com.forgeit.service.ProjectService;
import com.forgeit.service.UserService;
import com.forgeit.service.TaskService;
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
@RequestMapping("/api/projects")
@CrossOrigin(origins = "*")
public class ProjectController {

    @Autowired
    private ProjectService projectService;

    @Autowired
    private UserService userService;

    @Autowired
    private TaskService taskService;

    @PostMapping
    public ResponseEntity<?> createProject(@Valid @RequestBody Project project) {
        if (project.getName() == null || project.getName().isEmpty()) {
            throw new ValidationException("Project name cannot be empty");
        }
        if (project.getIdea() == null || project.getIdea().isEmpty()) {
            throw new ValidationException("Project idea cannot be empty");
        }
        Project createdProject = projectService.createProject(project);
        return new ResponseEntity<>(convertToDTO(createdProject), HttpStatus.CREATED);
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getProjectById(@PathVariable Long id) {
        Project project = projectService.getProjectById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Project not found with id: " + id));
        return new ResponseEntity<>(convertToDTO(project), HttpStatus.OK);
    }

    @GetMapping("/owner/{ownerId}")
    public ResponseEntity<?> getProjectsByOwner(@PathVariable Long ownerId) {
        List<Project> projects = projectService.getProjectsByOwner(ownerId);
        List<ProjectDTO> projectDTOs = projects.stream().map(this::convertToDTO).collect(Collectors.toList());
        return new ResponseEntity<>(projectDTOs, HttpStatus.OK);
    }

    @GetMapping
    public ResponseEntity<?> getAllProjects() {
        List<Project> projects = projectService.getAllProjects();
        List<ProjectDTO> projectDTOs = projects.stream().map(this::convertToDTO).collect(Collectors.toList());
        return new ResponseEntity<>(projectDTOs, HttpStatus.OK);
    }

    @PutMapping("/{id}")
    public ResponseEntity<?> updateProject(@PathVariable Long id, @Valid @RequestBody Project project) {
        Project updatedProject = projectService.updateProject(id, project);
        if (updatedProject == null) {
            throw new ResourceNotFoundException("Project not found with id: " + id);
        }
        return new ResponseEntity<>(convertToDTO(updatedProject), HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteProject(@PathVariable Long id) {
        projectService.deleteProject(id);
        Map<String, String> response = new HashMap<>();
        response.put("message", "Project deleted successfully");
        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    @GetMapping("/{projectId}/progress")
    public ResponseEntity<?> getProjectProgress(@PathVariable Long projectId) {
        Project project = projectService.getProjectById(projectId)
                .orElseThrow(() -> new ResourceNotFoundException("Project not found with id: " + projectId));
        
        long totalTasks = taskService.getTotalTasksCount(projectId);
        long completedTasks = taskService.getCompletedTasksCount(projectId);
        double progressPercentage = totalTasks > 0 ? (double) completedTasks / totalTasks * 100 : 0;

        Map<String, Object> progress = new HashMap<>();
        progress.put("projectId", projectId);
        progress.put("projectName", project.getName());
        progress.put("totalTasks", totalTasks);
        progress.put("completedTasks", completedTasks);
        progress.put("progressPercentage", progressPercentage);

        return new ResponseEntity<>(progress, HttpStatus.OK);
    }

    private ProjectDTO convertToDTO(Project project) {
        ProjectDTO dto = new ProjectDTO();
        dto.setId(project.getId());
        dto.setName(project.getName());
        dto.setIdea(project.getIdea());
        dto.setTargetAudience(project.getTargetAudience());
        dto.setProblemSolved(project.getProblemSolved());
        dto.setPlatform(project.getPlatform());
        dto.setExperience(project.getExperience());
        dto.setPreferredTech(project.getPreferredTech());
        dto.setBudget(project.getBudget());
        dto.setTimeline(project.getTimeline());
        dto.setComplexityScore(project.getComplexityScore());
        dto.setEstimatedCost(project.getEstimatedCost());
        dto.setEstimatedTime(project.getEstimatedTime());
        dto.setCreatedDate(project.getCreatedDate());
        dto.setUpdatedDate(project.getUpdatedDate());
        dto.setPrimaryStack(project.getPrimaryStack());
        if (project.getOwner() != null) {
            dto.setOwnerId(project.getOwner().getId());
        }
        return dto;
    }
}
