import React from 'react'
import styled from 'styled-components'
import { Button } from 'reactstrap'
import { Link } from 'react-router-dom'

const StyledContainer = styled.div`
  overflow: hidden;
`

const StyledContainer2 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 60vh;
  width: 100vw;
  b{
    text-decoration: none;
    color:#17a2b8;
  }
`

export default function Home() {

  return (

    <StyledContainer>

      <StyledContainer2>

        <h1>Pizza at the <b>Click</b> of a Button</h1>

        <Link to="/order">

          <Button color="info" style={{ padding: '5px 5px', borderRadius: '5' }}>🍕</Button>
        
        </Link>
      
      </StyledContainer2>
    
    </StyledContainer>
  
  )

}
