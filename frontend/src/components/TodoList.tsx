import { useEffect } from "react";
import { ITask } from "../interfaces/interface";
import { SubHeading } from "../styles/StyledCard";
import TodoTask from "./TodoTask";

// Everytime we pass down props, we create an interface where we are able to access these properties.
// We also define its type here.
interface ITodoListProps {
    tasks: ITask[];
    setTasks: React.Dispatch<React.SetStateAction<ITask[]>>;
    task: string;
}

/* In our todolist, we want to map through each of our task. Each task needs a unique key */

const TodoList: React.FC<ITodoListProps> = ({ tasks, setTasks }) => {
    const handleCompletedTasks = (id: number) => {
        const updatedTodos = [...tasks].map((task) => {
            if (task.id === id) {
                task.isCompleted = !task.isCompleted;
            }
            return task;
        });
        setTasks(updatedTodos);
    };

    return (
        <>
            <SubHeading>
                {tasks.filter((task) => task.isCompleted === false).length}{" "}
                pending tasks left
            </SubHeading>
            <div>
                {tasks
                    .filter((task) => task.isCompleted === false)
                    .map((task: ITask, key: number) => (
                        <TodoTask
                            key={task.id}
                            task={task}
                            tasks={tasks}
                            setTasks={setTasks}
                            completedTasks={handleCompletedTasks}
                        />
                    ))}
            </div>
            <SubHeading>
                {tasks.filter((task) => task.isCompleted === true).length}{" "}
                completed tasks
            </SubHeading>
            <div>
                {tasks
                    .filter((task) => task.isCompleted === true)
                    .map((task: ITask, key: number) => (
                        <TodoTask
                            key={task.id}
                            task={task}
                            tasks={tasks}
                            setTasks={setTasks}
                            completedTasks={handleCompletedTasks}
                        />
                    ))}
            </div>
        </>
    );
};

export default TodoList;
