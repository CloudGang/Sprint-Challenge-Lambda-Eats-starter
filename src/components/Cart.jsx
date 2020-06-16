import React from 'react'
import styled from 'styled-components'

const StyledCartContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

const StyledCard = styled.div`
  padding: 20px;
  font-size: 1.4rem;
`

const Mod = styled.span`
  font-style: italic;
`

export default function Cart({ order }) {
  console.log("Cart -> order", order)
  return (
    <StyledCartContainer>
      {order.length !== 0 ?
        <>
          <h2>Congratulations!</h2>
          {order.map(o => {
            return (
              <StyledCard>
                Hello <Mod>{o.customer}</Mod>! Your <Mod>{o.size}</Mod> Pizza with <Mod>{o.toppingsChecked.map(topping => `${topping.name}, `)}</Mod> is ready!
                <br />
                <br />
                {o.instructions ? `Special Instruction: ${o.instructions} ` : ''}

              </StyledCard>
            )
          })}
        </>
        : <h2>Your Cart is empty!</h2>}
    </StyledCartContainer>
  )
}
