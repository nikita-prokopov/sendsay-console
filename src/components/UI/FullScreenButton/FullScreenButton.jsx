import React from 'react';
import PropTypes from 'prop-types';
import { cn } from '@bem-react/classname';
import { ReactComponent as SetFullScreenIcon } from './icons/set-fullscreen.svg';
import { ReactComponent as RemoveFullScreenIcon } from './icons/remove-fullscreen.svg';
import './FullScreenButton.scss';

const classes = cn('FullScreenButton');

const FullScreenButton = ({ isFullScreen, onClick, className }) => {
  return (
    <button type='button' className={`${classes()} ${className}`} onClick={onClick}>
      {isFullScreen ? <RemoveFullScreenIcon /> : <SetFullScreenIcon />}
    </button>
  );
};

FullScreenButton.propTypes = {
  isFullScreen: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string,
};

FullScreenButton.defaultProps = {
  className: '',
};

export default FullScreenButton;
