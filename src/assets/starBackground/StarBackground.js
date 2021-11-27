/* Adapted from Starry Night by Sylvian Garnot - https://codepen.io/sylvaingarnot/pen/LNJgaZ  */

import styled, { keyframes } from "styled-components"

const Stars = styled.div`
  z-index: 0;
  background: #000 url('https://image.ibb.co/mjnygo/stars.png') repeat top center;
  position: absolute;
  display: block;
  top:0;
  bottom:0;
  left:0;
  right:0;
  width:100%;
  height:100%;
`

const twinkle = keyframes`
from {background-position:0 0;}
to {background-position:-10000px 5000px;}
`

const Twinkling = styled.div`
  z-index: 1;
  background: transparent url('https://image.ibb.co/ir1DE8/twinkling.png') repeat top center;
  animation: ${twinkle} 400s linear infinite;
  position: absolute;
  display: block;
  top:0;
  bottom:0;
  left:0;
  right:0;
  width:100%;
  height:100%;
`

export const StarBackground = () => {
  return(
    <>
    <Stars />
    <Twinkling />
    </>
  )
}