// #region Global Imports
import * as React from "react";
import { renderWithProviders } from "@Test/Helpers/render";
// #endregion Global Imports

// #region Local Imports
import { LeftSection } from "@Components";
// #endregion Local Imports

describe("Components", () => {
    describe("LeftSection", () => {

        it("should match snapshot", () => {
            const wrapper = renderWithProviders(<LeftSection />);

            expect(wrapper).toMatchSnapshot();
        });
    });
});