import styled from "styled-components"
import * as GLOBAL from '../GLOBAL/DEFAULTS'

export const Rooms = {
  fullSizeRoom: styled.canvas`
    width: 100%;
    height: 100vh;
    position: absolute;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    z-index: -1;
    background-color: ${props => props.backgroundColor ? props.backgroundColor : GLOBAL.DEFAULT_ROOM_BACKGROUND_COLOR };
  `,
}