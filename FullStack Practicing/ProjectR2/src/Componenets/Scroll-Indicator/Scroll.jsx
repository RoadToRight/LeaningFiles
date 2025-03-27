import React, { useEffect, useState } from "react";
import { useWindowScroll } from "react-use";
import styled from "styled-components";
const Scroll = () => {
  const { x, y } = useWindowScroll();
  const [ScrollVal, setScrollVal] = useState();

  useEffect(() => {
    let height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    setScrollVal((y / height) * 100);
  }, [y]);

  return (
   <div>
     <Scrolll className="scroll">
      <Indicator
        style={{ width: `${ScrollVal}%` }}
        className="indicator"
      ></Indicator>
    </Scrolll>
   </div>
  );
};

export default Scroll;


const Scrolll = styled.div`
  width: 100%;
  height: 7px;
  position: fixed;
  top: 0px;
  z-index: 100;


`;
const Indicator = styled.div`
  background-color: red;
  height: 100%;
  position: sticky;
  box-shadow:inset 0px 0px 5px 5px rgba(255,255,255,0.3);
  top: 10px;
`;
