import styled from "styled-components";
import { ITheme } from "../theme";

interface TaskProps {
    theme: ITheme;
    isCompleted: boolean;
}

export const Container = styled.div`
    display: flex;
    align-items: center;
`;

export const Icon = styled.div`
    & * {
        color: ${(props) => props.theme.colors["secondary"]};
        transition: all 0.3s;
        margin-left: 15px;
    }

    &:hover * {
        transform: scale(0.95);
        cursor: pointer;
    }
`;

export const Checkbox = styled.input`
    height: 15px;
    width: 15px;
    margin-right: 20px;
`;

// Reusable task component. If tasks is completed, it will change opacity. Must declare isCompleted and type in our interface
export const Task = styled.span`
    width: 100%;
    padding: 15px 10px;
    border: none;
    outline: none;
    border-radius: 5px;
    background: ${(props) => props.theme.colors["body"]};
    border-radius: 20px;
    margin: 10px 0;
    opacity: ${(props: TaskProps) => (props.isCompleted ? 0.5 : 1)};
`;
