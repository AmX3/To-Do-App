import React, { ChangeEvent } from "react";
import { ThemeProvider } from "styled-components";
import "./App.css";
import theme from "./theme";
import { ITheme } from "./theme";
import GlobalPageStylingProvider from "./theme/Global/GlobalPageStylingProvider";
import { StyledCard, Heading } from "./styles/StyledCard";
import { StyledMain } from "./styles/StyledMain";
import { useState } from "react";
import { ITask } from "./interfaces/interface";
import TodoList from "./components/TodoList";
import InputField from "./components/InputField";

const App: React.FC = () => {
    const [task, setTask] = useState<string>("");
    const [tasks, setTasks] = useState<ITask[]>([]);

    // In addtask, if tasks input is empty, we do nothing, else we add our new task (object) to our array of tasks in todoList
    const handleAddTask = () => {
        const newTask = { id: Date.now(), task, isCompleted: false };
        if (task.length == 0) {
            return;
        } else {
            setTasks([...tasks, newTask]);
            // reset input field after every submit
            setTask("");
        }
    };

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
                            handleAddTask={handleAddTask}
                        />
                        <TodoList tasks={tasks} setTasks={setTasks} />
                    </StyledCard>
                </StyledMain>
            </ThemeProvider>
        </>
    );
};

export default App;
