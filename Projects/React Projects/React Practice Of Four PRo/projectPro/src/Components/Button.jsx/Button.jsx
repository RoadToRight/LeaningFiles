import React from 'react'
import styled from 'styled-components'

const Button = ({text}) => {
  return (
    <Buttons>
            <b>{text}</b>
    </Buttons>
  )
}

export default Button

const Buttons = styled.div`

background: var(--gradient--) ;
color: white;
padding:15px 25px;
box-shadow: inset 0 0 3px 1px rgba(250, 246, 246, 0.5);


`