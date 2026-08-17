package com.forgeit.service;

import com.forgeit.entity.Task;
import com.forgeit.repository.TaskRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

@Service
public class TaskService {
    @Autowired
    private TaskRepository taskRepository;

    public Task createTask(Task task) {
        return taskRepository.save(task);
    }

    public Optional<Task> getTaskById(Long id) {
        return taskRepository.findById(id);
    }

    public List<Task> getTasksByProject(Long projectId) {
        return taskRepository.findByProjectId(projectId);
    }

    public List<Task> getTasksByProjectAndStatus(Long projectId, Boolean done) {
        return taskRepository.findByProjectIdAndDone(projectId, done);
    }

    public List<Task> getAllTasks() {
        return taskRepository.findAll();
    }

    public Task updateTask(Long id, Task task) {
        return taskRepository.findById(id).map(existingTask -> {
            existingTask.setTitle(task.getTitle());
            existingTask.setDescription(task.getDescription());
            existingTask.setPhase(task.getPhase());
            existingTask.setDone(task.getDone());
            existingTask.setDifficulty(task.getDifficulty());
            existingTask.setEstimatedTime(task.getEstimatedTime());
            existingTask.setDependencies(task.getDependencies());
            existingTask.setTools(task.getTools());
            return taskRepository.save(existingTask);
        }).orElse(null);
    }

    public void deleteTask(Long id) {
        taskRepository.deleteById(id);
    }

    public long getCompletedTasksCount(Long projectId) {
        return getTasksByProjectAndStatus(projectId, true).size();
    }

    public long getTotalTasksCount(Long projectId) {
        return getTasksByProject(projectId).size();
    }
}
