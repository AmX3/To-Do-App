import React, { ChangeEvent, useState } from "react";
import { ITask } from "../interfaces/interface";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import {
    Checkbox,
    CompletedTask,
    Container,
    Icon,
    Task,
} from "../styles/StyledTodoTask";

// here we define the properties that our todotask(an object) will have
interface ITodoTaskProps {
    task: ITask;
    tasks: ITask[];
    setTasks: React.Dispatch<React.SetStateAction<ITask[]>>;
    completedTasks: (taskId: number) => void;
}

const TodoTask: React.FC<ITodoTaskProps> = ({
    task,
    tasks,
    setTasks,
    completedTasks,
}) => {
    // Filtering through our todo list and will only return back tasks that have not been deleted. If task name matches our soon to be deleted task, it will delete task.
    const handleDeleteTask = (id: number): void => {
        setTasks(tasks.filter((task) => task.id !== id));
    };

    return (
        <div>
            <Container>
                {task.isCompleted ? (
                    <CompletedTask>
                        <Checkbox
                            type="checkbox"
                            checked={task.isCompleted}
                            onChange={() => completedTasks(task.id)}
                        />
                        <s> {task.task}</s>
                    </CompletedTask>
                ) : (
                    <Task>
                        <Checkbox
                            type="checkbox"
                            checked={task.isCompleted}
                            onChange={() => completedTasks(task.id)}
                        />
                        {task.task}
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
