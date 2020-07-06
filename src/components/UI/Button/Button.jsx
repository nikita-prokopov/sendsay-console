import React from 'react';
import PropTypes from 'prop-types';
import { cn } from '@bem-react/classname';
import Loader from '../Loader';
import './Button.scss';

const classes = cn('Button');

const Button = React.memo(({ children, isDisabled, isLoading, onClick, type, className }) => {
  return (
    <button
      className={`${classes({ loading: isLoading })} ${className}`}
      type={type}
      disabled={isDisabled || isLoading}
      onClick={onClick}
    >
      {isLoading ? <Loader className={classes('Loader')} /> : null}
      <span className={classes('Text', { hidden: isLoading })}>{children}</span>
    </button>
  );
});

Button.defaultProps = {
  isDisabled: false,
  isLoading: false,
  type: 'button',
  onClick: null,
  className: '',
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  isDisabled: PropTypes.bool,
  isLoading: PropTypes.bool,
  onClick: PropTypes.func,
  type: PropTypes.string,
  className: PropTypes.string,
};

export default Button;
