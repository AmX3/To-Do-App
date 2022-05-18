import React, { ChangeEvent, useState } from "react";
import { ITask } from "../interfaces/interface";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { Checkbox, Container, Icon, Task } from "../styles/StyledTodoTask";

// here we define the properties that our todotask(an object) will have
interface Props {
    task: ITask;
    tasks: ITask[];
    setTasks: React.Dispatch<React.SetStateAction<ITask[]>>;
    setCompletedTasks: React.Dispatch<React.SetStateAction<ITask[]>>;
}

const TodoTask = ({ task, tasks, setTasks, setCompletedTasks }: Props) => {
    const handleDone = (id: number): void => {
        setTasks(
            tasks.map((task) =>
                task.id === id
                    ? { ...task, isCompleted: !task.isCompleted }
                    : task
            )
        );
    };

    // Filtering through our todo list and will only return back tasks that have not been deleted. If task name matches our soon to be deleted task, it will delete task.
    const handleDeleteTask = (id: number): void => {
        setTasks(tasks.filter((task) => task.id !== id));
    };

    return (
        <div>
            <Container>
                <Task>
                    <Checkbox
                        type="checkbox"
                        onClick={() => handleDone(task.id)}
                    />
                    {task.isCompleted ? (
                        <>
                            <s> {task.task}</s>
                        </>
                    ) : (
                        <span> {task.task}</span>
                    )}
                </Task>

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
