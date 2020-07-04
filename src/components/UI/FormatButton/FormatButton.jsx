import React from 'react';
import PropTypes from 'prop-types';
import { cn } from '@bem-react/classname';
import { ReactComponent as AlignRightIcon } from './icons/align-right.svg';
import './FormatButton.scss';

const classes = cn('FormatButton');

const FormatButton = ({ onClick, className }) => {
  return (
    <button className={`${classes()} ${className}`} type='button' onClick={onClick}>
      <AlignRightIcon className={classes('Icon')} />
      Форматировать
    </button>
  );
};

FormatButton.propTypes = {
  onClick: PropTypes.func,
  className: PropTypes.string,
};

FormatButton.defaultProps = {
  onClick: null,
  className: '',
};

export default FormatButton;
