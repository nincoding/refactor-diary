import Header from "../styles/Header";
const MyHeader = ({ headText, leftChild, rightChild }) => {
  return (
    <Header>
      <div className="left">
        {leftChild}
      </div>
      <div className="center">
        {headText}
      </div>
      <div className="right">
        {rightChild}
      </div>
    </Header>
  )
}

export default MyHeader;