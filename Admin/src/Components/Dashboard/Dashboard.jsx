import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { IoMdSettings } from "react-icons/io";
import { GrUserManager } from "react-icons/gr";
import { IoAnalytics } from "react-icons/io5";
import { TiPencil } from "react-icons/ti";
import { MdEdit, MdSecurity } from "react-icons/md";
import SubDashboard from "./SubDashboard";
import { Link, Route, Routes, useLocation } from "react-router-dom";
import ContentB from "./ContentB";
import ContentM from "./ContentM";
import Token from "./Token";
import ContextFirst from "../../Context/Context";

const Dashboard = () => {
  const [subDashboardToggle, setsubDashboardToggle] = useState(false);

  const Location = useLocation();
  const isCollectionPath = location.pathname.startsWith(
    "/Content/Type/Manager/"
  );
  // console.log(isCollectionPath);
  /**
   * ? Context
   */

  const { JsonData, setJsonData } = useContext(ContextFirst);

  useEffect(() => {
    if (Location.pathname !== "/") {
      setsubDashboardToggle(true);
    }
  }, []);

  const subDashboardToggleFnc = () => {
    setsubDashboardToggle(true);
  };

  return (
    <div className="flex">
      <DashboardDiv className="text-white ">
        <div className="logo text-3xl font-extrabold text-center py-8">
          Logo
        </div>
        <div className="Dashboard-Elements flex flex-col items-center justify-center">
          <ul className="flex flex-col gap-8 py-4 items-center justify-center">
            <li className="flex items-center gap-2 justify-center text-xl cursor-pointer">
              <div className="tooltip-container">
                <Link
                  to="/Content/Type/Manager"
                  onClick={subDashboardToggleFnc}
                >
                  <GrUserManager />
                </Link>
                <span className="tooltip-text"> Content Manager</span>
              </div>
            </li>
            <li className="flex items-center gap-2 justify-center text-xl cursor-pointer">
              <div className="tooltip-container">
                <Link
                  to="/Content/Type/Builder"
                  onClick={subDashboardToggleFnc}
                >
                  <TiPencil />
                </Link>
                <span className="tooltip-text"> Content Type Builder</span>
              </div>
            </li>
            <li className="flex items-center gap-2 justify-center text-xl cursor-pointer">
              <div className="tooltip-container">
                <Link to="/Security" onClick={subDashboardToggleFnc}>
                  <MdSecurity />
                </Link>
                <span className="tooltip-text"> Security</span>
              </div>
            </li>
            <li className="flex items-center gap-2 justify-center text-xl cursor-pointer">
              <div className="tooltip-container">
                <Link to="/Analytics" onClick={subDashboardToggleFnc}>
                  <IoAnalytics />
                </Link>
                <span className="tooltip-text"> Analytics</span>
              </div>
            </li>
            <li className="flex items-center gap-2 justify-center text-xl cursor-pointer">
              <div className="tooltip-container">
                <Link to="/Settings">
                  <IoMdSettings onClick={subDashboardToggleFnc} />
                </Link>
                <span className={`tooltip-text`}> Settings</span>
              </div>
            </li>
          </ul>
        </div>
      </DashboardDiv>

      <DashboardSubDiv $subDashboardToggle={subDashboardToggle}>
        {/* {(Location.pathname === "/Content/Type/Manager" || isCollectionPath) && ( */}
        <Routes>
          <Route
            path="/Content/Type/Manager"
            element={
              <SubDashboard
                Heading={"Content Manager"}
                subHeading={"Collection Types"}
                collections={JsonData}
                LinkTo={"/Content/Type/Manager"}
                Show={true}
              />
            }
          ></Route>
          <Route
            path="/Content/Type/Manager/:collectionName"
            element={
              <SubDashboard
                Heading={"Content Manager"}
                subHeading={"Collection Types"}
                collections={JsonData}
                LinkTo={"/Content/Type/Manager"}
                Show={true}
              />
            }
          ></Route>
        </Routes>
        {/* // )} */}

        {/* {Location.pathname === "/Content/Type/Builder" && (
         
        )} */}

        <Routes>
          <Route
            path="/Content/Type/Builder"
            element={
              <SubDashboard
                Heading={"Content Type Builder"}
                subHeading={"Collections"}
                collections={JsonData}
                LinkTo={"/Content/Type/Builder"}
                Show={true}
              />
            }
          ></Route>

          <Route
            path="/Content/Type/Builder/:collectionName"
            element={
              <SubDashboard
                Heading={"Content Type Builder"}
                subHeading={"Collections"}
                collections={JsonData}
                LinkTo={"/Content/Type/Builder"}
                Show={true}
              />
            }
          ></Route>

          <Route
            path="/Security"
            element={
              <SubDashboard
                Heading={"Security"}
                subHeading={"Tokens"}
                collections={JsonData}
                LinkTo={"/Security"}
                Show={true}
              />
            }
          ></Route>
        </Routes>

        {/* {Location.pathname === "" && (
         
        )} */}
        {Location.pathname === "/Analytics" && (
          <SubDashboard Heading={"Analytics"} Show={True} />
        )}
        {Location.pathname === "/Settings" && (
          <SubDashboard
            Heading={"Settings"}
            subHeading={"Profile"}
            Show={True}
          />
        )}
      </DashboardSubDiv>

      {/* {(Location.pathname === "/Content/Type/Manager" || isCollectionPath) && } */}

      <Routes>
        <Route path="/Content/Type/Manager" element={<ContentM />}></Route>
        <Route
          path="/Content/Type/Manager/:collectionName"
          element={<ContentM />}
        ></Route>
      </Routes>

      <Routes>
        <Route path="/Content/Type/Builder" element={<ContentB />}></Route>
        <Route
          path="/Content/Type/Builder/:collectionName"
          element={<ContentB />}
        ></Route>
      </Routes>

      {/* {Location.pathname === "/Content/Type/Builder" && <ContentB />} */}
      {Location.pathname === "/Security" && <Token />}
    </div>
  );
};

export default Dashboard;

const DashboardDiv = styled.div`
  min-height: 100vh;
  width: 10vw;
  z-index: 10;
  background: linear-gradient(135deg, #a141fb, #8942f5, #6345ea);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  @media (max-width:1024px) {
      
     
    width: 15vw;
    }
  .Dashboard-Elements {
    height: 45vh;
  }

  @media (max-width: 800px) {
    .logo {
      font-size: 24px;
    }
  }
`;

const DashboardSubDiv = styled.div`

min-height: 100vh;
  background: linear-gradient(135deg, #a141fb, #8942f5, #6345ea);
  overflow-x: hidden;
  overflow-y: scroll;

  transition: all 0.5s ease-in-out; /* Smooth transition */
 
  width: ${(props) => (props.$subDashboardToggle ? "20vw" : "0px")};
  @media (max-width: 1250px) {
    width: ${(props) => (props.$subDashboardToggle ? "26vw" : "0px")};
  }

  @media (max-width: 1024px) {
    width: ${(props) => (props.$subDashboardToggle ? "32vw" : "0px")};
  }
  @media (max-width: 900px) {
    width: ${(props) => (props.$subDashboardToggle ? "40vw" : "0px")};
  }

`;
