import React from "react";
import { ITask } from "../interfaces/interface";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { Container, Icon, Task } from "../styles/StyledTodoTask";

// here we define the properties that our todotask(an object) will have
interface Props {
    task: ITask;
    deleteTask(taskNameDelete: string): void;
}

const TodoTask = ({ task, deleteTask }: Props) => {
    return (
        <div>
            <Container>
                <Task>{task.name}</Task>
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
