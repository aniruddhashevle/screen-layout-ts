// #region Global Imports
import * as React from "react";
import { renderWithProviders } from "@Test/Helpers/render";
// #endregion Global Imports

// #region Local Imports
import { Footer } from "@Components";
// #endregion Local Imports

describe("Components", () => {
    describe("Footer", () => {

        it("should match snapshot", () => {
            const wrapper = renderWithProviders(<Footer />);

            expect(wrapper).toMatchSnapshot();
        });
    });
});