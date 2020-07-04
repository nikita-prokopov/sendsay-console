import React from 'react';
import { cn } from '@bem-react/classname';
import PropTypes from 'prop-types';
import Indicator from '../Indicator';
import Dots from '../Dots';
import './ComplexButton.scss';

const classes = cn('ComplexButton');

const ComplexButton = React.memo(({ text, isSuccess, onButtonClick, onDotsClick, className }) => {
  return (
    <div className={`${classes()} ${className}`}>
      <button className={classes('Button')} onClick={onButtonClick}>
        <Indicator isSuccess={isSuccess} className={classes('Indicator')} />
        <span className={classes('Text')}>{text}</span>
      </button>
      <button className={classes('DotsButton')} onClick={onDotsClick}>
        <Dots />
      </button>
    </div>
  );
});

ComplexButton.propTypes = {
  text: PropTypes.string.isRequired,
  isSuccess: PropTypes.bool.isRequired,
  onButtonClick: PropTypes.func,
  onDotsClick: PropTypes.func,
  className: PropTypes.string,
};

ComplexButton.defaultProps = {
  onDotsClick: null,
  onButtonClick: null,
  className: '',
};

export default ComplexButton;
