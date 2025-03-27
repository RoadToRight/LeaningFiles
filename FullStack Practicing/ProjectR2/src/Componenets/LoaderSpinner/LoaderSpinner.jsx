import React from 'react'
import { ClimbingBoxLoader} from 'react-spinners'
import styled from 'styled-components';
const LoaderSpinner = ({LoadingText}) => {
  return (
    <LoadingDiv>

<ClimbingBoxLoader loading={true} color={"#FD2031"} size={"27"}/> <br />
<h3>{LoadingText}</h3>
    </LoadingDiv>
  )
}

export default LoaderSpinner;


const LoadingDiv = styled.div`

    min-height: 100vh;
    background-color: #252424;
    position: fixed;
    top:0px;
    width: 100%;
    z-index: 100;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
h3{
    color: #FD2031;
}
`