import styled from "styled-components";

const Header = styled.header`
  padding-top: 20px;
  padding-bottom: 20px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #e2e2e2;
  > div {
    display: flex;
  }
  .left {
    width: 25%;
    justify-content: start;
  }
  .center {
    width: 50%;
    font-size: 25px;
    justify-content: center;
  }
  .right {
    width: 25%;
    justify-content: end;
  }
`;

export default Header;