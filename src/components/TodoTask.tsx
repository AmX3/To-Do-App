import React from "react";
import { ITask } from "../interfaces/interface";

// here we define the properties that our todotask will have
interface Props {
    task: ITask;
}

const TodoTask = ({ task }: Props) => {
    return <div>{task.name}</div>;
};

export default TodoTask;
