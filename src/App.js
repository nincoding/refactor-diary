import React, { useReducer, useRef } from "react";
import { DiaryStateContext, DiaryDispatchContext } from "./contexts/DiaryContext";
import { createDiary, removeDiary, editDiary } from './store/actions';
import reducer from "./store/reducer";

function App() {

  const [ data, dispatch ] = useReducer(reducer, []);
  const dataId = useRef(0);

  const onCreate = (date, content, emotion) => {
    dispatch(createDiary(date, content, emotion, dataId.current));
    dataId.current += 1;
  };

  const onRemove = (targetId) => {
    dispatch(removeDiary(targetId));
  };

  const onEdit = (targetId, date, content, emotion) => {
    dispatch(editDiary(targetId, date, content, emotion));
  };

  return (
    <DiaryStateContext.Provider value={data}>
    <DiaryDispatchContext.Provider value={{
      onCreate,
      onRemove,
      onEdit
    }}>
    <div className="App">
      <h2>나는 앱이다.</h2>
    </div>
    </DiaryDispatchContext.Provider>
    </DiaryStateContext.Provider>
  );
}

export default App;
