import styled from "styled-components";
import { ITheme } from "../theme";

interface InputProps {
    theme: ITheme;
}
export const Container = styled.div`
    display: flex;
    align-items: center;
`;

export const Input = styled.input`
    width: 100%;
    padding: 15px 10px;
    border: none;
    outline: none;
    border-radius: 5px;
    background: ${(props: InputProps) => props.theme.colors["body"]};
    border-radius: 20px;
    margin: 10px 0;
`;

export const Icon = styled.div`
    & * {
        color: ${(props: InputProps) => props.theme.colors["secondary"]};
        transition: all 0.3s;
        margin-left: 15px;
        cursor: pointer;
    }
`;
