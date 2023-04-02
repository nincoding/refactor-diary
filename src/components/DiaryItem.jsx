import DiaryItemWrapper from "../styles/DiaryItemWrapper";
import EmotionWrapper from "../styles/EmotionWrapper";
import emotions from "../data/emotions";

const DiaryItem = ({ id, emotion, content, date }) => {

  const { name, color } = emotions[emotion - 1];

  return (
    <DiaryItemWrapper>
      <EmotionWrapper color={color} >
        <img src={process.env.PUBLIC_URL + `assets/${name}.png`} alt={`Emotion ${emotion}`}/>
      </EmotionWrapper>
      <div></div>
      <div></div>
    </DiaryItemWrapper>
  )
}

export default DiaryItem;