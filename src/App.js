import React, { useReducer, useRef } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { DiaryStateContext, DiaryDispatchContext } from "./contexts/DiaryContext";
import { createDiary, removeDiary, editDiary } from './store/actions';
import reducer from "./store/reducer";
import Home from "./pages/Home";
import New from "./pages/New";
import Edit from "./pages/Edit";
import Diary from "./pages/Diary";
import { PATH_URL, LOCAL_STORAGE_KEY } from "./constants/stringValues";
import { ID_CONTROLL } from "./constants/numberValues";

function App() {

  const dataId = useRef(ID_CONTROLL.MIN_ID);

  const [ data, dispatch ] = useReducer(reducer, [], 
    (initialState) => {
      const localData = localStorage.getItem(LOCAL_STORAGE_KEY);
      if (localData) {
        return JSON.parse(localData);
      }
      return initialState;
    }
  );

  const onCreate = (date, content, emotion) => {
    dispatch(createDiary(date, content, emotion, dataId.current));
    dataId.current += ID_CONTROLL.MIN_ID;
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
        <Route path={PATH_URL.HOME} element={<Home />} />
        <Route path={PATH_URL.NEW} element={<New />} />
        <Route path={PATH_URL.EDIT} element={<Edit />} />
        <Route path={PATH_URL.DIARY} element={<Diary />} />
      </Routes>
    </div>
    </BrowserRouter>
    </DiaryDispatchContext.Provider>
    </DiaryStateContext.Provider>
  );
}

export default App;
