package com.forgeit.entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "projects")
public class Project {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank(message = "Project name cannot be blank")
    @Column(nullable = false)
    private String name;

    @NotBlank(message = "Project idea cannot be blank")
    @Column(columnDefinition = "TEXT")
    private String idea;

    private String targetAudience;

    @Column(columnDefinition = "TEXT")
    private String problemSolved;

    private String platform; // Web Application, Mobile App, Desktop, etc.

    private String experience; // Beginner, Intermediate, Advanced

    private String preferredTech;

    private String budget;

    private String timeline;

    private Double complexityScore;

    private String estimatedCost;

    private String estimatedTime;

    private LocalDateTime createdDate;

    private LocalDateTime updatedDate;

    @Column(columnDefinition = "TEXT")
    private String primaryStack;

    @OneToMany(mappedBy = "project", cascade = CascadeType.ALL, orphanRemoval = true, fetch = FetchType.LAZY)
    private List<Requirement> requirements = new ArrayList<>();

    @OneToMany(mappedBy = "project", cascade = CascadeType.ALL, orphanRemoval = true, fetch = FetchType.LAZY)
    private List<Task> tasks = new ArrayList<>();

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User owner;

    public Project() {
        this.createdDate = LocalDateTime.now();
        this.updatedDate = LocalDateTime.now();
    }

    public Project(String name, String idea, User owner) {
        this();
        this.name = name;
        this.idea = idea;
        this.owner = owner;
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

    public List<Requirement> getRequirements() {
        return requirements;
    }

    public void setRequirements(List<Requirement> requirements) {
        this.requirements = requirements;
    }

    public List<Task> getTasks() {
        return tasks;
    }

    public void setTasks(List<Task> tasks) {
        this.tasks = tasks;
    }

    public User getOwner() {
        return owner;
    }

    public void setOwner(User owner) {
        this.owner = owner;
    }
}
