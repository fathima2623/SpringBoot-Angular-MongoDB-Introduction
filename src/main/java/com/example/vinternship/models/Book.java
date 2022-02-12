package com.example.vinternship.models;


import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Setter
@Getter
@ToString

@Document(collection="Book")
public class Book {

    @Id
    private String id;
    private String title;
    private float price;
    private int year_of_publishing;
    private String author;
    private List<String> genre;
    private String publisher;

}