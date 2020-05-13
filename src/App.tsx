// #region Global Imports
import React, { Component } from "react";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components/native";
import codePush from "react-native-code-push";
import BootSplash from "react-native-bootsplash";
// #endregion Global Imports

// #region Local Imports
import { theme } from "@Definitions/Styled";
import { I18n } from "@I18n";
import { configureStore } from "@Redux";
import { SafeArea } from "@Styled";
import Home from "@Scenes/Home";
// #region Local Imports

// Configure Store
const store = configureStore({});

class App extends Component<{}> {
    public componentDidMount(): void {
        I18n.init();
        BootSplash.hide();
    }

    public render(): JSX.Element {
        return (
            <Provider store={store}>
                <ThemeProvider theme={theme}>
                    <SafeArea>
                        <Home />
                    </SafeArea>
                </ThemeProvider>
            </Provider>
        );
    }
}

const codePushOptions = { checkFrequency: codePush.CheckFrequency.MANUAL };

export default codePush(codePushOptions)(App);
