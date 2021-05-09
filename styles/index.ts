import styled, { StyledComponent } from "styled-components";

export const Container: StyledComponent<"div", any, {}, never> = styled.div`
  width: 100vw;
  min-height: 100vw;
  background-color: bisque;
  box-sizing: border-box;
`;
