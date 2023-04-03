import React, { useContext, useEffect, useReducer, useRef } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { DiaryStateContext, DiaryDispatchContext } from "./contexts/DiaryContext";
import { initDiary, createDiary, removeDiary, editDiary } from './store/actions';
import reducer from "./store/reducer";
import Home from "./pages/Home";
import New from "./pages/New";
import Edit from "./pages/Edit";
import Diary from "./pages/Diary";

function App() {

  const [ data, dispatch ] = useReducer(reducer, []);

  useEffect(() => {
    const localData = localStorage.getItem('diary');
    
    if (localData) {
      const diaryList = JSON.parse(localData).sort((a, b) => parseInt(b.id) - parseInt(a.id));
      dataId.current =  diaryList.length > 0 ? parseInt(diaryList[0].id) + 1 : 1;

      dispatch(initDiary(diaryList));
    } else {
      dataId.current = 1;
    }
  }, [])

  const dataId = useRef(1);

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
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new" element={<New />} />
        <Route path="/edit/:id" element={<Edit />} />
        <Route path="/diary/:id" element={<Diary />} />
      </Routes>
    </div>
    </BrowserRouter>
    </DiaryDispatchContext.Provider>
    </DiaryStateContext.Provider>
  );
}

export default App;
