import styled from "styled-components";

export const Main = styled.div`
  text-align: center;
  color: #324d67;
  margin: 40px 0px;
`;

export const NavBar = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 6px 18px;
  position: relative;

  .logo {
    color: gray;
    font-size: 18px;
  }

  button {
    font-size: 20px;
    color: gray;
    cursor: pointer;
    position: relative;
    transition: transform 0.4s ease;
    border: none;
    background-color: transparent;

    &:hover {
      transform: scale(1.1, 1.1);
    }

    span {
      position: absolute;
      right: -8px;
      font-size: 12px;
      color: white;
      background-color: #f02d34;
      width: 18px;
      height: 18px;
      border-radius: 50%;
      text-align: center;
      font-weight: 600;
    }
  }
`;

export const ProductStyle = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 4rem;
  margin-top: 20px;
  width: 100%;
`;

export const FooterBannerSty = styled.div`
  background-color: #f02d34;
  padding: 100px 40px;
  border-radius: 15px;
  position: relative;
  height: 400px;
  line-height: 0;
  color: white;
  width: 100%;
  margin-top: 120px;

  .desc {
    display: flex;
    justify-content: space-between;

    .left h3 {
      font-weight: 900;
      font-size: 80px;
      margin-left: 25px;
    }

    .left p {
      margin: 18px;
    }

    .right {
      line-height: 0;

      h3 {
        font-weight: 800;
        font-size: 60px;
      }

      p {
        font-size: 18px;
      }

      button {
        background-color: white;
        color: red;
        border: none;
        padding: 10px 16px;
        border-radius: 15px;
        margin-top: 40px;
        font-size: 18px;
        font-weight: 500;
        cursor: pointer;
      }
    }

    img {
      position: absolute;
      top: -25%;
      left: 25%;
    }
  }
`;

export const FooterStyle = styled.div`
  color: #324d67;
  text-align: center;
  margin-top: 20px;
  padding: 30px 10px;
  font-weight: 700;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  justify-content: center;

  .icons {
    font-size: 30px;
    display: flex;
    gap: 10px;
  }
`;
