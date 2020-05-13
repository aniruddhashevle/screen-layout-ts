import styled from "styled-components/native";

export const Container = styled.View`
    height: 600;
    margin-top: 10;
    margin-bottom: 10;
    background-color: ${({ theme }) => theme.colors.mainBackground};
`;
