// Global Imports
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import Home from "@Scenes/Home";

const AppStackNavigator = createStackNavigator({
    Home: {
        navigationOptions: () => ({
            headerShown: false,
        }),
        screen: Home,
    },
});

const AppContainer = createAppContainer(AppStackNavigator);

export default AppContainer;
