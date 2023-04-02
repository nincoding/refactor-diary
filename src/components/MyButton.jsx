import Button from '../styles/Button';
import { BUTTON_TYPES } from '../constants/buttonType';

const MyButton = ({ text, type, onClick }) => {

  const btnType = [BUTTON_TYPES.POSITIVE, BUTTON_TYPES.NEGATIVE].includes(type) ? type : BUTTON_TYPES.DEFAULT;

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
  type: BUTTON_TYPES.DEFAULT,
};

export default MyButton;