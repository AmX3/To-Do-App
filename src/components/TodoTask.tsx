import React, { ChangeEvent, useState } from "react";
import { ITask } from "../interfaces/interface";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { Checkbox, Container, Icon, Task } from "../styles/StyledTodoTask";

// here we define the properties that our todotask(an object) will have
interface Props {
    task: ITask;
    deleteTask(taskNameDelete: string): void;
    handleChecked: (e: ChangeEvent<HTMLInputElement>) => void;
    isChecked: boolean;
}

const TodoTask = ({ task, deleteTask, isChecked, handleChecked }: Props) => {
    return (
        <div>
            <Container>
                <Task>
                    <Checkbox type="checkbox" />
                    {task.name}
                </Task>
                <Icon>
                    <FontAwesomeIcon
                        size={"lg"}
                        icon={faTrashCan}
                        onClick={() => deleteTask(task.name)}
                    />
                </Icon>
                <Icon>
                    <FontAwesomeIcon size={"lg"} icon={faPenToSquare} />
                </Icon>
            </Container>
        </div>
    );
};

export default TodoTask;
