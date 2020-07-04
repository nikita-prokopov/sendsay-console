import React from 'react';
import PropTypes from 'prop-types';

const Cross = ({ className }) => {
  return (
    <svg
      className={`${className}`}
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <g opacity='0.8'>
        <path d='M3 3L21 21' stroke='#0D0D0D' strokeWidth='2' strokeLinecap='round' />
        <path d='M21 3L3 21' stroke='#0D0D0D' strokeWidth='2' strokeLinecap='round' />
      </g>
    </svg>
  );
};

Cross.propTypes = {
  className: PropTypes.string,
};

Cross.defaultProps = {
  className: '',
};

export default Cross;
