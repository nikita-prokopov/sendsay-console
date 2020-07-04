import React from 'react';
import PropTypes from 'prop-types';
import { cn } from '@bem-react/classname';
import Loader from '../Loader';
import './Button.scss';

const classes = cn('Button');

const Button = React.memo(({ children, disabled, isLoading, onClick, type, className }) => {
  return (
    <button
      className={`${classes({ loading: isLoading })} ${className}`}
      type={type}
      disabled={disabled || isLoading}
      onClick={onClick}
    >
      {isLoading ? <Loader className={classes('Loader')} /> : null}
      <span className={classes('Text', { hidden: isLoading })}>{children}</span>
    </button>
  );
});

Button.defaultProps = {
  disabled: false,
  isLoading: false,
  type: 'button',
  onClick: null,
  className: '',
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  disabled: PropTypes.bool,
  isLoading: PropTypes.bool,
  onClick: PropTypes.func,
  type: PropTypes.string,
  className: PropTypes.string,
};

export default Button;
