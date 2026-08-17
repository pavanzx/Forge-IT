package com.forgeit.service;

import com.forgeit.entity.User;
import com.forgeit.repository.UserRepository;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.BeforeEach;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

public class UserServiceTest {

    @Mock
    private UserRepository userRepository;

    @InjectMocks
    private UserService userService;

    @BeforeEach
    public void setUp() {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    public void testCreateUser() {
        User user = new User("john_doe", "john@example.com", "password123");
        when(userRepository.save(user)).thenReturn(user);

        User createdUser = userService.createUser(user);

        assertNotNull(createdUser);
        assertEquals("john_doe", createdUser.getUsername());
        assertEquals("john@example.com", createdUser.getEmail());
        verify(userRepository, times(1)).save(user);
    }

    @Test
    public void testGetUserById() {
        User user = new User("jane_doe", "jane@example.com", "password456");
        user.setId(1L);
        when(userRepository.findById(1L)).thenReturn(Optional.of(user));

        Optional<User> foundUser = userService.getUserById(1L);

        assertTrue(foundUser.isPresent());
        assertEquals("jane_doe", foundUser.get().getUsername());
        verify(userRepository, times(1)).findById(1L);
    }

    @Test
    public void testGetUserByUsername() {
        User user = new User("test_user", "test@example.com", "password789");
        when(userRepository.findByUsername("test_user")).thenReturn(Optional.of(user));

        Optional<User> foundUser = userService.getUserByUsername("test_user");

        assertTrue(foundUser.isPresent());
        assertEquals("test_user", foundUser.get().getUsername());
        verify(userRepository, times(1)).findByUsername("test_user");
    }

    @Test
    public void testExistsByUsername() {
        when(userRepository.existsByUsername("john_doe")).thenReturn(true);

        boolean exists = userService.existsByUsername("john_doe");

        assertTrue(exists);
        verify(userRepository, times(1)).existsByUsername("john_doe");
    }

    @Test
    public void testDeleteUser() {
        userService.deleteUser(1L);
        verify(userRepository, times(1)).deleteById(1L);
    }
}
