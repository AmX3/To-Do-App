import React from "react";
import { ThemeProvider } from "styled-components";
import "./App.css";
import theme from "./theme";
import { ITheme } from "./theme";
import GlobalPageStylingProvider from "./theme/Global/GlobalPageStylingProvider";
import {
    StyledCard,
    Container,
    Field,
    Heading,
    Icon,
    Label,
    SmallHeading,
} from "./styles/StyledCard";
import { StyledMain } from "./styles/StyledMain";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { useState, ChangeEvent } from "react";
import { ITask } from "./interfaces/interface";
import TodoTask from "./components/TodoTask";

const App: React.FC = () => {
    const [tasks, setTasks] = useState<string>("");
    const [detail, setDetail] = useState<string>("");
    const [todoList, setTodoList] = useState<ITask[]>([]);

    // every function needs a return. If the function does not return anything, we are going to insert a void keyword
    const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
        setTasks(e.target.value);
    };

    // In addtask, if tasks input is empty, we do nothing, else we add our new task (object) to our array of tasks in todoList
    const addTask = (): void => {
        const newTask = { name: tasks, details: detail };
        if (tasks.length == 0) {
            return;
        } else {
            setTodoList([...todoList, newTask]);
        }

        console.log(todoList);
        // reset task after every submit
        setTasks("");
        setDetail("");
    };

    // Filtering through our todo list and will only return back tasks that have not been deleted. If task name matches our soon to be deleted task, it will delete task.
    const deleteTask = (taskNameDelete: string): void => {
        setTodoList(todoList.filter((task) => task.name != taskNameDelete));
    };

    return (
        <>
            <ThemeProvider theme={theme}>
                <GlobalPageStylingProvider />
                <StyledMain>
                    <StyledCard>
                        <Heading>TODOLIST</Heading>
                        <hr />
                        <Label>Add Task:</Label>
                        <Container>
                            <Field value={tasks} onChange={handleChange} />
                            <Icon>
                                <FontAwesomeIcon
                                    icon={faCirclePlus}
                                    size={"lg"}
                                    onClick={addTask}
                                />
                            </Icon>
                        </Container>
                        <SmallHeading>
                            You have {todoList.length} tasks left!
                        </SmallHeading>

                        {/* In our todolist, we want to map through each of our task. Each task needs a unique key otherwise React will not like it */}
                        {todoList.map((tasks: ITask, key: number) => {
                            return (
                                <TodoTask
                                    task={tasks}
                                    key={key}
                                    deleteTask={deleteTask}
                                />
                            );
                        })}
                    </StyledCard>
                </StyledMain>
            </ThemeProvider>
        </>
    );
};

export default App;
