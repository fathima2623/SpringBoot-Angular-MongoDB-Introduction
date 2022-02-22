package com.example.vinternship.repositories;

import com.example.vinternship.models.Author;
import com.example.vinternship.models.Book;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;
import java.util.Optional;

public interface BookRepository extends MongoRepository <Book, String>{

    List<Book> findBookByTitleContaining(String title);
}
