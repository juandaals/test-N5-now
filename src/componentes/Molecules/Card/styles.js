import styled from "styled-components";

export const CardStyle = styled.div`
  
  position: relative;
  width: 20%;
  margin: 20px;
  height: 30vh;
  border-radius: 20px;
  background-size: cover;
  background-position: center;
  box-shadow: 0 20px 25px rgba(0, 0, 0, 0.349);
  transform: ${(props) =>
    props.hover
      ? 'rotateY(180deg)'
      : 'rotateY(0deg)'};
  .card__container {
    &-img {
      width: 100%;
      height: 100%;
      border-radius: 20px;
    }
  }
  .container__backcard{
    padding: 15px;
    background-image: linear-gradient(to right, #f6d365 0%, #fda085 51%, #f6d365 100%);
    height: 27vh;
  border-radius: 20px;
  background-size: cover;
  background-position: center;
  box-shadow: 0 20px 25px rgba(0, 0, 0, 0.349);
    &-list{
      font-size: 1.9rem;
      color:red;
      list-style: none;
      font-family: 'Courier New', Courier, monospace;
      font-weight: bold;
        text-align: center;
        height
  }
  }
  
`;
