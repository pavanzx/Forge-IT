package com.forgeit.dto;

public class UserDTO {
    private Long id;
    private String username;
    private String email;
    private String fullName;
    private String role;
    private String avatar;
    private Integer xpLevel;
    private Integer points;

    public UserDTO() {}

    public UserDTO(Long id, String username, String email, String fullName, String role) {
        this.id = id;
        this.username = username;
        this.email = email;
        this.fullName = fullName;
        this.role = role;
    }

    // Getters and Setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getFullName() {
        return fullName;
    }

    public void setFullName(String fullName) {
        this.fullName = fullName;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }

    public String getAvatar() {
        return avatar;
    }

    public void setAvatar(String avatar) {
        this.avatar = avatar;
    }

    public Integer getXpLevel() {
        return xpLevel;
    }

    public void setXpLevel(Integer xpLevel) {
        this.xpLevel = xpLevel;
    }

    public Integer getPoints() {
        return points;
    }

    public void setPoints(Integer points) {
        this.points = points;
    }
}
