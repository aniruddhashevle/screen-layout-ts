// #region Global Imports
import * as React from "react";
// #endregion Global Imports

import { Container, Button, ButtonText } from "./styled";

const Footer: React.FunctionComponent = () => {
    return (
        <Container>
            <Button>
                <ButtonText>Click here!</ButtonText>
            </Button>
        </Container>
    );
};

export { Footer };
