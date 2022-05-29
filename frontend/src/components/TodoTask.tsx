import React, { ChangeEvent, useEffect, useState } from "react";
import { ITask } from "../interfaces/interface";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { Checkbox, Container, Icon, Task } from "../styles/StyledTodoTask";
import { fetchData } from "../services/apiService";

// here we define the properties that our todotask(an object) will have
interface ITodoTaskProps {
    task: ITask;
    tasks: ITask[];
    setTasks: React.Dispatch<React.SetStateAction<ITask[]>>;
    completedTasks: (id: number) => void;
}

const TodoTask: React.FC<ITodoTaskProps> = ({
    task,
    tasks,
    setTasks,
    completedTasks,
}) => {
    // // Filtering through our todo list and will only return back tasks that have not been deleted. If task name matches our soon to be deleted task, it will delete task.
    const handleDeleteTask = (id: number) => {
        const updatedTodos = [...tasks].filter((task) => task.id !== id);
        fetch(`http://localhost:8080/todos/${id}`, {
            method: "DELETE",
            mode: "cors",
        });
        setTasks(updatedTodos);
    };

    return (
        <div>
            <Container>
                {task.isCompleted ? (
                    <Task isCompleted={task.isCompleted}>
                        <Checkbox
                            type="checkbox"
                            checked={task.isCompleted}
                            onChange={() => completedTasks(task.id)}
                        />
                        <s> {task.name}</s>
                    </Task>
                ) : (
                    <Task isCompleted={task.isCompleted}>
                        <Checkbox
                            type="checkbox"
                            checked={task.isCompleted}
                            onChange={() => completedTasks(task.id)}
                        />
                        {task.name}
                    </Task>
                )}

                <Icon>
                    <FontAwesomeIcon
                        size={"lg"}
                        icon={faTrashCan}
                        onClick={() => handleDeleteTask(task.id)}
                    />
                </Icon>
            </Container>
        </div>
    );
};

export default TodoTask;
