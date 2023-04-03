import { useEffect } from "react";
import DiaryEditor from "../components/DiaryEditor";
import { TITLES, TAG_ID } from "../constants/stringValues";

const New = () => {

  useEffect(() => {
    const titleElement = document.getElementsByTagName(TAG_ID.TITLE)[0];
    titleElement.innerHTML = `${TITLES.MAIN} - ${TITLES.NEW}`;
  }, []);

  return (
    <div>
      <DiaryEditor />
    </div>
  )
}

export default New;