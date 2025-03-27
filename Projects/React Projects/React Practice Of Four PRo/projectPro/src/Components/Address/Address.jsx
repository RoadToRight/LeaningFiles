import React, { useState } from "react";
import styled from "styled-components";
import Button from "../Button.jsx/Button";

const countries = [
  { name: "Country", cities: ["City"] },
  { name: "India", value: "IN", cities: ["Delhi", "Mumbai"] },

  { name: "Pak", value: "PK", cities: ["Lahore", "Karachi"] },

  { name: "Bangladesh", value: "BG", cities: ["Dhaka", "Chittagong"] },
];

const Address = () => {
  const [country, setcountry] = useState(0);
  console.log(country);
  return (
    <AddressP className="container">
      <div className="dropdown">
        <select
          name=""
          id=""
          value={country}
          onChange={(e) => {
            console.log(e.target.value);
            setcountry(e.target.value);
          }}
        >
          {countries.map((x, i) => {
            return (
              <option key={i} value={i}>
                {x.name}
              </option>
            );
          })}
        </select>

        <select value={country}>
          {countries[country].cities.map((x, i) => {
            return (
              <option key={i} value={i}>
                {x}
              </option>
            );
          })}
        </select>
      </div>
      <br />
      <div className="inputs">
        <input type="text" placeholder="Area" />
        <input type="text" placeholder="Block eg : 1,2 etc" />
        <input type="text" placeholder="House No" />
      </div>
      <br />
      <button
        onClick={() => {
          console.log(country);
        }}
        className="save-btn"
      >
        SAVE
      </button>
    </AddressP>
  );
};

export default Address;

const AddressP = styled.div`
  width: 100%;
  height: calc(100vh - 72px);
  margin-top: 120px;
  margin-bottom: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  box-shadow: 3px 4px 12px 1px rgba(0, 0, 0, 0.25);
  background:linear-gradient(to top ,#150C83,#3d30c9 , lightblue);

  .dropdown {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    
    width: 50%;

    select {
      padding: 8px 12px;
    }
  }

  .inputs {
    display: flex;
    flex-direction: column;
    gap: 20px;
   
    width: 50%;
    padding: 10px;
    @media (max-width:568px) {
      width: 100%;
    }
    input {
      padding: 10px 15px;
      box-shadow: 3px 4px 12px 1px rgba(0, 0, 0, 0.25);
      border-radius: 5px;
      border: transparent;
    }
    input:focus {
      outline: none;
    }
  }
  .save-btn{

    padding: 8px 50px;
    border-radius: 5px;
    border: transparent;
    box-shadow: 3px 4px 12px 1px rgba(0, 0, 0, 0.25);
    font-weight: 630;
  }
`;
