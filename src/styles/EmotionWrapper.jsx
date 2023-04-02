import styled, { css } from "styled-components";
import { MainText, Section } from "./DiaryEditor";

export const EmotionWrapper = styled.div`
  cursor: pointer;
  min-width: 120px;
  height: 80px;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  background-color: ${({ color }) => color};
  > img {
    width: 50%;
  }
`;

export const DiaryEmotionWrapper = styled(EmotionWrapper)`
  width: 250px;
  height: 250px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  font-size: 25px;
  color: white;
`;

export const DiarySection = styled(Section)`
  width: 100%;
  margin-bottom: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

export const DiaryText = styled(MainText)`
  font-size: 22px;
  font-weight: bold;
`;