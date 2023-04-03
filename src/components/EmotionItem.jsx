import React from "react";
import { EmotionItemWrapper } from "../styles/EmotionItem";
import { emotions } from "../data/emotions";

const EmotionItem = ({ 
  emotion_id, 
  emotion_img, 
  emotion_descript, 
  onClick,
  isSelected, 
}) => {

  const { color } = emotions[emotion_id - 1];

  return (
    <EmotionItemWrapper 
      onClick={() => onClick(emotion_id)}
      className={[
        "EmotionItem",
        isSelected ? "EmotionItem_on" : "EmotionItem_off"
      ].join(" ")}
      color={color}
    >
      <img src={emotion_img} />
      <span>{emotion_descript}</span>
    </EmotionItemWrapper>
  )
}

export default React.memo(EmotionItem);