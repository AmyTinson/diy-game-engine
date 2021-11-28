import React, { useState, useEffect } from 'react'
import * as GLOBAL from './2d-engine/GLOBAL/defaults.js'
import { Rooms } from './2d-engine/Rooms/Rooms'
import { keyboardControls } from './2d-engine/Controllers/keyboardControls'
import { StarBackground } from './assets/starBackground/StarBackground.js'
import { ReactComponent as PlayerIcon } from './assets/cuteCometIcon/cuteCometIcon.svg'

const App = () => {
  const [playerState, setPlayerState] = useState(GLOBAL.DEFAULT_PLAYER_STATE)

  const GameRoom = Rooms.fullSizeRoom

  useEffect(() => { 
    window.addEventListener('keydown', (e) => {
      keyboardControls(e)
    })

    return () => {
      window.removeEventListener('keydown', () => {
        console.log('key down!')
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
        <PlayerIcon></PlayerIcon>
      </GameRoom>
    </>
  )
}

export default App
