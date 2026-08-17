package com.forgeit.service;

import com.forgeit.entity.Project;
import com.forgeit.entity.User;
import com.forgeit.repository.ProjectRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service
public class ProjectService {
    @Autowired
    private ProjectRepository projectRepository;

    @Autowired
    private UserService userService;

    public Project createProject(Project project) {
        project.setCreatedDate(LocalDateTime.now());
        project.setUpdatedDate(LocalDateTime.now());
        return projectRepository.save(project);
    }

    public Optional<Project> getProjectById(Long id) {
        return projectRepository.findById(id);
    }

    public List<Project> getProjectsByOwner(Long ownerId) {
        return projectRepository.findByOwnerId(ownerId);
    }

    public List<Project> getAllProjects() {
        return projectRepository.findAll();
    }

    public Project updateProject(Long id, Project project) {
        return projectRepository.findById(id).map(existingProject -> {
            existingProject.setName(project.getName());
            existingProject.setIdea(project.getIdea());
            existingProject.setTargetAudience(project.getTargetAudience());
            existingProject.setProblemSolved(project.getProblemSolved());
            existingProject.setPlatform(project.getPlatform());
            existingProject.setExperience(project.getExperience());
            existingProject.setPreferredTech(project.getPreferredTech());
            existingProject.setBudget(project.getBudget());
            existingProject.setTimeline(project.getTimeline());
            existingProject.setComplexityScore(project.getComplexityScore());
            existingProject.setEstimatedCost(project.getEstimatedCost());
            existingProject.setEstimatedTime(project.getEstimatedTime());
            existingProject.setPrimaryStack(project.getPrimaryStack());
            existingProject.setUpdatedDate(LocalDateTime.now());
            return projectRepository.save(existingProject);
        }).orElse(null);
    }

    public void deleteProject(Long id) {
        projectRepository.deleteById(id);
    }

    public long getTotalProjects() {
        return projectRepository.count();
    }
}
