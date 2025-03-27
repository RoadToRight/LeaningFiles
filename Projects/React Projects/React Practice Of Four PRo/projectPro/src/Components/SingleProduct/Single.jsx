import React, { useContext } from "react";
import { useLocation, useParams } from "react-router-dom";
import counterContext from "../../Contact";
import styled from "styled-components";
import { CiCircleCheck } from "react-icons/ci";
const Single = (props) => {
  const location = useLocation();
  let SingleData = location.state.selectedProduct;
  console.log(SingleData);
  let value = useContext(counterContext);

  console.log(value);

  let Filtered = value.Data?.filter((x) => {
    return SingleData.category == x.category;
  });
  console.log(Filtered);

  return (
    <SingleProduct>
      <div className="image-section">
        <div className="img-div-Single">
          <img className="img-fluid" src={`${SingleData.image}`} alt="" />
        </div>
      </div>
      <div className="details-Single">
        <div className="uper">
        <div className="title">
          <h1>{SingleData.title}</h1>
        </div>

        <div className="price">
          <del>
            <small>$2000</small>
          </del>

          <h6>${SingleData.price}</h6>
        </div>

        <div className="tax">
          <small>Tax included. Shipping calculated at checkout.</small>
        </div>
        </div>

        <hr className="hr-single" />

        <div className="size-etc">
        <div className="btn-size">
        <h6>SIZE</h6>
          <div className="box-p">
            <div className="box">S</div>
            <div className="box">M</div>
            <div className="box">X</div>
            <div className="box">XL</div>
          </div>
        </div>

          <div className="check">
            <h3>
              <CiCircleCheck />
            </h3>
            <small> Customer satisfaction guarantee</small>
          </div>

          <div className="buttons">
            <button className="button1-s">Add to cart</button>
                
            <button className="button2-s">Buy it now</button>
          </div>
        </div>
      </div>
    </SingleProduct>
  );
};

export default Single;

const SingleProduct = styled.div`
 
  min-height: 100vh;
  display: flex;
  align-items: center;
 @media (max-width:600px) {
  flex-wrap: wrap;
  flex-direction: column;
 }
  .image-section {
    min-height: 100vh;
    width: 40%;
    
    display: flex;
    justify-content: center;
    align-items: center;
    @media (max-width:600px) {
     
     width: 100%;
      padding-top: 25px;
     min-height:auto;
}

  }
  .img-div-Single {
    width: 80%;
    height: 65%;
 
    img {
      width: 100%;
      height: 100%;
      border-radius: 8px;
    }
  }

  .details-Single {
 
    min-height: 100vh;
    display: flex;
    justify-content: center;
    width: 60%;
    flex-direction: column;
    padding: 10px 40px;
    @media (max-width:600px) {
      padding: 10px 20px;
      
      width: 100%;
 }
    .uper{
      
      padding: 25px 0px;
    
     
    }
    .title {
      color: #150C83;
    }
    .price {
      font-size: 22px;
      display: flex;
      align-items: center;
      gap: 20px;

      font-weight: 200;

      h6 {
        color: #ee6060;
        font-size: 23px;
        text-align: center;
        margin: 0;
      }
    }
    .hr-single {
      color: lightgray;
    }
    .size-etc {
      display: flex;
        flex-direction: column;
        gap: 20px;
      h6 {
        letter-spacing: 2px;
        font-weight: 700;
       
      }
      .box-p {
        display: flex;
        gap: 20px;
        align-items: center;

        .box {
          border: 1px solid #150C83;
          padding: 8px 14px;
          border-radius: 2px;
          color: #150C83;
        }
      }
    }
    .check {
      display: flex;
      align-items: center;
      gap: 7px;
    }
    
  }

  .buttons{
    display: flex;
    flex-direction: column;
    gap: 10px;
    button{
      padding: 15px;
      width: 70%;
      font-size: 18px;
      font-weight:700 ;
      border-radius: 3px;
      box-shadow: 3px 4px 12px 1px rgba(194, 187, 187, 0.25);
      @media (max-width:600px) {
     
      width: 100%;
 }
    }
    .button1-s{

      border: 1px solid #150C83;
      color: #150C83;
    }
    .button2-s{

background: linear-gradient(135deg ,#150C83, #4D4FFA);
color: white;
border: transparent;
}
  }
`;
