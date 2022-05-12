import React, { ChangeEvent } from "react";
import { ITask } from "../interfaces/interface";
import TodoTask from "./TodoTask";

interface Props {
    tasks: ITask[];
    setTasks: React.Dispatch<React.SetStateAction<ITask[]>>;
    // handleChecked: (e: ChangeEvent<HTMLInputElement>) => void;
}

const TodoList: React.FC<Props> = ({ tasks, setTasks }) => {
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
