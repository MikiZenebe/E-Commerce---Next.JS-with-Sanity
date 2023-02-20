import styled from "styled-components";

export const Main = styled.div`
  background-color: #dcdcdc;
  padding: 100px 40px;
  border-radius: 18px;
  position: relative;
  height: 500px;
  line-height: 0.9;
  width: 100%;

  .small {
    font-size: 20px;
  }

  .img {
    position: absolute;
    top: 0%;
    right: 20%;
    width: 450px;
    height: 450px;
  }
`;

export const Banner = styled.div`
  button {
    background: #e21d5c;
    border: none;
    border-radius: 18px;
    padding: 10px 16px;
    margin: 40px 0px;
    font-size: 18px;
    font-weight: 700;
    cursor: pointer;
    z-index: 10000;
    position: relative;
  }
`;

export const Desc = styled.div`
  position: absolute;
  right: 5%;
  bottom: 5%;
  width: 300px;
  line-height: 1.3;
  display: flex;
  flex-direction: column;
  color: #324d67;

  h5 {
    margin-bottom: 12px;
    align-self: flex-end;
    font-size: 20px;
    font-weight: bold;
  }

  p {
    color: #5f5f5f;
    font-weight: 100;
    text-align: end;
  }
`;
