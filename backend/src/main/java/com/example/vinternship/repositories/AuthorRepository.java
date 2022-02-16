package com.example.vinternship.repositories;

import com.example.vinternship.models.Author;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface AuthorRepository extends MongoRepository<Author, String> {
    List<Author> findAuthorsByName(String name);
    List<Author> findAuthorsByAge(Integer age);
}