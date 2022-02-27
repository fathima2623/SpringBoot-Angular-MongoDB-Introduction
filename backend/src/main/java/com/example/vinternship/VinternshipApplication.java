package com.example.vinternship;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.mongodb.MongoCollectionUtils;
import org.springframework.data.mongodb.MongoDatabaseUtils;
import org.springframework.data.mongodb.repository.MongoRepository;

@SpringBootApplication
public class VinternshipApplication {

    public static void main(String[] args) {
        SpringApplication.run(VinternshipApplication.class, args);


    }

}
