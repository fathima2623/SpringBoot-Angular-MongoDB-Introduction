package com.example.vinternship.controller;

import com.example.vinternship.models.BookShop;
import com.example.vinternship.models.Book;
import com.example.vinternship.repositories.BookShopRepository;
import com.example.vinternship.repositories.BookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class BookShopController{


    @Autowired
    private BookShopRepository repository;

    @PostMapping("/api/bookshops")
    public ResponseEntity<BookShop> createBook(@RequestBody BookShop bookshop){
        try{
            BookShop _book = repository.save(bookshop);
            return new ResponseEntity<>(bookshop,HttpStatus.CREATED);
        }
        catch(Exception e){
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/api/bookshops")
    public ResponseEntity<List<BookShop>> getAllbookshops() {
        try {
            List<BookShop> shops = new ArrayList<BookShop>();
            repository.findAll().forEach(shops::add);

            if (shops.isEmpty()) {
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }
            return new ResponseEntity<>(shops, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/api/bookshops/{id}")
    public ResponseEntity<BookShop> FindBookshopById(@PathVariable("id") String id){
        Optional<BookShop> data = repository.findById(id);

        if(repository.findById(id).isPresent()){
            return new ResponseEntity<>(data.get(), HttpStatus.OK);
        }
        else
        {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
    }

    
    @PutMapping("/api/bookshops/{id}")
    public ResponseEntity<BookShop> updatebookshop(@PathVariable("id") String id,@RequestBody BookShop bookshop){
        Optional<BookShop> data = repository.findById(id);

        if(data.isPresent()) {
            BookShop _bookshop = data.get();

            _bookshop.setBooks(bookshop.getBooks());
            _bookshop.setContact(bookshop.getContact());
            _bookshop.setEmail(bookshop.getEmail());
            _bookshop.setShop_name(bookshop.getShop_name());
            _bookshop.setShop_number(bookshop.getShop_number());
            _bookshop.setLocation(bookshop.getLocation());

            return new ResponseEntity<>(repository.save(_bookshop), HttpStatus.OK);
        }
        else
        {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/api/bookshops/{id}")
    public ResponseEntity<?> deleteBookshop(@PathVariable("id") String id){

        try{
            repository.deleteById(id);
            return new ResponseEntity<>("deleted bookshop",HttpStatus.NO_CONTENT);
        }
        catch (Exception e){
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        } }

    @DeleteMapping("/api/bookshops")
    public ResponseEntity<HttpStatus> deleteAllBookshops(){

        try{
            repository.deleteAll();
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        catch (Exception e){
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        } }
}
