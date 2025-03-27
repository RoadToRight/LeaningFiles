import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Button from "../Button/Button";
import Sec3Images from "./Sec3Images";


const Section3 = () => {
  const [MATCH, setMATCH] = useState("2D Animation");
  const [imagesHandlerOnbtn, setimagesHandlerOnbtn] = useState( {
    id: "2D Animation",
    img: [
      "/images/Sec3Image/1.webp",
      "/images/Sec3Image/2.webp",
      "/images/Sec3Image/3.webp",
      "/images/Sec3Image/4.webp",
      "/images/Sec3Image/5.webp",
      "/images/Sec3Image/6.webp",
    ],
  },)

  let Arr = ["2D Animation", "3D Animation", "White Board", "Motion Graphics","Typograpghy","Cel Animation","Hybrid"];

  let ImgArray = [
    {
      id: "2D Animation",
      img: [
       "/images/Sec3Image/1.webp",
      "/images/Sec3Image/2.webp",
      "/images/Sec3Image/3.webp",
      "/images/Sec3Image/4.webp",
      "/images/Sec3Image/5.webp",
      "/images/Sec3Image/6.webp",
      ],
    },
    {
      id: "3D Animation",
      img: [
       "/images/Sec3Image/7.webp",
      "/images/Sec3Image/8.webp",
      "/images/Sec3Image/9.webp",
      "/images/Sec3Image/10.webp",
      "/images/Sec3Image/11.webp",
      "/images/Sec3Image/12.webp",
      ],
    },
    {
      id: "White Board",
      img: [
       "/images/Sec3Image/13.webp",
      "/images/Sec3Image/14.webp",
      "/images/Sec3Image/15.webp",
      "/images/Sec3Image/16.webp",
      "/images/Sec3Image/17.webp",
      "/images/Sec3Image/18.webp",
      ],
    },
    {
      id: "Motion Graphics",
      img: [
       "/images/Sec3Image/19.webp",
      "/images/Sec3Image/20.webp",
      "/images/Sec3Image/21.webp",
      "/images/Sec3Image/22.webp",
      "/images/Sec3Image/23.webp",
      "/images/Sec3Image/24.webp",
      ],
    },
    {
      id: "Typograpghy",
      img: [
       "/images/Sec3Image/25.webp",
      "/images/Sec3Image/26.webp",
      "/images/Sec3Image/27.webp",
     
      ],
    },
    {
      id: "Cel Animation",
      img: [
       "/images/Sec3Image/28.webp",
      "/images/Sec3Image/29.webp",
      "/images/Sec3Image/30.webp",
      "/images/Sec3Image/31.webp",
      "/images/Sec3Image/32.webp",
      "/images/Sec3Image/33.webp",
      ],
    },
    {
      id: "Hybrid",
      img: [
       "/images/Sec3Image/34.webp",
      "/images/Sec3Image/35.webp",
      "/images/Sec3Image/36.webp",
      "/images/Sec3Image/37.webp",
      "/images/Sec3Image/38.webp",
      "/images/Sec3Image/39.webp",
      ],
    },
  ];

useEffect(() => {
   let getImageProperly = ImgArray.find((x) => {

    return x.id === MATCH;

  })
 
  setimagesHandlerOnbtn(getImageProperly);
  

}, [MATCH])


  function search(Text) {
    setMATCH(Text);
  }



  return (
    <SectionThree>
      <div className="Text">
        <h1 style={{margin : "0px"}}>Our Successful Project</h1>
      </div>
      <div className="btns">
        {Arr.map((x, i) => {
          // console.log(x)
          return (
            <Button
              key={i}
              onclick={search}
              btnType={x === MATCH ? "primary" : null}
              Text={{ Name1: `${x}`, Name2: `${x}` }}
            />
          );
        })}
      </div>
      <div className="images">
        
        <Sec3Images    value={imagesHandlerOnbtn}/>
      
      </div>
    </SectionThree>
  );
};

export default Section3;

const SectionThree = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");

  background: linear-gradient(135deg, #222222, #333232);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 80px 0px;
  gap: 50px;
  justify-content: space-evenly;
  .Text {
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    h1 {
      font-family: "Poppins", sans-serif;
      font-weight: 700;

      font-style: normal;
    }
  }
  .btns {
    display: flex;
    align-items: center;
    justify-content: center;

    gap: 13px;
    padding: 0px 50px;
    flex-wrap: wrap;
   
    @media (max-width:520px) {
      gap: 5px;
      padding: 0px 3px;
    }
  }
`;
