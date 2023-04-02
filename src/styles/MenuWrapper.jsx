import styled, { css } from "styled-components";

const MenuWrapper = styled.div`
  margin-top: 20px;
  margin-bottom: 30px;
  display: flex;
  justify-content: space-between;
  .right_col {
    flex-grow: 1;
    > button {
      width: 100%;
    }
  }
`;

export default MenuWrapper;