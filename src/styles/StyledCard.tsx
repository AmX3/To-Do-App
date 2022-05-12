import styled from "styled-components";
import { ITheme } from "../theme";

interface CardProps {
    theme: ITheme;
}

export const StyledCard = styled.div`
    width: 500px;
    height: 100%;
    background-color: ${(props: CardProps) => props.theme.colors["light"]};
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    padding: 2rem;
`;

export const Heading = styled.h1`
    text-align: center;
    color: ${(props: CardProps) => props.theme.colors["dark"]};
`;

export const Label = styled.label`
    color: ${(props: CardProps) => props.theme.colors["dark"]};
    font-size: 16px;
`;

export const InputField = styled.input`
    width: 100%;
    padding: 15px 10px;
    border: none;
    outline: none;
    border-radius: 5px;
    background: ${(props: CardProps) => props.theme.colors["body"]};
    border-radius: 20px;
    margin: 10px 0;
`;

export const SmallHeading = styled.h3``;
