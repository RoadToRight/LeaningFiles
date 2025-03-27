import React, { useState } from 'react'
import styled from 'styled-components'

const Navigation = ({data,GetInpVal,ButtonParAlag}) => {

  


  return (
    <NavigationBar>

       <LogoAndInput>
       <div className="logo"><img src="/images/Foody Zone.svg" alt="" /></div>
       <InputNaV onChange={GetInpVal} type="text" placeholder='Search Food'/>
       </LogoAndInput>

       <SelectedFood>
        
            <Navbutton onClick={() => ButtonParAlag(`All`)}>All</Navbutton>
            <Navbutton  onClick={() => ButtonParAlag(`men's clothing`)}>men's clothing</Navbutton>
            <Navbutton  onClick={() => ButtonParAlag(`jewelery`)}>jewelery</Navbutton>
            <Navbutton  onClick={() => ButtonParAlag(`electronics`)}>electronics</Navbutton>
            
       </SelectedFood>

    </NavigationBar>
  )
}

export default Navigation


const NavigationBar = styled.nav`

    min-height:200px;
    background-color:#323334;
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    gap:65px;
    padding:0 60px;
`
const LogoAndInput = styled.div`

    display:flex;
    justify-content:space-between;
    align-items:center;
    width:100%;

`
const SelectedFood = styled.div`


    display:flex;
    align-items:center;
    gap:15px;

`
const Navbutton = styled.button`

    background-color:#FF4343;
    Padding : 6px 12px 6px 12px;
    border-radius:5px;


` 

const InputNaV =  styled.input`

    border:1px solid #FF0909;
    border-radius:5px;
    Padding : 6px 12px 6px 12px;
    background-color:transparent;
`