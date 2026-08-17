package com.forgeit.controller;

import com.forgeit.dto.TaskDTO;
import com.forgeit.entity.Task;
import com.forgeit.exception.ResourceNotFoundException;
import com.forgeit.exception.ValidationException;
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
@RequestMapping("/api/tasks")
@CrossOrigin(origins = "*")
public class TaskController {

    @Autowired
    private TaskService taskService;

    @PostMapping
    public ResponseEntity<?> createTask(@Valid @RequestBody Task task) {
        if (task.getTitle() == null || task.getTitle().isEmpty()) {
            throw new ValidationException("Task title cannot be empty");
        }
        Task createdTask = taskService.createTask(task);
        return new ResponseEntity<>(convertToDTO(createdTask), HttpStatus.CREATED);
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getTaskById(@PathVariable Long id) {
        Task task = taskService.getTaskById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Task not found with id: " + id));
        return new ResponseEntity<>(convertToDTO(task), HttpStatus.OK);
    }

    @GetMapping("/project/{projectId}")
    public ResponseEntity<?> getTasksByProject(@PathVariable Long projectId) {
        List<Task> tasks = taskService.getTasksByProject(projectId);
        List<TaskDTO> taskDTOs = tasks.stream().map(this::convertToDTO).collect(Collectors.toList());
        return new ResponseEntity<>(taskDTOs, HttpStatus.OK);
    }

    @GetMapping("/project/{projectId}/completed/{done}")
    public ResponseEntity<?> getTasksByProjectAndStatus(@PathVariable Long projectId, @PathVariable Boolean done) {
        List<Task> tasks = taskService.getTasksByProjectAndStatus(projectId, done);
        List<TaskDTO> taskDTOs = tasks.stream().map(this::convertToDTO).collect(Collectors.toList());
        return new ResponseEntity<>(taskDTOs, HttpStatus.OK);
    }

    @GetMapping
    public ResponseEntity<?> getAllTasks() {
        List<Task> tasks = taskService.getAllTasks();
        List<TaskDTO> taskDTOs = tasks.stream().map(this::convertToDTO).collect(Collectors.toList());
        return new ResponseEntity<>(taskDTOs, HttpStatus.OK);
    }

    @PutMapping("/{id}")
    public ResponseEntity<?> updateTask(@PathVariable Long id, @Valid @RequestBody Task task) {
        Task updatedTask = taskService.updateTask(id, task);
        if (updatedTask == null) {
            throw new ResourceNotFoundException("Task not found with id: " + id);
        }
        return new ResponseEntity<>(convertToDTO(updatedTask), HttpStatus.OK);
    }

    @PatchMapping("/{id}/status")
    public ResponseEntity<?> updateTaskStatus(@PathVariable Long id, @RequestBody Map<String, Boolean> statusUpdate) {
        Task task = taskService.getTaskById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Task not found with id: " + id));
        task.setDone(statusUpdate.get("done"));
        Task updatedTask = taskService.updateTask(id, task);
        return new ResponseEntity<>(convertToDTO(updatedTask), HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteTask(@PathVariable Long id) {
        taskService.deleteTask(id);
        Map<String, String> response = new HashMap<>();
        response.put("message", "Task deleted successfully");
        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    private TaskDTO convertToDTO(Task task) {
        TaskDTO dto = new TaskDTO();
        dto.setId(task.getId());
        dto.setTitle(task.getTitle());
        dto.setDescription(task.getDescription());
        dto.setPhase(task.getPhase());
        dto.setDone(task.getDone());
        dto.setDifficulty(task.getDifficulty());
        dto.setEstimatedTime(task.getEstimatedTime());
        dto.setDependencies(task.getDependencies());
        dto.setTools(task.getTools());
        if (task.getProject() != null) {
            dto.setProjectId(task.getProject().getId());
        }
        return dto;
    }
}
