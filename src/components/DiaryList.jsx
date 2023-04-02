import { useState } from "react";
import ControlMenu from "./ControlMenu";
import { sortOptionList, filterOptionList } from "../data/optionList";
import { SORT_OPTIONS, FILTER_OPTIONS } from "../constants/options";

const DiaryList = ({ diaryList }) => {

  const [ sortType, setSortType ] = useState(SORT_OPTIONS.LATEST);
  const [ filter, setFilter ] = useState(FILTER_OPTIONS.ALL);

  const getProcessedDiaryList = () => {

    const filterCallback = (item) => {
      if (filter === FILTER_OPTIONS.GOOD) {
        return parseInt(item.emotion) <= 3;
      } else {
        return parseInt(item.emotion) > 3;
      }
    }

    const compare = (a, b) => {
      if (sortType === SORT_OPTIONS.LATEST) {
        return parseInt(b.date) - parseInt(a.date);
      } else {
        return parseInt(a.date) - parseInt(b.date);
      }
    }

    const copyList = JSON.parse(JSON.stringify(diaryList));
    const filteredList = filter === FILTER_OPTIONS.ALL ? copyList : copyList.filter((it) => filterCallback(it));
    const sortedList = filteredList.sort(compare);

    return sortedList;
  }

  return (
    <div>
      <ControlMenu value={sortType} onChange={setSortType} optionList={sortOptionList}/>
      <ControlMenu 
         value={filter}
         onChange={setFilter}
         optionList={filterOptionList}
      />
      { getProcessedDiaryList().map((it) => (
        <div key={it.id}>{it.content} {it.emotion}</div>
      ))}
    </div>
  )
}

DiaryList.defaultProps = {
  diaryList : [],
};

export default DiaryList;