import React, { useContext, useState } from "react";
import counterContext from "../../Contact";
import "./Products.css";
import styled from "styled-components";
import { FaFilter } from "react-icons/fa";
import { TiStar } from "react-icons/ti";
import { CiShoppingBasket } from "react-icons/ci";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
import { CiSearch } from "react-icons/ci";
import { Link } from "react-router-dom";

const Products = () => {

 

  let value = useContext(counterContext);
 
  console.log(value);

  const [Filter, setFilter] = useState(value.Data)


  const filtering = (e) => {

    let InpVal = e.target.value;
    console.log(InpVal);

   let FilterData =  value.Data.filter((x) => {

      return x.title.toLowerCase().includes(InpVal.toLowerCase());


    })
    setFilter(FilterData)
    console.log(FilterData)
  }













  return (
    <ProductsSection>
      <div className="top-section">
        
        <div className="search-section">
         <input type="search"  placeholder="Search Products.." className="search-pro" onChange={filtering}/><CiSearch className="search-icon-pro" fontSize={"30px"}/>
        </div>
      </div>

      <div className="Carts-Section">



        {
        
        (Filter?.length == 0 ) ? <ProductNot className="" productNAvA> Product Not Available  </ProductNot>

        :
        

        Filter?.map(function (x, i) {
          return (
            <Link
              to={"/SingleProduct"}
              state={{selectedProduct:x}}
              className="cart-link"
            >
              <div className="card card1" key={i}>
                <img src={x.image} class="card-img-top" alt="..." />
                <div className="card-body">
                  <p className="card-text">
                    <div className="title">{x.title}</div>
                    <div className="price">$ {x.price}</div>
                    <div className="rating-carticon">
                      <div className="rating">
                        <TiStar />
                        <TiStar />
                        <TiStar />
                        <TiStar />
                        <TiStar />
                      </div>
                      <div className="carticon">
                        <CiShoppingBasket />
                      </div>
                    </div>
                  </p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </ProductsSection>
  );
};

export default Products;

const ProductsSection = styled.div`
input[type="search"]::-webkit-search-decoration,
input[type="search"]::-webkit-search-cancel-button,
input[type="search"]::-webkit-search-results-button,
input[type="search"]::-webkit-search-results-decoration { display: none; }
  .top-section {
    padding: 25px 0px;
    display: flex;
    justify-content: space-around;
    align-items: center;
  
  }

  .Carts-Section {
    min-height: calc(100vh - 25.8vh);

    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 20px;
    padding: 10px 20px;
    @media (max-width: 820px) {
    }
    @media (max-width: 568px) {
      display: grid;
      grid-template-columns: repeat(2, 1fr);


      place-items: center;
      gap: 10px;
    }
    @media (max-width: 320px) {
   
      padding: 10px 50px;
      gap: 8px;
    }
  }
  .cart-link{
    text-decoration: none;
  }
  .search-section{
    position: relative;
    
    width: 50%;
    @media (max-width:480px) {
      width: 90%;
    }
  }
  .search-pro{

    padding: 8px 15px;
    border-radius: 4px;
    border: 1px solid black;
    width: 100%;

  }
  .search-pro:focus{
    outline: none;
  }
  .search-icon-pro{
    position: absolute;
    right: 4px;
    top: 6px;
    cursor: pointer;
  }
`;

const Buttons = styled.button`
  box-shadow: 3px 4px 12px 1px rgba(0, 0, 0, 0.25);
  color: white;
  padding: 7px 25px;
  color: #231da1;

  border-radius: 5px;
  border: transparent;
`;
const ProductNot = styled.small`
background-color: chocolate;
width: 100vw;
text-align: center;
`