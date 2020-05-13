import { DefaultTheme } from "styled-components/native";
import { Dimensions } from "react-native";

const screenWidth = Math.round(Dimensions.get("window").width);
const screenHeight = Math.round(Dimensions.get("window").height);

const theme: DefaultTheme = {
    colors: {
        primary: "#2c3e50",
        headerBackground: "#4f5927",
        mainBackground: "#fce0a7",
        leftSectionBackground: "#68933a",
        rightSectionBackground: "#948b76",
        asideBackground: "#f5d36a",
        footerBackground: "#ccc86f",
    },
    dimensions: {
        screenWidth,
        screenHeight,
    },
};

export { theme };
