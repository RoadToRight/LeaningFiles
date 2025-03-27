import React from "react";
import styled from "styled-components";

const Sec3Images = ({ value }) => {
  console.log();
  return (
    <ImagesParent className="container">
      {value.img?.map((x, i) => {
        return (
          <div className="img-div-sec3">
            <div key={i}>
              <img src={`${x}`} className="card-img" alt="..." />

              <div className="img-cloud-icon-P">
                <img
                  src="/images/port-cloud-icon.webp"
                  alt=""
                  className="cloud"
                />
              </div>
            </div>
          </div>
        );
      })}
    </ImagesParent>
  );
};

export default Sec3Images;

const ImagesParent = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  .img-div-sec3 {
    position: relative;
    .card-img {
      cursor: pointer;
    }
  }
  .img-cloud-icon-P {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    height:100%;
    width: 100%;
    z-index: 6;
    position: absolute;
    top: 0px;

    cursor: pointer;
    transition: all 200ms ease-out;
   
  }
  .img-cloud-icon-P:hover{
    background-color:rgba(90, 90, 90, 0.568);
    .cloud{
      height: 70px;
      width: 70px;
    }
  }
 
  .cloud {
    position: absolute;
    top: 43%;
    
    transition: all 200ms ease-out;
    height: 0px;
    width: 0px;
  }
`;
