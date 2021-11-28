/**
 * Takes in keyboard input (either WASD or arrow keys) for movement
 * @param {keyBoard event} e 
 */

export const keyboardControls = (e) => {
  const key = e.key
  switch (key) {
    case 'ArrowUp':
      console.log('arrow ups')
      break
    case 'w':
      console.log('w was pressed')
      break
    case 'ArrowLeft':
      console.log('arrowleftsss')
      break
    case 'a':
      console.log('a was pressed')
      break
    case 'ArrowDown':
      console.log('arrow down')
      break
    case 's':
      console.log('s was pressed')
      break
    case 'ArrowRight':
      console.log('arrow right')
      break
    case 'd':
      console.log('d was pressed')
      break
  }
}