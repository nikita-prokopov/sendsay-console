import React from 'react';
import { cn } from '@bem-react/classname';
import PropTypes from 'prop-types';
import './Indicator.scss';

const classes = cn('Indicator');

const Indicator = React.memo(({ className, isSuccess }) => {
  return <div className={`${classes({ failed: !isSuccess, success: isSuccess })} ${className}`} />;
});

Indicator.propTypes = {
  isSuccess: PropTypes.bool.isRequired,
  className: PropTypes.string,
};

Indicator.defaultProps = {
  className: '',
};

export default Indicator;
