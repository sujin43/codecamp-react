import styled from "@emotion/styled";

export const ProductButton = styled.button`
    background-color:  ${(props) => props.isActive ? "#ffe900" : ""};
`