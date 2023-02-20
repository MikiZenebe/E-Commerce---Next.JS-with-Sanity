import styled from "styled-components";

export const CartWrapper = styled.div`
  .cart-wrapper {
    width: 100vw;
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    right: 0;
    top: 0;
    z-index: 100;
    /* will-change: transform; */
    transition: all 1s ease-in-out;

    .cart-container {
      height: 100vh;
      width: 600px;
      background-color: white;
      float: right;
      padding: 40px 10px;
      position: relative;

      .product-container {
        margin-top: 15px;
        overflow: auto;
        max-height: 70vh;
        padding: 20px 10px;

        .product {
          display: flex;
          gap: 30px;
          padding: 20px;
        }

        .cart-product-img {
          width: 180px;
          height: 150px;
          background-color: #ebebeb;
          border-radius: 15px;
        }

        .item-desc {
          .top {
            flex-wrap: wrap;
            gap: 10px;
          }
          .flex {
            display: flex;
            justify-content: space-between;
            width: 350px;
            color: #324d67;

            h5 {
              font-size: 24px;
            }
            h4 {
              font-size: 20px;
            }
          }

          .remove-item {
            font-size: 24px;
            color: #f02d34;
            cursor: pointer;
            background: transparent;
            border: none;
          }
        }
      }

      .cart-bottom {
        position: absolute;
        bottom: 12px;
        right: 5px;
        width: 100%;
        padding: 30px 65px;

        .total {
          display: flex;
          justify-content: space-between;
          h3 {
            font-size: 22px;
          }
        }

        .btn-container {
          width: 400px;
          margin: auto;
          .btn {
            background-color: #f02d34;
            color: #fff;
            width: 100%;
            max-width: 400px;
            padding: 10px 12px;
            border-radius: 15px;
            border: none;
            font-size: 20px;
            margin-top: 10px;
            margin-top: 40px;
            text-transform: uppercase;
            cursor: pointer;
            transform: scale(1, 1);
            transition: transform 0.5s ease;

            &:hover {
              transform: scale(1.1, 1.1);
            }
          }
        }
      }
    }

    .cart-heading {
      display: flex;
      align-items: center;
      font-size: 18px;
      font-weight: 500;
      cursor: pointer;
      gap: 2px;
      margin-left: 10px;
      border: none;
      background-color: transparent;
    }

    .heading {
      margin-left: 10px;

      color: black;
    }

    .cart-num-items {
      margin-left: 10px;
      color: #f02d34;
    }

    .empty-cart {
      margin: 40px;
      text-align: center;

      h3 {
        font-weight: 600;
        font-size: 20px;
      }

      button {
        background-color: #f02d34;
        color: white;
        width: 100%;
        max-width: 400px;
        padding: 10px 12px;
        border-radius: 15px;
        border: none;
        font-size: 20px;
        margin-top: 40px;
        text-transform: uppercase;
        cursor: pointer;
        transform: scale(1, 1);
        transition: transform 0.5s ease;

        &:hover {
          transform: scale(1.1, 1.1);
        }
      }
    }
  }
`;
