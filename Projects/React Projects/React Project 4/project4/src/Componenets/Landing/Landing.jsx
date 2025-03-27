import React, { useState } from 'react'
import styled from 'styled-components';

const Landing = ({data,search}) => {

    let [makeCarts , setCarts] = useState();
   
  return (
    
    <Landingdiv>
        <ParentCarts>
        {

            data?.map(function(x,i){

            return <Carts key={i}>

                <Images className="images"><img width={100} src={`${x.image}`} alt="" /></Images>
                
                <Information className="information">
                <h3>{x.title}</h3>
                <h6>{x.description}</h6>
                <h3>$ {x.price.toFixed(2)}</h3>
                </Information>

                </Carts>

            })

        }
        </ParentCarts>
    </Landingdiv>
  )
}

export default Landing;

const Landingdiv = styled.div`
    
    min-height:calc(100vh - 200px);
    background-image:url('/images/bg.png');
    background-size:cover;
   
    padding: 0px;
    margin: 0px;

`
const ParentCarts = styled.div`
    padding-top:60px ;
    min-height:100vh;
    display: grid;
    grid-template-columns: repeat(3,1fr);
    padding-left: 40px;
   
    box-sizing: border-box;
    gap:30px;
    
`



const Images = styled.div`

    width:300px;
    
   display: flex;
   justify-content: center;
   align-items: center;


`
export const Carts = styled.div`

box-shadow: 3px 4px 12px 1px rgba(255, 246, 246, 0.25);
width: 350px;
height: 250px;
display: flex;
gap: 20px;
padding: 0px 16px;
box-sizing: border-box;
border-radius: 5px;
    
`
const Information = styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;

    h6{

        font-size: 8px;

    }

`



