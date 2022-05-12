import React, { ChangeEvent } from "react";
import { ITask } from "../interfaces/interface";
import TodoTask from "./TodoTask";

interface Props {
    tasks: ITask[];
    setTasks: React.Dispatch<React.SetStateAction<ITask[]>>;
    completedTasks: ITask[];
    setCompletedTasks: React.Dispatch<React.SetStateAction<ITask[]>>;
}

const TodoList: React.FC<Props> = ({ tasks, setTasks, setCompletedTasks }) => {
    return (
        <>
            {tasks.map((task: ITask, key: number) => {
                return (
                    <TodoTask
                        task={task}
                        key={key}
                        tasks={tasks}
                        setTasks={setTasks}
                    />
                );
            })}
        </>
    );
};

export default TodoList;
