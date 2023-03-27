import Button from '../styles/Button';

const MyButton = ({ text, type, onClick }) => {

  const btnType = ['positive', 'negative'].includes(type) ? type : 'default';

  return (
    <Button
      type={btnType}
      onClick={onClick}
    >
      {text}
    </Button>
  )
}

MyButton.defaultProps = {
  type: 'default',
};

export default MyButton;