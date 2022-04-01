import styled from "styled-components";

export const ContainerCard = styled.div`
  
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 1rem 1rem;
  border-radius: 1rem;
  padding: 1rem;
  background-color: ${({ color }) => color};

  .card__container:nth-child(2n) {
    opacity: 0.5;
    
  }

  @media (max-width: 426px) {
    grid-template-columns: 1fr;
  }

  @media (min-width: 427px) and (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`;
