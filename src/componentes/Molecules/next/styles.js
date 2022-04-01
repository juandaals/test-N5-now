import styled from "styled-components";

export const ButtonStyles = styled.div`

  display: flex;
  align-items: center;
  justify-content: space-between;
  align-content: center;
  .container__button {
    &-p {
      font-size: 1.5rem;
    }
    &-btn {
 
      background-color: ${({color}) => color }; /* Green */
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    border-radius: 15px;
    }
  }
`;
