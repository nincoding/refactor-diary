import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { DiaryStateContext } from "../contexts/DiaryContext";
import MyHeader from "../components/MyHeader";
import MyButton from "../components/MyButton";
import getStringDate from "../utils/getStringDate";
import { emotionList, emotions } from "../data/emotions";
import { DiaryEmotionWrapper, DiarySection, DiaryText } from "../styles/EmotionWrapper";
import { DiaryContent, DiaryWrapper } from "../styles/DiaryDetail";
import { MOVE, PATH_URL, MESSAGES, TITLES, TAG_ID } from "../constants/stringValues";

const Diary = () => {

  const { id } = useParams();
  const diaryList = useContext(DiaryStateContext);
  const navigate = useNavigate();

  const [ data, setData ] = useState();

  useEffect(() => {
    const titleElement = document.getElementsByTagName(TAG_ID.TITLE)[0];
    titleElement.innerHTML = `${TITLES.MAIN} - ${id}${TITLES.DIARY}`;
  }, []);

  useEffect(() => {
    const targetDiary= diaryList.find((it) => parseInt(it.id) === parseInt(id));

    if (targetDiary) {
      setData(targetDiary);
    } else {
      alert(MESSAGES.NO_DATA_TEXT);
      navigate(PATH_URL.HOME, { replace : true });
    }
  }, [id, diaryList])

  if (!data) {
    return (
      <div className="DiaryPage">{MESSAGES.LODING_TEXT}</div>
    )
  } else {

    const currentEmotionData = emotionList.find(
      (it) => parseInt(it.emotion_id) === parseInt(data.emotion)
    );
    const { color } = emotions[currentEmotionData.emotion_id - 1];

    return (
      <div className="DiaryPage">
        <MyHeader 
          headText={`${getStringDate(new Date(data.date))} 기록`}
          leftChild={<MyButton text={MOVE.BACK} onClick={() => navigate(-1)}/>}
          rightChild={<MyButton text={MOVE.EDIT} onClick={() => navigate(`${PATH_URL.EDIT_FRONT}${data.id}`)} />}
        />
        <article>
          <DiarySection>
            <DiaryText>오늘의 감정</DiaryText>
            <DiaryEmotionWrapper color={color} >
              <img className="diary_img" src={currentEmotionData.emotion_img} />
              {currentEmotionData.emotion_descript}
            </DiaryEmotionWrapper>
          </DiarySection>
          <DiarySection>
            <DiaryText>오늘의 일기</DiaryText>
            <DiaryWrapper>
              <DiaryContent>{data.content}</DiaryContent>
            </DiaryWrapper>
          </DiarySection>
        </article>
      </div>
    )
  }
}

export default Diary;