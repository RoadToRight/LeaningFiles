import React, { useState, useContext } from "react";
import "./Navigation.css";
import { Link } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import styled from "styled-components";
import { CiSearch } from "react-icons/ci";
import { GiTireIronCross } from "react-icons/gi";
import { CiShoppingCart } from "react-icons/ci";
import counterContext from "../../Contact";
const Navigation = ({ loadingkaro }) => {
  const [searchSwap, setsearchSwap] = useState(true);
  const [Noitems, setNoitems] = useState(false);
  const [Message, setMessage] = useState();
  const value = useContext(counterContext);

  const [Filter, setFilter] = useState(value.Data);
  function swap() {
    setsearchSwap(false);
  }
  function crossSwap() {
    setsearchSwap(true);
  }
  console.log(searchSwap);

  const filtering = (e) => {
    let InpVal = e.target.value;
    console.log(InpVal);

    let FilterData = value.Data.filter((x) => {
      return x.title.toLowerCase().includes(InpVal.toLowerCase());
    });
    setFilter(FilterData);

    console.log(FilterData);
  };

  return (
    <div>
      <Searchbar $isTap={searchSwap} className="searchbar">
        <div className="input-products">
          <input
            type="search"
            placeholder="Search Products"
            onChange={filtering}
          />
          <div className="products">

         

            {
            
           
            (Filter?.length == 0 ) ? <ProductNot className="" productNAvA> Product Not Available  </ProductNot>

            :
            
            Filter?.map((x, i) => {
            

              return (
                <Link
                  to={"/SingleProduct"}
                  state={{ selectedProduct: x }}
                  className="cart-link"
                  onClick={crossSwap}
                >
                  <div className="card mb-3 smallCarts" key={i}>
                    <div className="row cardRow g-0">
                      <div className="col-4 smallCartsImageDiv">
                        <img
                          className="smallCartsImage"
                          src={x.image}
                          class="img-fluid rounded-start"
                          alt="..."
                        />
                      </div>
                      <div className="col-8">
                        <div className="card-body smallCardBody">
                          <h5 className="card-title smallCardBodyTitle">
                            {x.title}
                          </h5>
                          <p className="card-text  smallCardBodyText1">
                            $ {x.price}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })
            
            }
          </div>
        </div>
        <GiTireIronCross className="crossSearch" onClick={crossSwap} />
      </Searchbar>

      <nav className="navbar navbar-expand-lg navbaR">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <a className="navbar-brand text-white nav-brand-nav" href="/">
            <h3>ClothingStore</h3>
          </a>

          <div
            className="collapse navbar-collapse ul-login"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 nav-link-div">
              <li className="nav-item">
                <Link
                  className="nav-link active text-white"
                  aria-current="page"
                  to="/"
                  onClick={loadingkaro}
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/products">
                  Products
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link text-white" to="/Address">
                  Manage Address
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  className="nav-link text-white"
                  to="/About"
                  state={"hello"}
                >
                  AboutUs
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link text-white" to="/contact">
                  ContactUs
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/Login">
                  <button className="button1">Login</button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="search-icon">
        <CiSearch fontSize={"30px"} color={"white"} onClick={swap} />
        <CiShoppingCart fontSize={"32px"} color={"white"} />
      </div>
      </nav>
     
    </div>
  );
};

export default Navigation;

const Searchbar = styled.div`
  display: flex;
  justify-content: space-evenly;

  box-sizing: border-box;
  padding: ${(props) => (props.$isTap ? "0px" : "30px")};
  z-index: 1100;
  height: ${(props) => (props.$isTap ? "0vh" : "100vh")};
  position: absolute;
  background-color: white;
  width: 100%;
  transition: all 320ms ease-in;
  overflow: hidden;
  z-index: 2200;
  @media (max-width: 368px) {
    justify-content: center;
  }

  .crossSearch {
    cursor: pointer;
    position: absolute;
    right: 40px;
    font-size: 40px;
    top: 4px;

    @media (max-width: 768px) {
      font-size: 26px;
      right: 10px;
    }
  }
  input:focus {
    outline: none;
  }
  input {
    height: 50px;
    width: 320px;
    padding: 0px 20px;
    border-radius: 4px;
    margin-top: 20px;
    box-shadow: 4px 4px 5px 1px rgba(0, 0, 0, 0.25);
    border: 1px solid lightgray;
    @media (max-width: 768px) {
      margin-top: 30px;
    }
    @media (max-width: 368px) {
      width: 285px;
    }
  }
  .products {
    padding: 10px 9px;
    height: 100vh;
    width: 320px;
    border-radius: 5px;
    box-shadow: 3px 4px 12px 1px rgba(0, 0, 0, 0.25);
    overflow-y: auto;
    text-align: center;
   
    
    @media (max-width: 368px) {
      max-width: 285px;
    }
    .smallCarts {
      width: 100%;
      display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
      min-height: 200px;
      overflow: hidden;
      @media (max-width: 568px) {
        width: 100%;

        height: 200px;
        overflow: hidden;
      }
      .smallCartsImageDiv {
        max-width: 150px;
        display: flex;
        justify-content: center;

        img {
          height: 100%;
          width: 100%;
        }
      }
    }
    .cardRow {
      height: 120px;
    }
  }
  .input-products {
    display: flex;
    flex-direction: column;
    gap: 20px;
    justify-content: center;
    align-items: center;
  }
  .smallCardBody {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: 100%;
    .smallCardBodyTitle {
      font-size: 13.5px;
    }
  }
  .cart-link {
    text-decoration: none;
  }
  
`;
const ProductNot = styled.small`



   
    
   
  
`