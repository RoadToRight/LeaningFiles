import { useContext, useEffect, useState } from "react";
import Accordion from "react-bootstrap/Accordion";
import Form from "react-bootstrap/Form";
import ContextFirst from "../../Context/Context";
import styled from "styled-components";
function Accordian() {
  const {
    JsonData,
    setJsonData,
    JsonField,
    setJsonField,
    CheckBox,
    setCheckBox,
    selectedValue
  } = useContext(ContextFirst);
// console.log(selectedValue)
const [ActionOnAccArr, setActionOnAccArr] = useState(["FindOne", "Find", "Create", "Update", "Delete"])
const [actionCondition, setactionCondition] = useState([])
console.log(CheckBox)

const DisableFnc = (accIndex) => {
 
  JsonData?.map((X,index) => {
 
    let FindActions =   X.actions?.map((c) => {
         let Keys = Object.keys(c)[0];
         let Values = Object.values(c)[0];
         console.log("Hell0")
         return   Values === false ?  Values : true;
       })
     
      //  setactionCondition((prev) => [...prev,Values])
       // let spread ={...FindActions};
       // console.log(spread)
       setactionCondition((prev) => [...prev,FindActions])
      //  console.log(actionCondition)
  
       
       // console.log(ActionOnAccArr)
       // return FindActions;
  
 
     })
}


useEffect(() => {
 
  DisableFnc()
}, [JsonData])




  useEffect(() => {
    if (JsonData && JsonData.length > 0) {
      setCheckBox(
        JsonData.map((x,i) => ({
          collection: x.collection,
          
          actions: [
            { FindOne: selectedValue === "FullAccess" ? true : selectedValue === "ReadOnly" ? true : false },
            { Find: selectedValue === "FullAccess" ? true : selectedValue === "ReadOnly" ? true : false },
            { Create: selectedValue === "FullAccess" ? true : selectedValue === "WriteOnly" ? true : false },
            { Update: selectedValue === "FullAccess" ? true : selectedValue === "Update" ? true : false },
            { Delete:selectedValue === "FullAccess" ? true : selectedValue === "Delete" ? true : false },
          ],
        }))
      );
    }
  }, [JsonData,selectedValue]);

  const iniCHECK = (accindex) => {

  let RESULT =  CheckBox.map((X) => {
    
     let Acmap  = X.actions.map((C) => {
      
        let Keys = Object.keys(C)[0];
        let Values = Object.values(C)[0];
       
       
      // console.log(Values)
        return Values
       
        
      })

  
     
      return Acmap
    })

    const flatResult = RESULT[accindex] || []; // Flatten to get all the true/false values in a single array
    // console.log(flatResult); // This logs the flattened array, e.g., [true, true, true, true, true, ...]
    return flatResult;

  
   

  }

 
  const checkBoxFnc = (checkboxIndex, accorIndex) => {
    // console.log(CheckBox)
    
    setCheckBox((prev) =>
      prev.map((checkBoxConditionsArr, i) => {
        let ActionsMap;
        if (i === accorIndex) {
          ActionsMap = checkBoxConditionsArr.actions.map(
            (checkBoxConditions, index) => {
              let keys = Object.keys(checkBoxConditions)[0];

              return checkboxIndex === index
                ? { [keys]: !checkBoxConditions[keys] }
                : checkBoxConditions;
            }
          );
        }
        // console.log(ActionsMap)

        return {
          collection: checkBoxConditionsArr.collection,
          actions: ActionsMap ? ActionsMap : checkBoxConditionsArr.actions,
        };
      })
    );
  };



  return (
    <AccordianBodyDiv>
      <h1>Collections</h1>
      {JsonData.map((x, accindex) => {
   
        return (
          <Accordion defaultActiveKey="0" key={accindex} className="py-4">
            <Accordion.Item eventKey="0">
              <Accordion.Header>{x.collection}</Accordion.Header>
              <Accordion.Body className="AccBody flex justify-evenly items-center p-6">
                {ActionOnAccArr.map(
                  (item, checkboxIndex) => {
                    return (
                      <div key ={checkboxIndex}className={`flex gap-1 ${actionCondition.length > 0 && actionCondition[accindex][checkboxIndex]  ? "d-none" : null}`}>
                        <Form.Check
                          aria-label="option 1"
                       
                          checked = {actionCondition.length > 0 && actionCondition[accindex][checkboxIndex] === true ? false : iniCHECK(accindex)[checkboxIndex] }                    
                          disabled={actionCondition.length > 0 ? actionCondition[accindex][checkboxIndex]  : false }
                          onChange={() => {
                            checkBoxFnc(checkboxIndex, accindex);
                          }}
                        />
                        {item}
                      </div>
                    );
                  }
                )}

              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        );
      })}
    </AccordianBodyDiv>
  );
}

export default Accordian;

const AccordianBodyDiv = styled.div`
 

 .AccBody{
  @media (max-width:984px) {
      flex-direction :column ;
      justify-content: flex-start;
      align-items: flex-start;
      gap: 10px;
    }
 }
    
`