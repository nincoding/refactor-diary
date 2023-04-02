import { useState } from "react";
import { useNavigate } from "react-router-dom";
import MyHeader from "./MyHeader";
import MyButton from "./MyButton";
import getStringDate from "../utils/getStringDate";
import { Section, MainText, InputDate } from "../styles/DiaryEditor";
import { emotionList } from "../data/emotions";
import EmotionItem from "./EmotionItem";
import { EmotionListWrapper } from "../styles/EmotionItem";

const DiaryEditor = () => {

  const [ date, setDate ] = useState(getStringDate(new Date()));
  const [ emotion, setEmotion ] = useState(3);
  const navigate = useNavigate();

  const handleClickEmote = (emotion) => {
    setEmotion(emotion);
  }

  return (
    <div>
      <MyHeader 
        headText={"새로운 일기 쓰기"}
        leftChild={<MyButton 
          text={"< 뒤로가기"}
          onClick={() => navigate(-1)}
        />}
      />
      <Section>
        <MainText>오늘은 언제인가요?</MainText>
          <InputDate 
            className="input-date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            type="date"
          />
      </Section>
      <Section>
        <MainText>오늘의 감정</MainText>
        <EmotionListWrapper>
          {emotionList.map((it) => (
            <EmotionItem 
              key={it.emotion_id} 
              {...it} 
              onClick={handleClickEmote}
              isSelected={it.emotion_id === emotion}
            />
          ))}
        </EmotionListWrapper>
      </Section>
    </div>
  );
}

export default DiaryEditor;