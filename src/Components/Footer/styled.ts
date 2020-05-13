import styled from "styled-components/native";

export const Container = styled.View`
    height: 250;
    background-color: ${({ theme }) => theme.colors.mainBackground};
    justify-content: center;
    align-items: center;
`;

export const Button = styled.TouchableOpacity`
    border-width: 1;
    padding: 10px;
    padding-left: 35px;
    padding-right: 35px;
    border-radius: 25px;
    background: #f8d332;
;`;


export const ButtonText = styled.Text`
    font-size: 18px;
`;
