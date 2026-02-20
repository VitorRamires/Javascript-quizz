import styled from "styled-components";

export const MainPainelStyled = styled.section`
  width: 950px;
  max-width: 90%;
  position: relative;
  text-align: center;
  background-color: rgba(247, 181, 83, 0.2);
  box-shadow: 1px 1px 5px 5px rgba(2, 2, 2, 0.267);
  padding: 20px;
  margin: 5rem auto;
  border-radius: 10px;

  h1 {
    margin: 35px;
  }

  button {
    width: 150px;
    max-width: 100%;
    padding: 10px 0;
    border-radius: 2px;
    outline: none;
    border: none;
    cursor: pointer;
    background-color: rgb(255, 157, 10);
    font-weight: bold;
    transition: all 0.2s;
    margin-top: 35px;
  }

  button:hover {
    background-color: rgba(247, 181, 83, 1);
  }
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
    background-color: rgb(255 192 82);
  }

  .option-correct {
    background-color: #4caf50 !important;
    color: white !important;
  }

  .option-wrong {
    background-color: red !important;
    color: white !important;
    box-shadow: 1px 1px 0px 5px rgb(255 166 32);
  }

  .option-label:has(input[type="radio"]:checked) {
    background-color: rgb(255, 236, 69);
    color: rgb(48, 48, 48);
  }

  span {
    margin-right: 12px;
  }
`;
