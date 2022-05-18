import { ITask } from "../interfaces/interface";
import { SubHeading } from "../styles/StyledCard";
import TodoTask from "./TodoTask";

// Everytime we pass down props, we create an interface where we are able to access these properties.
// We also define its type here.
interface ITodoListProps {
    tasks: ITask[];
    setTasks: React.Dispatch<React.SetStateAction<ITask[]>>;
}

/* In our todolist, we want to map through each of our task. Each task needs a unique key */

const TodoList: React.FC<ITodoListProps> = ({ tasks, setTasks }) => {
    const handleCompletedTasks = (taskId: number) => {
        // clone the original array to avoid mutate by reference
        let updatedTodos = [...tasks];
        // find the todo based on todo id
        let selectedTodo = tasks.find((task) => task.id === taskId);
        // find the todo index based on todo id
        let selectedTodoId = tasks.findIndex((task) => task.id === taskId);

        // if selectedTodo is valid, we then update our tasks array
        if (selectedTodo) {
            updatedTodos[selectedTodoId] = {
                ...selectedTodo,
                isCompleted: !selectedTodo.isCompleted,
            };
            setTasks(updatedTodos);
        }
    };

    // const handleDone = (id: number): void => {
    //     setTasks(
    //         tasks.map((task) =>
    //             task.id === id
    //                 ? { ...task, isCompleted: !task.isCompleted }
    //                 : task
    //         )
    //     );
    // };

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
                            task={task}
                            key={key}
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
                            task={task}
                            key={key}
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
