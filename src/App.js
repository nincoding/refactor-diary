import React from "react";
import { DiaryStateContext, DiaryDispatchContext } from "./contexts/DiaryContext";

function App() {

  return (
    <DiaryStateContext.Provider>
    <DiaryDispatchContext.Provider>
    <div className="App">
      <h2>나는 앱이다.</h2>
    </div>
    </DiaryDispatchContext.Provider>
    </DiaryStateContext.Provider>
  );
}

export default App;
