package com.example.vinternship.controller;

import com.example.vinternship.models.Author;
import com.example.vinternship.models.Book;
import com.example.vinternship.models.Genre;
import com.example.vinternship.repositories.BookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class BookController {


 @Autowired
 private BookRepository repository;

 @PostMapping("/api/books")
 public ResponseEntity<Book> createBook(@RequestBody Book book){
  try{
   Book _book = repository.save(book);
   return new ResponseEntity<>(book,HttpStatus.CREATED);
  }
  catch(Exception e){
   return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
  }
 }

 @GetMapping("/api/books")
 public ResponseEntity<?> getallbooks(){
  List<Book> books = repository.findAll();

  if(books.size()>0){
   return new ResponseEntity<List<Book>>(books, HttpStatus.OK);
  }
  else
  {
   return new ResponseEntity<>("no books in shop", HttpStatus.NOT_FOUND);
  }
 }

 @GetMapping("/api/books/{id}")
 public ResponseEntity<Book> FindBooksById(@PathVariable("id") String id){
  Optional<Book> data = repository.findById(id);

  if(repository.findById(id).isPresent()){
   return new ResponseEntity<>(data.get(), HttpStatus.OK);
  }
  else
  {
   return new ResponseEntity<>(HttpStatus.NO_CONTENT);
  }
 }

 @GetMapping("/api/books/title/{title}")
 public ResponseEntity<List<Book>> FindBooksByTitle(@PathVariable("title") String title){

  List<Book> books = new ArrayList<Book>();
  repository.findBookByTitleContaining(title).forEach(books::add);

  if(books.isEmpty()){
   return new ResponseEntity<>(HttpStatus.NO_CONTENT);
  }
  else
  {

   return new ResponseEntity<>(books, HttpStatus.OK);
  }
 }


 @PutMapping("/api/books/{id}")
 public ResponseEntity<Book> updatebook(@PathVariable("id") String id,@RequestBody Book book){
  Optional<Book> data = repository.findById(id);

  if(repository.findById(id).isPresent()) {
   Book _book = data.get();
  // _book.setAuthor(book.getAuthors());

   _book.setAuthor(book.getAuthor());
   _book.setGenre(book.getGenre());
   _book.setPrice(book.getPrice());
   _book.setPublisher(book.getPublisher());
   _book.setTitle(book.getTitle());
   _book.setYear_of_publishing(book.getYear_of_publishing());
   _book.setImage(book.getImage());
   return new ResponseEntity<>(repository.save(_book), HttpStatus.OK);
  }
  else
  {
   return new ResponseEntity<>(HttpStatus.NOT_FOUND);
  }
 }

 @DeleteMapping("/api/books/{id}")
 public ResponseEntity<HttpStatus> deleteBook(@PathVariable("id") String id){

  try{
   repository.deleteById(id);
   return new ResponseEntity<>(HttpStatus.NO_CONTENT);
  }
  catch (Exception e){
   return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
  } }

  @DeleteMapping("/api/books")
  public ResponseEntity<HttpStatus> deleteAllBooks(){

   try{
    repository.deleteAll();
    return new ResponseEntity<>(HttpStatus.NO_CONTENT);
   }
   catch (Exception e){
    return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
   } }
}
