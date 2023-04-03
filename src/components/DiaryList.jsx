import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ControlMenu from "./ControlMenu";
import { sortOptionList, filterOptionList } from "../data/optionList";
import { SORT_OPTIONS, FILTER_OPTIONS } from "../constants/options";
import { BUTTON_TYPES } from "../constants/buttonType";
import MyButton from "./MyButton";
import MenuWrapper from "../styles/MenuWrapper";
import DiaryItem from "./DiaryItem";
import { MOVE, PATH_URL } from "../constants/stringValues";

const DiaryList = ({ diaryList }) => {

  const navigate = useNavigate();

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
    <div className="DiaryList">
      <MenuWrapper>
      <div className="left_col">
        <ControlMenu 
        value={sortType} 
        onChange={setSortType} 
        optionList={sortOptionList}/>
        <ControlMenu 
         value={filter}
         onChange={setFilter}
         optionList={filterOptionList}
        />
      </div>
      <div className="right_col">
        <MyButton type={BUTTON_TYPES.POSITIVE} text={MOVE.CREATE} onClick={() => navigate(PATH_URL.NEW)}/>
      </div>
      </MenuWrapper>
      { getProcessedDiaryList().map((it) => (
        <DiaryItem key={it.id} {...it}/>
      ))}
    </div>
  )
}

DiaryList.defaultProps = {
  diaryList : [],
};

export default DiaryList;