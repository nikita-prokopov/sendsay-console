import React, { useState } from 'react';
import UIFullScreenButton from '../../UI/FullScreenButton';

// При нажатии F11 state меняться не будет и приложение сломается

const FullScreenButton = () => {
  const [isFullScreen, setIsFullScreen] = useState(false);
  // https://github.com/streamich/react-use/blob/master/docs/useFullscreen.md

  async function setFullScreen() {
    try {
      await document.body.requestFullscreen();
      // document.addEventListener("smth...")
      setIsFullScreen(true);
      // at least log error
    } catch {}
  }

  async function exitFullScreen() {
    try {
      await document.exitFullscreen();
      setIsFullScreen(false);
    } catch {}
  }

  function handleClick() {
    if (isFullScreen) {
      exitFullScreen();
    } else {
      setFullScreen();
    }
  }

  return (
    <UIFullScreenButton
      onClick={handleClick}
      className='Console-FullScreenButton'
      isFullScreen={isFullScreen}
    />
  );
};

export default FullScreenButton;
