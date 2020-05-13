// #region Global Imports
import * as React from "react";
import { renderWithProviders } from "@Test/Helpers/render";
// #endregion Global Imports

// #region Local Imports
import { MainSection } from "@Components";
// #endregion Local Imports

describe("Components", () => {
    describe("MainSection", () => {

        it("should match snapshot", () => {
            const wrapper = renderWithProviders(<MainSection />);

            expect(wrapper).toMatchSnapshot();
        });
    });
});