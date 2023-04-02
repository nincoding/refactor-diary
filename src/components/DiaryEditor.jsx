import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import MyHeader from "./MyHeader";
import MyButton from "./MyButton";
import getStringDate from "../utils/getStringDate";
import { Section, MainText, InputDate, Textarea } from "../styles/DiaryEditor";
import { emotionList } from "../data/emotions";
import EmotionItem from "./EmotionItem";
import { EmotionListWrapper } from "../styles/EmotionItem";

const DiaryEditor = () => {

  const [ date, setDate ] = useState(getStringDate(new Date()));
  const [ emotion, setEmotion ] = useState(3);
  const [ content, setContent ] = useState("");

  const navigate = useNavigate();
  const contentRef = useRef();

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
      <Section>
        <MainText>오늘의 일기</MainText>
          <Textarea 
            ref={contentRef} 
            value={content} 
            onChange={(e) => setContent(e.target.value)}
            placeholder="오늘은 어땠나요?"
          />
      </Section>
    </div>
  );
}

export default DiaryEditor;