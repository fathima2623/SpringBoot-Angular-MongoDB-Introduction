package com.example.vinternship.repositories;

import com.example.vinternship.models.Book;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.Optional;

public interface BookRepository extends MongoRepository <Book, String>{

    Optional<Book> findBookByTitleContaining(String title);

}
