import { useRef, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { DiaryDispatchContext } from "../contexts/DiaryContext";
import MyHeader from "./MyHeader";
import MyButton from "./MyButton";
import getStringDate from "../utils/getStringDate";
import { Section, MainText, InputDate, Textarea, ControlBox } from "../styles/DiaryEditor";
import { emotionList } from "../data/emotions";
import EmotionItem from "./EmotionItem";
import { EmotionListWrapper } from "../styles/EmotionItem";
import { BUTTON_TYPES } from "../constants/buttonType";

const DiaryEditor = () => {

  const [ date, setDate ] = useState(getStringDate(new Date()));
  const [ emotion, setEmotion ] = useState(3);
  const [ content, setContent ] = useState("");

  const navigate = useNavigate();
  const contentRef = useRef();
  const { onCreate } = useContext(DiaryDispatchContext);

  const handleClickEmote = (emotion) => {
    setEmotion(emotion);
  }

  const handleSubmit = () => {
    if (content.length < 1) {
      contentRef.current.focus();
      return;
    }

    onCreate(date, content, emotion);
    navigate('/', { replace: true });
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
      <Section>
        <ControlBox>
          <MyButton text={"취소하기"} onClick={() => navigate(-1)} />
          <MyButton text={"작성완료"} type={BUTTON_TYPES.POSITIVE} onClick={handleSubmit}/>
        </ControlBox>
      </Section>
    </div>
  );
}

export default DiaryEditor;