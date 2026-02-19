import styled from "styled-components";

export const MainPainelStyled = styled.section`
  width: 950px;
  max-width: 90%;
  position: relative;
  text-align: center;
  background-color: rgba(247, 181, 83, 0.9);
  box-shadow: 1px 1px 5px 5px rgba(2, 2, 2, 0.267);
  padding: 20px;
  margin: 4.5rem auto;
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
    margin-bottom: 15px;
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

  .option-label:hover {
    background-color: rgb(253, 216, 52);
  }

  .option-correct {
    background-color: #4caf50 !important;
    color: white !important;
  }

  .option-wrong {
    background-color: red !important;
    color: white !important;
    box-shadow: 1px 1px 5px 5px rgb(255 166 32);
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
