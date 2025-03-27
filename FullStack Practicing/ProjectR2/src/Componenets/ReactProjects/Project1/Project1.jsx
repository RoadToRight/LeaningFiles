import React, { useRef, useState } from "react";
import styled from "styled-components";
import data from "./data";

const Project1 = () => {
  /**
   * ! Javascript Work Start
   */

  const [EnableMulti, setEnableMulti] = useState(false);
  const [Selectedobj, setSelectedobj] = useState({});
  const [Condition, setCondition] = useState(false);
  const [arr, setarr] = useState([]);

  const EnableMultiBtn = () => {
    setEnableMulti((prev) => !prev);
  };

  const Open = (id) => {
    if (EnableMulti) {
      let cpyArr = [...arr];
      let findcurrentid = cpyArr.indexOf(id);

      if (findcurrentid === -1) {
        cpyArr.push(id);
      } else {
        cpyArr.splice(findcurrentid, 1);
      }

      setarr(cpyArr);
    }

    let Selected = data.find((x) => {
      return x.id === id;
    });
    if (Selectedobj.id === id) {
      setSelectedobj({});
    } else {
      setSelectedobj(Selected);
    }
    setCondition((prev) => !prev);
  };

  /**
   * ! Javascript Work End
   */
  return (
    <ProjectDiv>
      <div className="Parent">
        <div className="EnableMultiAccordianBtn">
          <button onClick={EnableMultiBtn}>Enable Multi Accordian</button>
        </div>

        {data?.map((item, index) => {
          return (
            <div className="accordian" key={index}>
              <div className="question">
                {item.question}
                <div className="plus" onClick={() => Open(item.id)}>
                  {EnableMulti
                    ? EnableMulti == true && arr.indexOf(item.id) !== -1
                      ? "-"
                      : "+"
                    : EnableMulti == false && item.id === Selectedobj.id
                    ? "-"
                    : "+"}
                </div>
              </div>

              {EnableMulti ? (
                arr.indexOf(item.id) !== -1 && (
                  <div className="answer">{item.answer}</div>
                )
              ) : Selectedobj.id === item.id ? (
                <div className="answer">{item.answer}</div>
              ) : null}
            </div>
          );
        })}
      </div>
    </ProjectDiv>
  );
};

export default Project1;

const ProjectDiv = styled.div`
  min-height: 100vh;
  background-color: #0c0c0c;
  color: white;
  padding: 50px 0px;

  .Parent {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    flex-direction: column;

    .accordian {
      display: flex;
      flex-direction: column;
      width: 50vw;
      @media (max-width:768px) {
        width: 90vw;
      }
      @media (max-width:555px) {
        width: 95vw;
      }
      .question {
        background-color: #fd2031;
        box-shadow: inset 0px 0px 3px 3px rgba(255, 255, 255, 0.3);
        padding: 20px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        
        @media (max-width:768px) {
        font-size:14px;
      }
      @media (max-width:555px) {
        font-size:12.5px;
      }
        .plus {
          font-size: 22px;
          font-weight: 700;
          cursor: pointer;
        }
      }
      .answer {
        background-color: #eb4855;
        box-shadow: inset 0px 0px 3px 3px rgba(255, 255, 255, 0.3);
        padding: 20px;
        text-align: center;
        max-width: 100%;
       
        @media (max-width:768px) {
        font-size:14px;
      }
      @media (max-width:555px) {
        font-size:12.5px;
      }
      }
    }
  }
  .EnableMultiAccordianBtn button {
    padding: 12px 23px;
    background-color: #fd2031;
    box-shadow: inset 0px 0px 3px 3px rgba(255, 255, 255, 0.3);
    color: white;
  }
`;
