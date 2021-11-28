import React, { useState, useEffect } from 'react'
import * as GLOBAL from './2d-engine/GLOBAL/defaults.js'
import { Rooms } from './2d-engine/Rooms/Rooms'
import { keyboardControls } from './2d-engine/Controllers/keyboardControls'
import { StarBackground } from './assets/starBackground/StarBackground.js'

const App = () => {
  const [playerState, setPlayerState] = useState(GLOBAL.DEFAULT_PLAYER_STATE)
  const PlayerSprite = playerState.sprite
  const GameRoom = Rooms.fullSizeRoom

  // Input listener
  useEffect(() => { 
    window.addEventListener('keydown', (e) => {
      keyboardControls(e)
    })

    return () => {
      window.removeEventListener('keydown', (e) => {
        keyboardControls(e)
      })
    }
  }, [])

  return (
    <>
      <StarBackground />
      <GameRoom
        id="game room"
        onClick={() => {
          console.log('clicked')
        }}
      >
        <PlayerSprite></PlayerSprite>
      </GameRoom>
    </>
  )
}

export default App
