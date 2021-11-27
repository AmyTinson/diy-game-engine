import React, { useState, useEffect } from 'react'
import * as GLOBAL from './2d-engine/GLOBAL/DEFAULTS'
import { Rooms } from './2d-engine/Rooms/Rooms'

const App = () => {
  const [playerState, setPlayerState] = useState(GLOBAL.DEFAULT_PLAYER_STATE)

  const GameRoom = Rooms.fullSizeRoom

  return (
    <GameRoom
      id="game room"
      onClick={() => {
        console.log('clicked')
      }}
    ></GameRoom>
  )
}

export default App
