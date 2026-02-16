import styled from "styled-components";

export const MainPainelStyled = styled.section`
  width: 950px;
  max-width: 90%;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  background-color: rgb(253, 216, 52);
  box-shadow: 1px 1px 5px 0 black;
  padding: 20px;
`;

export const QuestionBoardStyled = styled.div`
  position: relative;
  width: 100%;
`;

export const QuestionStyled = styled.div`
  .option-label {
    display: block;
    width: 100%;
    background-color: #ffffff;
    margin-bottom: 5px;
    padding: 20px 0;
    text-align: center;
    cursor: pointer;
    transition: background-color 0.3s;
    text-align: center;
    border-radius: 5px;
  }

  .option-label input[type="radio"] {
    opacity: 0;
    position: absolute;
  }

  .option-label:has(input[type="radio"]:checked) {
    background-color: rgb(255, 236, 69);
    color: rgb(48, 48, 48);
  }

  &.question-desactive {
    display: none;
  }

  &.question-active {
    display: block;
  }
`;
