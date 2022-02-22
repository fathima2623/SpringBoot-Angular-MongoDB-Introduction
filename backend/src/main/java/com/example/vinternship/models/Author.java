package com.example.vinternship.models;

import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Date;
import java.util.List;

@Document(collection = "Author")
public class Author {
    @Id
    private String id;
    private String name;
    private int age;
    private String phone;
    private String email;
    private List<Genre> genre;
    private String image;
    @CreatedDate
    private final Date registration;

    // public Author() {}

    public Author(String id, String name, int age, String phone, String email, List<Genre> genre,String image, Date registration) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.phone = phone;
        this.email = email;
        this.genre = genre;
        this.image = image;
        this.registration = registration;
    }

    public String getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String email) {
        this.image = image;
    }

    public List<Genre> getGenre() {
        return genre;
    }
    public void setGenre(List<Genre> genre) {
        this.genre = genre;
    }

    public Date getRegistration() {
        return registration;
    }
}