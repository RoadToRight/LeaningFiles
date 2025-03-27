import React from "react";
import styles from "./NumberChooser.module.css";
import styled,{css} from "styled-components";

const NumberChooser = ({ value, Click , SelectedNumberState}) => {
  
  
  return (
  
    <Box onClick={Click} className={`${styles.box}`} $isselected = {(value == SelectedNumberState)}>
      <BoxH1>{value}</BoxH1>
    </Box>
   
  );
};

export default NumberChooser;



const Box = styled.div`
  width: 100px;
  min-height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid black;
  background-color:${ (props) => (props.$isselected  ? "black" : "white")};
  color:${ (props) => ((props.$isselected ? "white" : "black"))} ;

`;

const BoxH1 = styled.h1`
  width: 100px;
  min-height: 100px;
  font-size: 24px;
  font-weight: 700;
 
`;
