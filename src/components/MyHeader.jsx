import Header from "../styles/Header";
const MyHeader = ({ headText, leftChild, rightChild }) => {
  return (
    <Header>
      <div className="left">
        {leftChild}
      </div>
      <div className="center">
        {rightChild}
      </div>
      <div className="right">
        {headText}
      </div>
    </Header>
  )
}

export default MyHeader;