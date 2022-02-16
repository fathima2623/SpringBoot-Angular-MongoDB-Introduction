package com.example.vinternship.models;
import lombok.Getter;
import lombok.Setter;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Date;
@Document(collection = "genres")
public class Genre {
    @Id
    private String id;
    private String name;
    @CreatedDate
    private Date created;

    public Genre() {}

    public Genre(String name) {
        this.name = name;
    }

    public String getId() {
        return id;
    }

    public Date getCreated() {
        return created;
    }

    public String getName() {
        return name;
    }

}
