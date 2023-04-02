import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { DiaryStateContext } from "../contexts/DiaryContext";
import MyHeader from "../components/MyHeader";
import MyButton from "../components/MyButton";
import getStringDate from "../utils/getStringDate";
import { emotionList, emotions } from "../data/emotions";
import { DiaryEmotionWrapper, DiarySection, DiaryText } from "../styles/EmotionWrapper";

const Diary = () => {

  const { id } = useParams();
  const diaryList = useContext(DiaryStateContext);
  const navigate = useNavigate();

  const [ data, setData ] = useState();

  useEffect(() => {
    const targetDiary= diaryList.find((it) => parseInt(it.id) === parseInt(id));

    if (targetDiary) {
      setData(targetDiary);
    } else {
      alert("없는 일기입니다.");
      navigate('/', { replace : true });
    }
  }, [id, diaryList])

  if (!data) {
    return (
      <div className="DiaryPage">로딩중입니다...</div>
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
          leftChild={<MyButton text={'< 뒤로가기'} onClick={() => navigate(-1)}/>}
          rightChild={<MyButton text={'수정하기'} onClick={() => navigate(`/edit/${data.id}`)} />}
        />
        <article>
          <DiarySection>
            <DiaryText>오늘의 감정</DiaryText>
            <DiaryEmotionWrapper color={color} >
              <img className="diary_img" src={currentEmotionData.emotion_img} />
              {currentEmotionData.emotion_descript}
            </DiaryEmotionWrapper>
          </DiarySection>
        </article>
      </div>
    )
  }
}

export default Diary;