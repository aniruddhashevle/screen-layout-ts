// #region Global Imports
import * as React from "react";
import { renderWithProviders } from "@Test/Helpers/render";
// #endregion Global Imports

// #region Local Imports
import { Header } from "@Components";
// #endregion Local Imports

describe("Components", () => {
    describe("Header", () => {

        it("should match snapshot", () => {
            const wrapper = renderWithProviders(<Header />);

            expect(wrapper).toMatchSnapshot();
        });
    });
});