package com.example.vinternship.repositories;
import com.example.vinternship.models.Genre;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface GenreRepository extends MongoRepository<Genre, String> {
    List<Genre> findGenreByNameContaining(String name);
}
