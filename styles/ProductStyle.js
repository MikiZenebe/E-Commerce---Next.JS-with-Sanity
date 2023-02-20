import styled from "styled-components";

export const Main = styled.div`
  cursor: pointer;
  transform: scale(1, 1);
  transition: transform 0.5s ease;
  color: #324d67;
  &:hover {
    transform: scale(1.1, 1.1);
  }

  img {
    background: #ebebeb;
    border-radius: 15px;
    transform: scale(1, 1);
    transition: transform 0.5s ease;
  }

  .price {
    font-weight: 800;
    margin-top: 6px;
    color: black;
  }
`;
