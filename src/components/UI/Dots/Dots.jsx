import React from 'react';
import PropTypes from 'prop-types';

const Dots = ({ className }) => {
  return (
    <svg
      className={`${className} Dots`}
      width='4'
      height='18'
      viewBox='0 0 4 18'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <circle cx='2' cy='2' r='2' fill='black' fillOpacity='0.2' />
      <circle cx='2' cy='9' r='2' fill='black' fillOpacity='0.2' />
      <circle cx='2' cy='16' r='2' fill='black' fillOpacity='0.2' />
    </svg>
  );
};

Dots.propTypes = {
  className: PropTypes.string,
};

Dots.defaultProps = {
  className: '',
};

export default Dots;
