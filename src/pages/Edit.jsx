import { useNavigate, useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { DiaryStateContext } from "../contexts/DiaryContext";
import DiaryEditor from "../components/DiaryEditor";
import { PATH_URL, MESSAGES, TITLES, TAG_ID } from "../constants/stringValues";

const Edit = () => {

  const [ originData, setOriginData ] = useState();

  const navigate = useNavigate();
  const { id } = useParams();
  const diaryList = useContext(DiaryStateContext);

  useEffect(() => {
    const titleElement = document.getElementsByTagName(TAG_ID.TITLE)[0];
    titleElement.innerHTML = `${TITLES.MAIN} - ${id}${TITLES.EDIT}`;
  }, []);

  useEffect(() => {
    if (diaryList.length >= 1) {
      const targetDiary = diaryList.find((it) => parseInt(it.id) === parseInt(id))

      if (targetDiary) {
        setOriginData(targetDiary);
      } else {
        alert(MESSAGES.NO_DATA_TEXT);
        navigate(PATH_URL.HOME, { replace: true });
      }
    };
  }, [id, diaryList]);

  return (
    <div>
      { originData && <DiaryEditor isEdit={true} originData={originData} /> }
    </div>
  )
}

export default Edit;