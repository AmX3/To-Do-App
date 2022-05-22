package com.example.todoapp.dtos;

public class TodoItemPatchDTO {
	
	private String name;
	
	public TodoItemPatchDTO(String name) {
		super();
		this.name = name;
	
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	

}
