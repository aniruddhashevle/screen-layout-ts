// #region Global Imports
import * as React from "react";
import { useDispatch } from "react-redux";
import { Dimensions, TouchableOpacity, StyleSheet, ScrollView, View } from "react-native";
import { useTranslation } from "react-i18next";
// #endregion Global Imports

// #region Local Imports
import {
    Header,
    MainSection,
    LeftSection,
    RightSection,
    Footer,
    AsideSection,
} from "@Components";
import {
    RowSection,
} from "./styled";

const Home: React.FunctionComponent = () => {

    return (
        <ScrollView>
            <Header />
            <View>
                <MainSection />
                <RowSection>
                    <LeftSection />
                    <RightSection />
                </RowSection>
                <AsideSection />
            </View>
            <Footer />
        </ScrollView>
    );
};

export default Home;
