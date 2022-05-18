import styled from "styled-components";
import { ITheme } from "../theme";

interface TaskProps {
    theme: ITheme;
}

export const Container = styled.div`
    display: flex;
    align-items: center;
`;

export const Icon = styled.div`
    & * {
        color: ${(props: TaskProps) => props.theme.colors["secondary"]};
        transition: all 0.3s;
        margin-left: 15px;
        cursor: pointer;
    }
`;

export const Checkbox = styled.input`
    height: 15px;
    width: 15px;
    margin-right: 20px;
`;

export const Task = styled.span`
    width: 100%;
    padding: 15px 10px;
    border: none;
    outline: none;
    border-radius: 5px;
    background: ${(props: TaskProps) => props.theme.colors["body"]};
    border-radius: 20px;
    margin: 10px 0;
`;

export const CompletedTask = styled.span`
    width: 100%;
    padding: 15px 10px;
    border: none;
    outline: none;
    border-radius: 5px;
    background: ${(props: TaskProps) => props.theme.colors["body"]};
    border-radius: 20px;
    margin: 10px 0;
    opacity: 0.5;
    align-items: center;
`;
