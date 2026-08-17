package com.forgeit.service;

import com.forgeit.entity.Project;
import com.forgeit.entity.User;
import com.forgeit.repository.ProjectRepository;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.BeforeEach;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import java.time.LocalDateTime;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

public class ProjectServiceTest {

    @Mock
    private ProjectRepository projectRepository;

    @InjectMocks
    private ProjectService projectService;

    @BeforeEach
    public void setUp() {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    public void testCreateProject() {
        User owner = new User("john_doe", "john@example.com", "password");
        Project project = new Project("Campus Portal", "Student complaint system", owner);
        project.setId(1L);

        when(projectRepository.save(any(Project.class))).thenReturn(project);

        Project createdProject = projectService.createProject(project);

        assertNotNull(createdProject);
        assertEquals("Campus Portal", createdProject.getName());
        verify(projectRepository, times(1)).save(any(Project.class));
    }

    @Test
    public void testGetProjectById() {
        User owner = new User("john_doe", "john@example.com", "password");
        Project project = new Project("Campus Portal", "Student complaint system", owner);
        project.setId(1L);

        when(projectRepository.findById(1L)).thenReturn(Optional.of(project));

        Optional<Project> foundProject = projectService.getProjectById(1L);

        assertTrue(foundProject.isPresent());
        assertEquals("Campus Portal", foundProject.get().getName());
        verify(projectRepository, times(1)).findById(1L);
    }

    @Test
    public void testUpdateProject() {
        User owner = new User("john_doe", "john@example.com", "password");
        Project project = new Project("Campus Portal", "Student complaint system", owner);
        project.setId(1L);

        Project updatedProject = new Project();
        updatedProject.setName("Updated Campus Portal");
        updatedProject.setIdea("Updated idea");

        when(projectRepository.findById(1L)).thenReturn(Optional.of(project));
        when(projectRepository.save(any(Project.class))).thenReturn(project);

        Project result = projectService.updateProject(1L, updatedProject);

        assertNotNull(result);
        verify(projectRepository, times(1)).findById(1L);
        verify(projectRepository, times(1)).save(any(Project.class));
    }

    @Test
    public void testDeleteProject() {
        projectService.deleteProject(1L);
        verify(projectRepository, times(1)).deleteById(1L);
    }
}
