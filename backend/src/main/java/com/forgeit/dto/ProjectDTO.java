package com.forgeit.dto;

import java.time.LocalDateTime;
import java.util.List;

public class ProjectDTO {
    private Long id;
    private String name;
    private String idea;
    private String targetAudience;
    private String problemSolved;
    private String platform;
    private String experience;
    private String preferredTech;
    private String budget;
    private String timeline;
    private Double complexityScore;
    private String estimatedCost;
    private String estimatedTime;
    private LocalDateTime createdDate;
    private LocalDateTime updatedDate;
    private String primaryStack;
    private Long ownerId;
    private List<RequirementDTO> requirements;
    private List<TaskDTO> tasks;

    public ProjectDTO() {}

    public ProjectDTO(Long id, String name, String idea) {
        this.id = id;
        this.name = name;
        this.idea = idea;
    }

    // Getters and Setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getIdea() {
        return idea;
    }

    public void setIdea(String idea) {
        this.idea = idea;
    }

    public String getTargetAudience() {
        return targetAudience;
    }

    public void setTargetAudience(String targetAudience) {
        this.targetAudience = targetAudience;
    }

    public String getProblemSolved() {
        return problemSolved;
    }

    public void setProblemSolved(String problemSolved) {
        this.problemSolved = problemSolved;
    }

    public String getPlatform() {
        return platform;
    }

    public void setPlatform(String platform) {
        this.platform = platform;
    }

    public String getExperience() {
        return experience;
    }

    public void setExperience(String experience) {
        this.experience = experience;
    }

    public String getPreferredTech() {
        return preferredTech;
    }

    public void setPreferredTech(String preferredTech) {
        this.preferredTech = preferredTech;
    }

    public String getBudget() {
        return budget;
    }

    public void setBudget(String budget) {
        this.budget = budget;
    }

    public String getTimeline() {
        return timeline;
    }

    public void setTimeline(String timeline) {
        this.timeline = timeline;
    }

    public Double getComplexityScore() {
        return complexityScore;
    }

    public void setComplexityScore(Double complexityScore) {
        this.complexityScore = complexityScore;
    }

    public String getEstimatedCost() {
        return estimatedCost;
    }

    public void setEstimatedCost(String estimatedCost) {
        this.estimatedCost = estimatedCost;
    }

    public String getEstimatedTime() {
        return estimatedTime;
    }

    public void setEstimatedTime(String estimatedTime) {
        this.estimatedTime = estimatedTime;
    }

    public LocalDateTime getCreatedDate() {
        return createdDate;
    }

    public void setCreatedDate(LocalDateTime createdDate) {
        this.createdDate = createdDate;
    }

    public LocalDateTime getUpdatedDate() {
        return updatedDate;
    }

    public void setUpdatedDate(LocalDateTime updatedDate) {
        this.updatedDate = updatedDate;
    }

    public String getPrimaryStack() {
        return primaryStack;
    }

    public void setPrimaryStack(String primaryStack) {
        this.primaryStack = primaryStack;
    }

    public Long getOwnerId() {
        return ownerId;
    }

    public void setOwnerId(Long ownerId) {
        this.ownerId = ownerId;
    }

    public List<RequirementDTO> getRequirements() {
        return requirements;
    }

    public void setRequirements(List<RequirementDTO> requirements) {
        this.requirements = requirements;
    }

    public List<TaskDTO> getTasks() {
        return tasks;
    }

    public void setTasks(List<TaskDTO> tasks) {
        this.tasks = tasks;
    }
}
