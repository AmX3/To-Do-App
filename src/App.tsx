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
} from "./components/StyledCard";
import { StyledMain } from "./components/StyledMain";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { useState, ChangeEvent } from "react";
import { ITask } from "./interfaces/interface";
import TodoTask from "./components/TodoTask";

const App: React.FC = () => {
    const [task, setTask] = useState<string>("");
    const [detail, setDetail] = useState<string>("");
    const [todoList, setTodoList] = useState<ITask[]>([]);

    // every function needs a return. If the function does not return anything, we are going to insert a void
    const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
        setTask(e.target.value);
    };

    const addTask = (): void => {
        const newTask = { name: task, details: detail };
        setTodoList([...todoList, newTask]);
        console.log(todoList);
        // reset task after every submit
        setTask("");
        setDetail("");
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
                            <Field value={task} onChange={handleChange} />
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
                        <div className="todoList">
                            {/* In our todolist, we want to map through each of our task. Each task needs a unique key otherwise React will not like it */}
                            {todoList.map((task: ITask, key: number) => {
                                return <TodoTask task={task} key={key} />;
                            })}
                        </div>
                    </StyledCard>
                </StyledMain>
            </ThemeProvider>
        </>
    );
};

export default App;
