import "styled-components";

declare module "styled-components" {
    interface DefaultTheme {
        colors: {
            primary: string;
            headerBackground: string;
            mainBackground: string;
            leftSectionBackground: string;
            rightSectionBackground: string;
            footerBackground: string;
            asideBackground: string;
        };
        dimensions: {
            screenWidth: number;
            screenHeight: number;
        };
    }
}
