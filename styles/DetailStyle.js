import styled from "styled-components";

export const Main = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 40px;
  margin: 40px;
  margin-top: 60px;
  color: #324d67;

  .img-detail {
    width: 350px;
    height: 350px;
  }
`;

export const SmallImg = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 20px;

  .small-image {
    border-radius: 8px;
    background-color: #ebebeb;
    width: 70px;
    height: 70px;
    cursor: pointer;
  }

  .selected-image {
    background-color: #f02d34;
  }
`;

export const Description = styled.div`
  h4 {
    margin-top: 10px;
  }

  p {
    margin-top: 10px;
  }

  .price {
    font-weight: 700;
    font-size: 26px;
    margin-top: 30px;
    color: #f02d34;
  }
`;

export const Review = styled.div`
  color: #f02d34;
  margin-top: 10px;
  display: flex;
  gap: 5px;
  align-items: center;

  p {
    color: #324d67;
    margin-top: 0px;
  }
`;

export const Quantity = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 10px;
  align-items: center;

  .quant-desc {
    border: 1px solid gray;
    padding: 6px;
    span {
      font-size: 16px;
      padding: 6px 12px;
      cursor: pointer;
    }

    .minus {
      border-right: 1px solid gray;
      color: #f02d34;
    }

    .num {
      border-right: 1px solid gray;
      font-size: 20px;
    }

    .plus {
      color: #31a831;
    }
  }
`;

export const Button = styled.div`
  display: flex;
  gap: 30px;

  .cart {
    padding: 10px 20px;
    border: 1px solid #f03d34;
    margin-top: 40px;
    font-size: 18px;
    font-weight: 500;
    background-color: white;
    color: #f02d34;
    cursor: pointer;
    width: 200px;
    transform: scale(1, 1);
    transition: transform 0.5s ease;

    &:hover {
      transform: scale(1.1, 1.1);
    }
  }

  .buy {
    width: 200px;
    padding: 10px 20px;
    background-color: #f02d34;
    color: white;
    border: none;
    margin-top: 40px;
    font-size: 18px;
    font-weight: 500;
    cursor: pointer;

    transition: transform 0.5s ease;

    &:hover {
      transform: scale(1.1, 1.1);
    }
  }
`;

export const MayLike = styled.div`
  margin-top: 120px;

  h2 {
    text-align: center;
    margin: 50px;
    color: #324d67;
    font-size: 28px;
  }

  .marquee {
    position: relative;
    height: 400px;
    width: 100%;
    overflow-x: hidden;

    .track {
      position: absolute;
      white-space: nowrap;
      will-change: transform;
      animation: marquee 15s linear infinite;
      width: 180%;

      &:hover {
        animation-play-state: paused;
      }

      @keyframes marquee {
        from {
          transform: translateX(0);
        }
        to {
          transform: translateX(-50%);
        }
      }
    }
  }

  .container {
    display: flex;
    justify-content: center;
    gap: 15px;
    margin-top: 20px;
  }
`;
