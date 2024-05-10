import styled from "styled-components";

export const StyledHeader = styled.header`
  height: 5vh;
  width: 100%;
  background-color: #0f52ba;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0px;

  .div__header {
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .cart__bttn {
    width: 52px;
    height: 26px;
    border-radius: 8px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;
