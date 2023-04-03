import { useContext, useEffect, useState } from 'react';
import MyHeader from '../components/MyHeader';
import MyButton from '../components/MyButton';
import { DiaryStateContext } from '../contexts/DiaryContext';
import DiaryList from '../components/DiaryList';
import { MOVE, TAG_ID, TITLES } from '../constants/stringValues';
import { CONTENT, DATE_NUMBERS } from '../constants/numberValues';

const Home = () => {

  const [ curDate, setCurDate ] = useState(new Date());
  const [ data, setData ] = useState([]);
  
  const diaryList = useContext(DiaryStateContext);

  const headText = `${curDate.getFullYear()}년 ${curDate.getMonth() + DATE_NUMBERS.START_DATE}월`;

  useEffect(() => {
    const titleElement = document.getElementsByTagName(TAG_ID.TITLE)[0];
    titleElement.innerHTML = `${TITLES.MAIN}`;
  }, []);

  useEffect(() => {

    if (diaryList.length >= CONTENT.MIN_LENGTH) {

    const firstDay = new Date(
      curDate.getFullYear(),
      curDate.getMonth(),
      DATE_NUMBERS.START_DATE
    ).getTime();

    const lastDay = new Date(
      curDate.getFullYear(),
      curDate.getMonth() + DATE_NUMBERS.START_DATE,
      DATE_NUMBERS.ZERO,
      DATE_NUMBERS.END_HOUR,
      DATE_NUMBERS.END_TIME,
      DATE_NUMBERS.END_TIME
    ).getTime();

    setData(diaryList.filter((it) => firstDay <= it.date && it.date <= lastDay));

  }}, [diaryList, curDate]);

  const increaseMonth = () => {
    setCurDate(new Date(curDate.getFullYear(), curDate.getMonth() + DATE_NUMBERS.START_DATE, curDate.getDate()));
  }

  const decreaseMonth = () => {
    setCurDate(new Date(curDate.getFullYear(), curDate.getMonth() - DATE_NUMBERS.START_DATE, curDate.getDate()));
  }

  return (
    <div>
      <MyHeader 
        headText={headText}
        leftChild={<MyButton text={MOVE.BACK} onClick={decreaseMonth}/>}
        rightChild={<MyButton text={MOVE.FORTH} onClick={increaseMonth}/>}
      />
      <DiaryList diaryList={data} />
    </div>
  )
}

export default Home;