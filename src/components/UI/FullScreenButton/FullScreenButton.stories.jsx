import React, { useState } from 'react';
import FullScreenButton from './FullScreenButton';

export default {
  component: FullScreenButton,
  title: 'UI/FullScreenButton',
};

export const Default = () => {
  const [isFullScreen, setIsFullScreen] = useState(false);

  const handleClick = () => {
    setIsFullScreen(prevState => {
      return !prevState;
    });
  };

  return <FullScreenButton isFullScreen={isFullScreen} onClick={handleClick} />;
};
