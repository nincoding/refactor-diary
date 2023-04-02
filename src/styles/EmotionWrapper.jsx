import styled, { css } from "styled-components";

const EmotionWrapper = styled.div`
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

export default EmotionWrapper;