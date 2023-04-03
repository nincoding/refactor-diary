import React, { useRef, useState, useContext, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { DiaryDispatchContext } from "../contexts/DiaryContext";
import MyHeader from "./MyHeader";
import MyButton from "./MyButton";
import getStringDate from "../utils/getStringDate";
import { MainText, InputDate, Textarea, ControlBox } from "../styles/DiaryEditor";
import { emotionList } from "../data/emotions";
import EmotionItem from "./EmotionItem";
import { BUTTON_TYPES } from "../constants/buttonType";
import { MOVE, PATH_URL, MESSAGES } from "../constants/stringValues";
import { MOVE_CONTROLL, EMOTION, CONTENT } from "../constants/numberValues";

const DiaryEditor = ({ isEdit, originData }) => {

  const [ date, setDate ] = useState(getStringDate(new Date()));
  const [ emotion, setEmotion ] = useState(EMOTION.MIDDLE_NUMBER);
  const [ content, setContent ] = useState("");

  const navigate = useNavigate();
  const contentRef = useRef();
  const { onCreate, onEdit, onRemove } = useContext(DiaryDispatchContext);

  const handleClickEmote = useCallback((emotion) => {
    setEmotion(emotion);
  }, []);

  const handleSubmit = () => {
    if (content.length < CONTENT.MIN_LENGTH) {
      contentRef.current.focus();
      return;
    }

    if (window.confirm(isEdit ? MESSAGES.GO_EDIT : MESSAGES.GO_CREATE)) {
      if (!isEdit) {
        onCreate(date, content, emotion);
      } else {
        onEdit(originData.id, date, content, emotion);
      }
    }

    navigate(PATH_URL.HOME, { replace: true });
  }

  const handleRemove = () => {
    if (window.confirm(MESSAGES.GO_REMOVE)) {
      onRemove(originData.id);
      navigate(PATH_URL.HOME, { replace: true });
    }
  }

  useEffect(() => {
    if (isEdit) {
      setDate(getStringDate(new Date(parseInt(originData.date))));
      setEmotion(originData.emotion);
      setContent(originData.content);
    }
  }, [isEdit, originData]);

  return (
    <div>
      <MyHeader 
        headText={ isEdit ? MESSAGES.HEAD_EDIT_TEXT : MESSAGES.HEAD_CREATE_TEXT }
        leftChild={<MyButton 
          text={MOVE.BACK_TEXT}
          onClick={() => navigate(MOVE_CONTROLL.BACK_NUMBER)}
        />}
        rightChild={ isEdit && (
          <MyButton 
            text={MOVE.REMOVE}
            type={BUTTON_TYPES.NEGATIVE}
            onClick={handleRemove}
          />
        )}
      />
      <section>
        <MainText>오늘은 언제인가요?</MainText>
          <InputDate 
            className="input-date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            type="date"
          />
      </section>
      <section>
        <MainText>오늘의 감정</MainText>
        <div className="emotion_list_wrapper">
          {emotionList.map((it) => (
            <EmotionItem 
              key={it.emotion_id} 
              {...it} 
              onClick={handleClickEmote}
              isSelected={it.emotion_id === emotion}
            />
          ))}
        </div>
      </section>
      <section>
        <MainText>오늘의 일기</MainText>
          <Textarea 
            ref={contentRef} 
            value={content} 
            onChange={(e) => setContent(e.target.value)}
            placeholder={MESSAGES.INIT_TEXTAREA}
          />
      </section>
      <section>
        <ControlBox>
          <MyButton text={MOVE.CANCLE} onClick={() => navigate(MOVE_CONTROLL.BACK_NUMBER)} />
          <MyButton text={MOVE.COMPLETED} type={BUTTON_TYPES.POSITIVE} onClick={handleSubmit}/>
        </ControlBox>
      </section>
    </div>
  );
}

export default React.memo(DiaryEditor);