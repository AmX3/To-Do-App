import React, { ChangeEvent } from "react";
import { ITask } from "../interfaces/interface";
import { SmallHeading } from "../styles/StyledCard";
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
            <SmallHeading>Pending Tasks</SmallHeading>
            <div>
                {tasks
                    .filter((task) => task.isCompleted === false)
                    .map((task: ITask, key: number) => (
                        <TodoTask
                            task={task}
                            key={key}
                            tasks={tasks}
                            setTasks={setTasks}
                            setCompletedTasks={setCompletedTasks}
                        />
                    ))}
            </div>
            <SmallHeading>Completed Tasks</SmallHeading>
            <div>
                {tasks
                    .filter((task) => task.isCompleted === true)
                    .map((task: ITask, key: number) => (
                        <TodoTask
                            task={task}
                            key={key}
                            tasks={tasks}
                            setTasks={setTasks}
                            setCompletedTasks={setCompletedTasks}
                        />
                    ))}
            </div>
        </>
    );
};

export default TodoList;
