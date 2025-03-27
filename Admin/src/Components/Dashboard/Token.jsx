import React, { useContext, useState } from "react";
import { GoPlus } from "react-icons/go";
import styled from "styled-components";
import Accordian from "./Accordian";
import { TiTickOutline } from "react-icons/ti";
import ContextFirst from "../../Context/Context";

const options1 = [
  { value: "Unlimi", label: "No limit" },
  { value: "t1", label: "1 hr" },
  { value: "t4", label: "24 hr" },
  { value: "custom", label: "Custom" },
];
const options2 = [
  { value: "FullAccess", label: "Full Access" },
  { value: "ReadOnly", label: "Read Only" },
  { value: "WriteOnly", label: "Write Only" },
  { value: "Update", label: "Update Only" },
  { value: "Delete", label: "Delete Only" },
];

const Token = () => {
 
  // const [CombineTokenInfo, setCombineTokenInfo] = useState();
const [Selected2, setSelected2] = useState("Unlimi");
const [TokenName, setTokenName] = useState("");
const [TokenDescription, setTokenDescription] = useState("");
// console.log(TokenDescription)
// console.log(TokenName)
console.log(Selected2)
  /**
   * ? Context
   */
  const { CheckBox, setCheckBox,selectedValue, setSelectedValue,JsonData } = 
  useContext(ContextFirst);
 
  const handleSelectChange = (e) => {

    // console.log(e.target.value)
   
    const value = e.target.value;
   
    if(value === "FullAccess" || value === "ReadOnly" || value === "WriteOnly" || value ==="Update" || value === "Delete"){

     setSelectedValue(value)
    }
    else{
      setSelected2(value)
    }
  };
  console.log(selectedValue)
  const TokenNameHandler = (e) => {
setTokenName(e.target.value)
  }

  const TokenDescHandler = (e) => {
    setTokenDescription(e.target.value)

  }


  const UpdateActions = async () => {

    let CombineTokenInfo = {TokenName: TokenName,TokenDescription:TokenDescription,Duration:Selected2,Type:selectedValue}
    console.log(CombineTokenInfo)

    CheckBox.map((X) => {
      X.actions.map((c) => {
        let Values = Object.values(c)[0];
        return Values === true ? c.TokenDetails = CombineTokenInfo : null
      })
    })

  console.log(CheckBox)

    try {
      let result = await fetch("http://localhost:3001/UpdateActions",{

        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify({ActionUpdates:CheckBox})

      });

      result = await result.json();

      console.log(result)

    } catch (error) {}
  };

  return (
    <ParentToken className="h-screen w-full overflow-y-scroll">
      <div className="CreateApiToken-save-btn flex items-center justify-between">
        <div className="text text-3xl font-extrabold">API Tokens </div>
        <div className="flex gap-2">
          {" "}
          <button
            className={`flex items-center justify-center bg-[#7A43F1] p-2 rounded text-white`}
          >
            <GoPlus className="text-2xl" /> Create API Token
          </button>
          <button
            className={`flex items-center justify-center bg-[#7A43F1] p-2 rounded text-white`}
          >
            <TiTickOutline
              className="text-2xl"
              onClick={UpdateActions}
            />{" "}
            Save
          </button>
        </div>
      </div>
      <br />

      <TokenDivParent>
      <TokenDiv className="Token-Details px-8 rounded">
      

      <div className="input  flex flex-col gap-3">
        <div className="first-Input flex gap-2 items-center">
          <label>Name:</label>
          <input type="text" placeholder="Token Name"
          className="w-full rounded-sm p-1 text-black"
          onChange={(e) => TokenNameHandler(e)}
          />
        </div>
        <div className="Second-Input flex gap-2 items-center">
          <label>Description:</label>
          <input type="text" placeholder="Description"
          className="w-full rounded-sm p-1 text-black"
          onChange={(e) => TokenDescHandler(e)}
          />
        </div>
      </div>
      
      <div className="select flex items-center justify-around w-full">
        <div className="flex gap-2 selectChild">
          <label>Token Duration</label>
          <select
            id="select-box"
            value={Selected2}
            onChange={handleSelectChange}
            className=" text-[#9CA3AF] px-3 py-1 rounded"
          >
            {/* <option value="" disabled>
          Select an option
        </option> */}
            {options1.map((option, index) => (
              <option key={index} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
        <div className="selectChild flex gap-2">
          <label>Token Type</label>
          <select
            id="select-box"
            value={selectedValue}
            onChange={handleSelectChange}
            className="text-[#9CA3AF] px-3 py-1 rounded"
          >
            {/* <option value="" disabled>
          Select an option
        </option> */}
            {options2.map((option, index) => (
              <option key={index} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>
    </TokenDiv>
      </TokenDivParent>

<CollectionsDivParent>
<Collections className="px-20 rounded h-auto py-10">
        <Accordian />
      </Collections>
</CollectionsDivParent>
    
    </ParentToken>
  );
};

export default Token;

const ParentToken = styled.div`
  
padding: 20px;

.select{
  @media (max-width:984px) {
      flex-direction :column ;
      justify-content: space-between;
      align-items: flex-start;
      gap: 10px;
      .selectChild{
       width: 100%;
    

       justify-content: space-between;
       select{
        width: 60%;
       
       }
      }
    }
}

`
const TokenDivParent = styled.div`
  
  display: flex;
justify-content: center;
align-items: center;
flex-direction: column;

`
const TokenDiv = styled.div`
  box-shadow: 3px 4px 12px 1px rgba(0, 0, 0, 0.17);
  background-color: #7a43f1;
  color: white;
  height: 30vh;
 width: 50vw;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;


`;

const CollectionsDivParent = styled.div`
  
  display: flex;
justify-content: center;
align-items: center;
flex-direction: column;

`
const Collections = styled.div`
  margin-top: 30px;
  box-shadow: 3px 4px 12px 1px rgba(0, 0, 0, 0.17);
  background-color: #7a43f1;
  color: white;
  height: 30vh;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 60vw;
`;
