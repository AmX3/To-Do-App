import React, { ChangeEvent } from "react";
import { Input, Icon, Container } from "../styles/StyledInputField";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { ITask } from "../interfaces/interface";

interface INewTaskProps {
    task: string;
    setTask: React.Dispatch<React.SetStateAction<string>>;
    setTasks: React.Dispatch<React.SetStateAction<ITask[]>>;
    tasks: ITask[];
}

const InputField: React.FC<INewTaskProps> = ({
    task,
    setTask,
    setTasks,
    tasks,
}) => {
    // Every function needs a return. If the function does not return anything, we are going to insert a void keyword
    const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
        setTask(e.target.value);
    };

    const handleSubmit = (e: React.SyntheticEvent) => {
        e.preventDefault();
        const newTask = { id: Date.now(), name: task, isCompleted: false };
        setTasks([...tasks, newTask]);
        console.log(tasks);
        fetch("http://localhost:8080/todos", {
            method: "POST",
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newTask),
        });
        setTask("");
    };

    // // // In addtask, if tasks input is empty, we do nothing, else we add our new task (object) to our array of tasks in todoList
    // const handleAddTask = async () => {
    //     const newTask = { name: "" };
    //     if (task.length == 0) {
    //         return;
    //     } else {
    //         fetch("http://localhost:8080/todos", {
    //             method: "POST",
    //             mode: "cors",
    //             headers: {
    //                 "Content-Type": "application/json",
    //             },
    //             body: JSON.stringify(newTask),
    //         });
    //         console.log(newTask);
    //         setTask("");
    //         const response = await fetch("http://localhost:8080/todos");
    //         const data = await response.json();
    //         return data;
    //     }
    // };

    return (
        <Container onSubmit={handleSubmit}>
            <Input
                type="text"
                value={task}
                onChange={handleChange}
                placeholder="Add a Task"
            />
            <Icon>
                <FontAwesomeIcon
                    type="submit"
                    icon={faCirclePlus}
                    size={"lg"}
                    // onClick={() => handleAddTask()}
                />
            </Icon>
        </Container>
    );
};

export default InputField;
