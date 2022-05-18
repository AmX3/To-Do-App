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
    const [completedTasks, setCompletedTasks] = useState<ITask[]>([]);

    // const handleChecked = (e: ChangeEvent<HTMLInputElement>): void => {
    //     setChecked(e.target.checked);
    // };

    // In addtask, if tasks input is empty, we do nothing, else we add our new task (object) to our array of tasks in todoList
    const handleAddTask = () => {
        const newTask = { id: Date.now(), task, isCompleted: false };
        if (task.length == 0) {
            return;
        } else {
            setTasks([...tasks, newTask]);
            // reset task after every submit
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
                        <hr />
                        <InputField
                            task={task}
                            setTask={setTask}
                            handleAddTask={handleAddTask}
                        />
                        {/* In our todolist, we want to map through each of our
                        task. Each task needs a unique key otherwise React will
                        not like it */}
                        <TodoList
                            tasks={tasks}
                            setTasks={setTasks}
                            completedTasks={completedTasks}
                            setCompletedTasks={setCompletedTasks}
                        />
                    </StyledCard>
                </StyledMain>
            </ThemeProvider>
        </>
    );
};

export default App;
