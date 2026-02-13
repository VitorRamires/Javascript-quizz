import styled from "styled-components";

export const MainPainelStyled = styled.section`
  width: 950px;
  max-width: 90%;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  background-color: #f1e20b;
  box-shadow: 1px 1px 5px 0 black;
  padding: 10px 0;
`;

export const QuestionBoardStyled = styled.div`
  position: relative;
  width: 100%;
  height: 550px;
  overflow-y: scroll;
  padding: 10px;
`;
