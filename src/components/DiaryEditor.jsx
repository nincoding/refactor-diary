import { useState } from "react";
import { useNavigate } from "react-router-dom";
import MyHeader from "./MyHeader";
import MyButton from "./MyButton";
import getStringDate from "../utils/getStringDate";
import { Section, MainText, InputDate } from "../styles/DiaryEditor";

const DiaryEditor = () => {

  const [ date, setDate ] = useState(getStringDate(new Date()));
  const navigate = useNavigate();

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
    </div>
  );
}

export default DiaryEditor;