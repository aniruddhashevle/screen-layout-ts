// #region Global Imports
import * as React from "react";
import { renderWithProviders } from "@Test/Helpers/render";
// #endregion Global Imports

// #region Local Imports
import { RightSection } from "@Components";
// #endregion Local Imports

describe("Components", () => {
    describe("RightSection", () => {

        it("should match snapshot", () => {
            const wrapper = renderWithProviders(<RightSection />);

            expect(wrapper).toMatchSnapshot();
        });
    });
});