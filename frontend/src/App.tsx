import React, { ChangeEvent, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import "./App.css";
import theme from "./theme";
import { ITheme } from "./theme";
import GlobalPageStylingProvider from "./theme/Global/GlobalPageStylingProvider";
import { StyledCard, Heading } from "./styles/StyledCard";
import { StyledMain } from "./styles/StyledMain";
import { useState } from "react";
import { ITask } from "./interfaces/interface";
// import TodoList from "./components/TodoList";
import InputField from "./components/InputField";
import { addNewTask } from "./services/apiService";
import { number, string } from "prop-types";
import TodoList from "./components/TodoList";

const App: React.FC = () => {
    const [task, setTask] = useState<string>("");
    const [tasks, setTasks] = useState<ITask[]>([]);

    // Fetch data from our backend server. Convert into json format
    const fetchData = async () => {
        const BASE_URL = "http://localhost:8080/todos";
        const response = await fetch(BASE_URL);
        const data = await response.json();
        setTasks(data);
        console.log(data);
    };

    // Retrieves data from our backend server and updates our page
    useEffect(() => {
        fetchData();
    }, []);

    return (
        <>
            <ThemeProvider theme={theme}>
                <GlobalPageStylingProvider />
                <StyledMain>
                    <StyledCard>
                        <Heading>TODOLIST</Heading>
                        <InputField
                            task={task}
                            setTask={setTask}
                            setTasks={setTasks}
                            tasks={tasks}
                        />
                        <TodoList
                            tasks={tasks}
                            setTasks={setTasks}
                            task={task}
                        />
                    </StyledCard>
                </StyledMain>
            </ThemeProvider>
        </>
    );
};

export default App;
