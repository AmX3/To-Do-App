package com.example.todoapp.dtos;

import javax.validation.constraints.NotBlank;

public class TodoItemPostDTO {
	

	//	Adding validation checks when creating a new record within database
	@NotBlank
	private String name;

	private Boolean isCompleted;
	
	
	public TodoItemPostDTO(@NotBlank String name, @NotBlank Boolean isCompleted) {
		super();
		this.name = name;
		this.isCompleted = isCompleted;
	}
	
	public String getName() {
		return name;
	}
	
	public void setName(String name) {
		this.name = name;
	}
	
	public Boolean getIsCompleted() {
		return isCompleted;
	}
	
	public void setIsCompleted(Boolean isCompleted) {
		this.isCompleted = isCompleted;
	}
	
	

}
