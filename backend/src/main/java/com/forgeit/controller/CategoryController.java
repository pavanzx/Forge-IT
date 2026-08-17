package com.forgeit.controller;

import com.forgeit.dto.CategoryDTO;
import com.forgeit.entity.Category;
import com.forgeit.exception.ResourceNotFoundException;
import com.forgeit.exception.ValidationException;
import com.forgeit.service.CategoryService;
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
@RequestMapping("/api/categories")
@CrossOrigin(origins = "*")
public class CategoryController {

    @Autowired
    private CategoryService categoryService;

    @PostMapping
    public ResponseEntity<?> createCategory(@Valid @RequestBody Category category) {
        if (category.getName() == null || category.getName().isEmpty()) {
            throw new ValidationException("Category name cannot be empty");
        }
        Category createdCategory = categoryService.createCategory(category);
        return new ResponseEntity<>(convertToDTO(createdCategory), HttpStatus.CREATED);
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getCategoryById(@PathVariable Long id) {
        Category category = categoryService.getCategoryById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Category not found with id: " + id));
        return new ResponseEntity<>(convertToDTO(category), HttpStatus.OK);
    }

    @GetMapping("/name/{name}")
    public ResponseEntity<?> getCategoryByName(@PathVariable String name) {
        Category category = categoryService.getCategoryByName(name)
                .orElseThrow(() -> new ResourceNotFoundException("Category not found with name: " + name));
        return new ResponseEntity<>(convertToDTO(category), HttpStatus.OK);
    }

    @GetMapping
    public ResponseEntity<?> getAllCategories() {
        List<Category> categories = categoryService.getAllCategories();
        List<CategoryDTO> categoryDTOs = categories.stream().map(this::convertToDTO).collect(Collectors.toList());
        return new ResponseEntity<>(categoryDTOs, HttpStatus.OK);
    }

    @PutMapping("/{id}")
    public ResponseEntity<?> updateCategory(@PathVariable Long id, @Valid @RequestBody Category category) {
        Category updatedCategory = categoryService.updateCategory(id, category);
        if (updatedCategory == null) {
            throw new ResourceNotFoundException("Category not found with id: " + id);
        }
        return new ResponseEntity<>(convertToDTO(updatedCategory), HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteCategory(@PathVariable Long id) {
        categoryService.deleteCategory(id);
        Map<String, String> response = new HashMap<>();
        response.put("message", "Category deleted successfully");
        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    private CategoryDTO convertToDTO(Category category) {
        CategoryDTO dto = new CategoryDTO();
        dto.setId(category.getId());
        dto.setName(category.getName());
        dto.setDescription(category.getDescription());
        dto.setIcon(category.getIcon());
        dto.setCount(category.getCount());
        return dto;
    }
}
