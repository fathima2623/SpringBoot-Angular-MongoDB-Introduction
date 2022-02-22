package com.example.vinternship.models;

import org.springframework.data.annotation.Id;
import com.example.vinternship.models.Book;
import org.springframework.data.mongodb.core.mapping.Document;



import java.util.List;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Setter
@Getter
@ToString

@Document(collection="BookShop")
public class BookShop {

    @Id
    private String id;
    private String shopname;
    private int shop_number;
    private String location;
    private List<Book> books;
    private String contact;
    private String email;

}
