import styled from "styled-components";

export const EmotionItemWrapper = styled.div`
  cursor: pointer;
  border-radius: 5px;
  padding: 20px 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  &.EmotionItem_off {
    background-color: #ececec;
  }
  &.EmotionItem_on {
    background-color: ${({ color }) => color};
    color: white;
  }
  img {
    width: 50%;
    margin-bottom: 10px;
  }
  span {
    font-size: 18px;
  }
`;

export const EmotionListWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(5, auto);
  gap: 2%;
`;