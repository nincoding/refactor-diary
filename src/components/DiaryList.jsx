import { useState } from "react";
import ControlMenu from "./ControlMenu";

const DiaryList = ({ diaryList }) => {

  const [ sortType, setSortType ] = useState('latest');

  const getProcessedDiaryList = () => {
    const compare = (a, b) => {
      if (sortType === 'latest') {
        return parseInt(b.date) - parseInt(a.date);
      } else {
        return parseInt(a.date) - parseInt(b.date);
      }
    }

    const copyList = JSON.parse(JSON.stringify(diaryList));
    const sortedList = copyList.sort(compare);

    return sortedList;
  }

  return (
    <div>
      <ControlMenu value={sortType} onChange={setSortType} />
      { getProcessedDiaryList().map((it) => (
        <div key={it.id}>{it.content}</div>
      ))}
    </div>
  )
}

DiaryList.defaultProps = {
  diaryList : [],
};

export default DiaryList;