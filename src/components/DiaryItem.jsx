import React from "react";
import { useNavigate } from "react-router-dom";
import DiaryItemWrapper from "../styles/DiaryItemWrapper";
import { EmotionWrapper } from "../styles/EmotionWrapper";
import { emotions } from "../data/emotions";
import InfoWrapper from "../styles/InfoWrapper";
import BtnWrapper from "../styles/BtnWrapper";
import MyButton from "./MyButton";
import { MOVE, PATH_URL } from "../constants/stringValues";
import { EMOTION, CONTENT } from "../constants/numberValues";

const DiaryItem = ({ id, emotion, content, date }) => {

  const { name, color } = emotions[emotion - EMOTION.INIT_NUMBER];
  const strDate = new Date(parseInt(date)).toLocaleDateString();
  const navigate = useNavigate();

  const goDetail = () => {
    navigate(`${PATH_URL.DIARY_FRONT}${id}`);
  }

  const goEdit = () => {
    navigate(`${PATH_URL.EDIT_FRONT}${id}`);
  }

  return (
    <DiaryItemWrapper>
      <EmotionWrapper color={color} onClick={goDetail}>
        <img src={process.env.PUBLIC_URL + `assets/${name}.png`} alt={`Emotion ${emotion}`}/>
      </EmotionWrapper>
      <InfoWrapper onClick={goDetail}>
        <div className="diary_date">
          {strDate}
        </div>
        <div className="diary_content_preview">
          {content.slice(CONTENT.NO_LENGTH, CONTENT.MAX_LENGTH)}
        </div>
      </InfoWrapper>
      <BtnWrapper>
        <MyButton text={MOVE.EDIT} onClick={goEdit}/>
      </BtnWrapper>
    </DiaryItemWrapper>
  )
}

export default React.memo(DiaryItem);