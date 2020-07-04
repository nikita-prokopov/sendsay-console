import React from 'react';
import PropTypes from 'prop-types';
import { cn } from '@bem-react/classname';
import { ReactComponent as MehFaceIcon } from './icons/meh-face.svg';
import './Alert.scss';

const classes = cn('Alert');

const Alert = React.memo(({ title, details, className }) => {
  return (
    <div className={`${classes()} ${className}`}>
      <MehFaceIcon className={classes('Icon')} />
      <div className={classes('TextContainer')}>
        <span className={classes('Title')}>{title}</span>
        <span className={classes('Details')}>{details}</span>
      </div>
    </div>
  );
});

Alert.propTypes = {
  title: PropTypes.string.isRequired,
  details: PropTypes.string.isRequired,
  className: PropTypes.string,
};

Alert.defaultProps = {
  className: '',
};

export default Alert;
