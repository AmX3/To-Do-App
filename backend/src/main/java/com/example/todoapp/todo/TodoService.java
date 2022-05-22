package com.example.todoapp.todo;

import java.util.List;
import java.util.Optional;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.example.todoapp.dtos.TodoItemPatchDTO;
import com.example.todoapp.dtos.TodoItemPostDTO;

@Service
@Transactional
public class TodoService {
	@Autowired
	private TodoRepository repository;
	
	public List<TodoItem> all(){
		return this.repository.findAll();
	}

	public Optional<TodoItem> find(Long id) {
		// TODO Auto-generated method stub
		return this.repository.findById(id);
	}

	public TodoItem create(@Valid TodoItemPostDTO data) {
//		Creating a new instance of entity -> TODO item
		TodoItem todoItem = new TodoItem();
		
//		Setting the fields within our records with the values created from DTO. As some DTO may 
//		have a missing id, our entity will auto-generate a UNIQUE id for each record
		todoItem.setName(data.getName());
		todoItem.setIsCompleted(data.getIsCompleted());
		
//		Saving our newly created todoItem entity
		return this.repository.save(todoItem);
	}
	
//	Update an existing entity. Optional is used in order to indicate it may/may not return an entity
	public Optional<TodoItem> update(Long id, TodoItemPatchDTO data) {
//		Creating a new instance of entity based on id
		Optional<TodoItem> maybeTodoItem = this.repository.findById(id);
		
//		If there is no existing entity with a matching id, do nothing;
		if(maybeTodoItem.isEmpty()) {
			return maybeTodoItem;
		}
		
//		Will only execute if there is an existing entity with a matching id -> retrieve entity
		TodoItem todoItem = maybeTodoItem.get();
		
//		if field is not empty, update the existing record with its new value
		if(data.getName() != null) {
			todoItem.setName(data.getName());
		}
		
		
//		After value has been reassigned, save updated entity
		todoItem = this.repository.save(todoItem);
		
		return Optional.of(todoItem);
	}

	public Boolean delete(Long id) {
//		Checks if id matches and existing id. Using control flow statement, we return false or delete the entity from our DB
		Boolean exists = this.repository.existsById(id);
		
		if(!exists) {
			return false;
		}
		
		this.repository.deleteById(id);
		return true;
	}
	
	
	

}
