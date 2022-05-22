package com.example.todoapp.todo;

import java.util.List;
import java.util.Optional;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.todoapp.dtos.TodoItemPatchDTO;
import com.example.todoapp.dtos.TodoItemPostDTO;

@RestController
@RequestMapping(value = "/todos")
public class TodoController {
	
//	injection of service provider into rest controller
	@Autowired
	TodoService service;
	
	@GetMapping
	public List<TodoItem> all(){
//		Returns the values of all methods in the service provider (List of entities i.e TODO-item)
		return this.service.all();
	}
	
	@GetMapping(value = "/{id}")
	public ResponseEntity<TodoItem> find(@PathVariable Long id){
//		Creates a new instance of the entity based on the id
		Optional<TodoItem> maybeTodoItem = this.service.find(id);
		
//		If there is no existing entity with a matching id, return a response entity with a null body and httpstatus code of NOT_FOUND
		if(maybeTodoItem.isEmpty()) {
			return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
		}
		
//		Else, return a response entity with an entity body alongside the httpstatus code of OK
		return new ResponseEntity<>(maybeTodoItem.get(), HttpStatus.OK);
	}
	
	@PostMapping
	public ResponseEntity<TodoItem> create(@Valid @RequestBody TodoItemPostDTO data){
//		Create a new instance of TODO-item entity and assign it the values of the service provider create method 
		TodoItem todoitem = this.service.create(data);
		
//		Return a new response entity, with the TODO-item as the body and httpstatus code of OK
		return new ResponseEntity<>(todoitem, HttpStatus.OK);
	}
	
	@PatchMapping(value = "{id}")
	public ResponseEntity<TodoItem> update(@PathVariable Long id, @RequestBody TodoItemPatchDTO data){
//		Creates a new instance of the entity based on the id and existing data
		Optional<TodoItem> maybeTodoItem = this.service.update(id, data);
		
//		If there is no existing entity with a matching id, return a response entity with a null body and httpstatus code of NOT_FOUND
		if(maybeTodoItem.isEmpty()) {
			return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
		}
		
//		Else return a response entity with the newly updated entity and a httpstatus code of OK
		return new ResponseEntity<>(maybeTodoItem.get(),HttpStatus.OK);
	}
	
	@DeleteMapping(value = "/{id}")
	public ResponseEntity delete(@PathVariable Long id){
//		Is true, if id is found
		Boolean found = this.service.delete(id);
		
//		If id is not found (returns false), return a response entity with a null body and httpstatus code
		if(!found) {
			return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
		}
		
//		Otherwise, it is deleted by the service method and returns a null body and relevant httpstatus code
		return new ResponseEntity<>(null, HttpStatus.NO_CONTENT);
	}
	
	

	

}
