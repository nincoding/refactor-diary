import React, { useReducer, useRef } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { DiaryStateContext, DiaryDispatchContext } from "./contexts/DiaryContext";
import { createDiary, removeDiary, editDiary } from './store/actions';
import reducer from "./store/reducer";
import Home from "./pages/Home";
import New from "./pages/New";
import Edit from "./pages/Edit";
import Diary from "./pages/Diary";
import MyButton from "./components/MyButton";

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
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new" element={<New />} />
        <Route path="/edit" element={<Edit />} />
        <Route path="/diary/:id" element={<Diary />} />
      </Routes>
    </div>
    </BrowserRouter>
    </DiaryDispatchContext.Provider>
    </DiaryStateContext.Provider>
  );
}

export default App;
