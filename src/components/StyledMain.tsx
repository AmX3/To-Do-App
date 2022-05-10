import styled from "styled-components";
import { ITheme } from "../theme/";

interface CardProps {
    theme: ITheme;
}

export const StyledMain = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    background-color: ${(props: CardProps) => props.theme.colors["body"]};
`;
