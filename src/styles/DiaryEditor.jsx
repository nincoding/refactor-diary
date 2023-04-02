import styled from "styled-components";

export const DiaryEditor = styled.div`

`;

export const Section = styled.section`
  margin-bottom: 40px;
`;

export const MainText = styled.h4`
  font-size: 22px;
  font-weight: bold;
  margin: 30px 0px;
`;

export const InputDate = styled.input`
  border: none;
  border-radius: 5px;
  background-color: #ececec;
  padding: 10px 20px;
  cursor: pointer;
  font-family: "Nanum Pen Script";
  font-size: 20px;
`;

export const Textarea = styled.textarea`
  font-family: "Nanum Pen Script";
  font-size: 20px;
  box-sizing: border-box;
  width: 100%;
  min-height: 200px;
  resize: vertical;
  border: none;
  border-radius: 5px;
  background-color: #ececec;
  padding: 20px;
`;

export const ControlBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;