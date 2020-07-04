import React from 'react';
import PropTypes from 'prop-types';
import { cn } from '@bem-react/classname';
import { ReactComponent as Colon } from './icons/colon.svg';
import './Account.scss';

const classes = cn('Account');

const Account = ({ login, sublogin, className }) => {
  return (
    <div className={`${className} ${classes()}`}>
      {login}
      {sublogin === '' ? null : <Colon className={classes('Colon')} />}
      {sublogin}
    </div>
  );
};

Account.defaultProps = {
  sublogin: '',
  className: '',
};

Account.propTypes = {
  login: PropTypes.string.isRequired,
  sublogin: PropTypes.string,
  className: PropTypes.string,
};

export default Account;
