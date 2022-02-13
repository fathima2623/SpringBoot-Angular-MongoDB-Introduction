package com.example.vinternship.repositories;

import com.example.vinternship.models.BookShop;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.Optional;



import java.util.Optional;
public interface BookShopRepository extends MongoRepository<BookShop, String>{
    //Optional<BookShop> findBookShopByShop_nameContaining(String shop_name);
}






