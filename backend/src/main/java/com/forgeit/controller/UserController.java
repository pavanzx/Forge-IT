package com.forgeit.controller;

import com.forgeit.dto.UserDTO;
import com.forgeit.entity.User;
import com.forgeit.exception.ValidationException;
import com.forgeit.service.UserService;
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
@RequestMapping("/api/users")
@CrossOrigin(origins = "*")
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping
    public ResponseEntity<?> createUser(@Valid @RequestBody User user) {
        if (userService.existsByUsername(user.getUsername())) {
            throw new ValidationException("Username already exists");
        }
        if (userService.existsByEmail(user.getEmail())) {
            throw new ValidationException("Email already exists");
        }
        User createdUser = userService.createUser(user);
        return new ResponseEntity<>(convertToDTO(createdUser), HttpStatus.CREATED);
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getUserById(@PathVariable Long id) {
        User user = userService.getUserById(id)
                .orElseThrow(() -> new RuntimeException("User not found with id: " + id));
        return new ResponseEntity<>(convertToDTO(user), HttpStatus.OK);
    }

    @GetMapping("/username/{username}")
    public ResponseEntity<?> getUserByUsername(@PathVariable String username) {
        User user = userService.getUserByUsername(username)
                .orElseThrow(() -> new RuntimeException("User not found with username: " + username));
        return new ResponseEntity<>(convertToDTO(user), HttpStatus.OK);
    }

    @GetMapping
    public ResponseEntity<?> getAllUsers() {
        List<User> users = userService.getAllUsers();
        List<UserDTO> userDTOs = users.stream().map(this::convertToDTO).collect(Collectors.toList());
        return new ResponseEntity<>(userDTOs, HttpStatus.OK);
    }

    @PutMapping("/{id}")
    public ResponseEntity<?> updateUser(@PathVariable Long id, @Valid @RequestBody User user) {
        User updatedUser = userService.updateUser(id, user);
        if (updatedUser == null) {
            throw new RuntimeException("User not found with id: " + id);
        }
        return new ResponseEntity<>(convertToDTO(updatedUser), HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteUser(@PathVariable Long id) {
        userService.deleteUser(id);
        Map<String, String> response = new HashMap<>();
        response.put("message", "User deleted successfully");
        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    private UserDTO convertToDTO(User user) {
        UserDTO dto = new UserDTO();
        dto.setId(user.getId());
        dto.setUsername(user.getUsername());
        dto.setEmail(user.getEmail());
        dto.setFullName(user.getFullName());
        dto.setRole(user.getRole().toString());
        dto.setAvatar(user.getAvatar());
        dto.setXpLevel(user.getXpLevel());
        dto.setPoints(user.getPoints());
        return dto;
    }
}
