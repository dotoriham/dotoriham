import React from "react";
import { ThemeProvider } from "@dotoriham/styled";
import styled from "styled-components";

const decorators = [
  (Story) => (
    <Container>
      <ThemeProvider>
        <div>
          <Story />
        </div>
      </ThemeProvider>
    </Container>
  ),
];

const Container = styled.div`
  min-height: 100vh;
  width: 100%;
`;

export default decorators;
