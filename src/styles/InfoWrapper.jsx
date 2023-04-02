import styled from "styled-components";

const InfoWrapper = styled.div`
  cursor: pointer;
  flex-grow: 1;
  margin-left: 20px;
  .diary_date {
    font-weight: bold;
    font-size: 25px;
    margin-bottom: 5px;
  }
  .diary_content_preview {
    font-size: 18px;
  }
`;

export default InfoWrapper;