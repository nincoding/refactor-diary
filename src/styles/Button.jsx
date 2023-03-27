import styled, { css } from "styled-components";

const defaultStyle = css`
  background-color: #ececec;
  color: black;
`

const positiveStyle = css`
  background-color: #64c964;
  color: white;
`

const negativeStyle = css`
  background-color: #fd565f;
  color: white;
`

const Button = styled.button`
  cursor: pointer;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 18px;
  white-space: nowrap;
  font-family: 'Nanum Pen Script';
  ${( { type } ) => {
    switch (type) {
      case 'positive' :
        return positiveStyle;
      case 'negative' :
        return negativeStyle;
      default :
        return defaultStyle;
    }
  }}
`;

export default Button;