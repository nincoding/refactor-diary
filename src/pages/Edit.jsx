import { useSearchParams, useNavigate } from "react-router-dom";

const Edit = () => {

  const [ searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  const id = searchParams.get('id');
  const mode = searchParams.get('mode');
  console.log(id , mode);

  return (
    <div>
      <h1>Edit</h1>
      <p>이곳은 일기 수정 페이지 입니다.</p>
      <button onClick={() => setSearchParams({who: 'nincoding'})}>QS 바꾸기</button>
      <button onClick={() => {
        navigate('/')
      }}>Home으로 가기</button>
       <button onClick={() => {
        navigate(-1)
      }}>뒤로 가기</button>
    </div>
  )
}

export default Edit;