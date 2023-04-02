import { useNavigate } from "react-router-dom";
import MyButton from "../components/MyButton";
import MyHeader from "../components/MyHeader";
import { useState } from "react";

const getStringDate = (date) => {
  return date.toISOString().slice(0, 10);
}

const New = () => {

  const [ date, setDate ] = useState(getStringDate(new Date()));
  const navigate = useNavigate();

  return (
    <div>
      <MyHeader headText={'새로운 일기 쓰기'} leftChild={<MyButton text={'뒤로가기'} onClick={() => navigate(-1)}/>} />
      <div>
        <section>
          <h4>오늘은 언제인가요?</h4>
          <div className="input-box">
            <input 
              className="input-bate" 
              type="date" 
              value={date} 
              onChange={(e) => setDate(e.target.value)}
            />
          </div>
        </section>
      </div>
    </div>
  )
}

export default New;