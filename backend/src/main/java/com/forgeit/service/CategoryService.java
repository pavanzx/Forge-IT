package com.forgeit.service;

import com.forgeit.entity.Category;
import com.forgeit.repository.CategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

@Service
public class CategoryService {
    @Autowired
    private CategoryRepository categoryRepository;

    public Category createCategory(Category category) {
        return categoryRepository.save(category);
    }

    public Optional<Category> getCategoryById(Long id) {
        return categoryRepository.findById(id);
    }

    public Optional<Category> getCategoryByName(String name) {
        return categoryRepository.findByName(name);
    }

    public List<Category> getAllCategories() {
        return categoryRepository.findAll();
    }

    public Category updateCategory(Long id, Category category) {
        return categoryRepository.findById(id).map(existingCategory -> {
            existingCategory.setName(category.getName());
            existingCategory.setDescription(category.getDescription());
            existingCategory.setIcon(category.getIcon());
            existingCategory.setCount(category.getCount());
            return categoryRepository.save(existingCategory);
        }).orElse(null);
    }

    public void deleteCategory(Long id) {
        categoryRepository.deleteById(id);
    }

    public void incrementCategoryCount(Long categoryId) {
        categoryRepository.findById(categoryId).ifPresent(category -> {
            category.setCount(category.getCount() + 1);
            categoryRepository.save(category);
        });
    }
}
