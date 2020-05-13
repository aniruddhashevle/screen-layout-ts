// #region Global Imports
import * as React from "react";
import { ScrollView, View } from "react-native";
import {
    Header,
    MainSection,
    LeftSection,
    RightSection,
    Footer,
    AsideSection,
} from "@Components";
import {
    RowSectionStyled,
} from "./styled";

const Home: React.FunctionComponent = () => {

    return (
        <ScrollView>
            <Header />
            <View>
                <MainSection />
                <RowSectionStyled>
                    <LeftSection />
                    <RightSection />
                </RowSectionStyled>
                <AsideSection />
            </View>
            <Footer />
        </ScrollView>
    );
};

export default Home;
