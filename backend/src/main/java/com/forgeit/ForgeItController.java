package com.forgeit;
import com.forgeit.dto.ProjectDTO;
import com.forgeit.entity.Project;
import com.forgeit.service.ProjectService;
import com.forgeit.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.*;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins="*")
public class ForgeItController {

 @Autowired
 private ProjectService projectService;

 @Autowired
 private UserService userService;

 @GetMapping("/health")
 public Map<String,Object> health(){
  return Map.of("status","UP","service","Forge-IT","version","1.0.0","mode","production");
 }

 @PostMapping("/analyze")
 public ResponseEntity<?> analyze(@RequestBody Map<String,Object> body){
  String idea = String.valueOf(body.getOrDefault("idea",""));
  String platform = String.valueOf(body.getOrDefault("platform","Web Application"));
  String experience = String.valueOf(body.getOrDefault("experience","Intermediate"));
  String preferredTech = String.valueOf(body.getOrDefault("preferredTech","Java"));

  Map<String,Object> analysis = new HashMap<>();
  analysis.put("projectType", platform);
  analysis.put("estimatedCost", "₹0 to ₹50,000");
  analysis.put("estimatedTime", "3–6 weeks");
  analysis.put("complexityScore", 7.2);
  analysis.put("stack", List.of("Java","Spring Boot","Spring Data JPA","MySQL","JavaScript","Bootstrap","Docker"));
  analysis.put("summary", "Requirements analyzed for: " + idea);
  analysis.put("techStack", Map.of(
    "backend", "Java 17, Spring Boot 3.4.5, Spring Data JPA, Hibernate",
    "database", "MySQL with H2 for development",
    "frontend", "HTML5, CSS3, Vanilla JavaScript, Bootstrap 5",
    "devops", "Docker, Docker Compose"
  ));
  analysis.put("keyPhases", List.of(
    "Planning & Requirement Analysis",
    "Database Design",
    "Backend API Development",
    "Frontend Development",
    "Integration Testing",
    "Deployment"
  ));
  return new ResponseEntity<>(analysis, HttpStatus.OK);
 }

 @GetMapping("/dashboard/stats")
 public ResponseEntity<?> getDashboardStats(){
  long totalProjects = projectService.getTotalProjects();
  long totalUsers = userService.getAllUsers().size();

  Map<String,Object> stats = new HashMap<>();
  stats.put("totalProjects", totalProjects);
  stats.put("totalUsers", totalUsers);
  stats.put("activeProjects", Math.max(totalProjects - 1, 0));
  stats.put("completedProjects", 0);
  stats.put("totalTasks", 100);
  stats.put("completedTasks", 45);

  return new ResponseEntity<>(stats, HttpStatus.OK);
 }

 @PostMapping("/projects/quick-create")
 public ResponseEntity<?> quickCreateProject(@RequestBody Map<String,Object> body){
  try {
    String name = String.valueOf(body.getOrDefault("name", "Untitled Project"));
    String idea = String.valueOf(body.getOrDefault("idea", ""));
    
    Project project = new Project();
    project.setName(name);
    project.setIdea(idea);
    project.setPlatform(String.valueOf(body.getOrDefault("platform", "Web Application")));
    project.setExperience(String.valueOf(body.getOrDefault("experience", "Intermediate")));
    project.setPreferredTech(String.valueOf(body.getOrDefault("preferredTech", "Java")));
    
    Project createdProject = projectService.createProject(project);
    return new ResponseEntity<>(convertToDTO(createdProject), HttpStatus.CREATED);
  } catch (Exception e) {
    Map<String,String> error = new HashMap<>();
    error.put("error", "Failed to create project");
    error.put("message", e.getMessage());
    return new ResponseEntity<>(error, HttpStatus.BAD_REQUEST);
  }
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
  if (project.getOwner() != null) {
    dto.setOwnerId(project.getOwner().getId());
  }
  return dto;
 }
}