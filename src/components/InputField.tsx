import React, { ChangeEvent } from "react";
import { Input, Icon, Container } from "../styles/StyledInputField";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";

interface Props {
    task: string;
    setTask: React.Dispatch<React.SetStateAction<string>>;
    handleAddTask: () => void;
}

const InputField: React.FC<Props> = ({ task, setTask, handleAddTask }) => {
    // every function needs a return. If the function does not return anything, we are going to insert a void keyword
    const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
        setTask(e.target.value);
    };
    return (
        <Container>
            <Input
                value={task}
                onChange={handleChange}
                placeholder="Add a Task"
            />
            <Icon>
                <FontAwesomeIcon
                    icon={faCirclePlus}
                    size={"lg"}
                    onClick={handleAddTask}
                />
            </Icon>
        </Container>
    );
};

export default InputField;
