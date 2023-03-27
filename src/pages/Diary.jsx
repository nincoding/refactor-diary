import { useParams } from "react-router-dom";

const Diary = () => {

  // URL경로에 사용된 id를 가져옵니다.
  const { id } = useParams();

  return (
    <div>
      <h1>Diary</h1>
      <p>이곳은 일기 상세 페이지 입니다.</p>
    </div>
  )
}

export default Diary;