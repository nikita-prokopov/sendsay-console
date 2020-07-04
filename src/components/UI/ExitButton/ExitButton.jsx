import React from 'react';
import PropTypes from 'prop-types';
import { cn } from '@bem-react/classname';
import { ReactComponent as LogOutIcon } from './icons/log-out.svg';
import './ExitButton.scss';

const classes = cn('ExitButton');

const ExitButton = ({ onClick, className }) => {
  return (
    <button className={`${classes()} ${className}`} type='button' onClick={onClick}>
      Выйти
      <LogOutIcon className={classes('Icon')} />
    </button>
  );
};

ExitButton.propTypes = {
  onClick: PropTypes.func,
  className: PropTypes.string,
};

ExitButton.defaultProps = {
  onClick: null,
  className: '',
};

export default ExitButton;
