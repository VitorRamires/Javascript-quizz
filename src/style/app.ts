import styled from "styled-components";
import type { BgInterface } from "../types/types";

export const View = styled.div<BgInterface>`
  width: 100%;
  height: 100%;
  position: relative;
  background-image: ${(props) => `url(${props.background})`};
  background-size: cover;
  background-position: center;
`;
