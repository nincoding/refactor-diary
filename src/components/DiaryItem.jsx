import { useNavigate } from "react-router-dom";
import DiaryItemWrapper from "../styles/DiaryItemWrapper";
import EmotionWrapper from "../styles/EmotionWrapper";
import { emotions } from "../data/emotions";
import InfoWrapper from "../styles/InfoWrapper";
import BtnWrapper from "../styles/BtnWrapper";
import MyButton from "./MyButton";

const DiaryItem = ({ id, emotion, content, date }) => {

  const { name, color } = emotions[emotion - 1];
  const strDate = new Date(parseInt(date)).toLocaleDateString();
  const navigate = useNavigate();

  const goDetail = () => {
    navigate(`/diary/${id}`);
  }

  const goEdit = () => {
    navigate(`/edit/${id}`);
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
          {content.slice(0, 25)}
        </div>
      </InfoWrapper>
      <BtnWrapper>
        <MyButton text={"수정하기"} onClick={goEdit}/>
      </BtnWrapper>
    </DiaryItemWrapper>
  )
}

export default DiaryItem;