import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import UIAccount from '../../UI/Account';
import './Account.scss';

const Account = ({ login, sublogin }) => {
  return <UIAccount login={login} sublogin={sublogin} className='Console-Account' />;
};

Account.propTypes = {
  login: PropTypes.string.isRequired,
  sublogin: PropTypes.string,
};

Account.defaultProps = {
  sublogin: '',
};

const mapStateToProps = ({ user: { login, sublogin } }) => {
  return { login, sublogin };
};

export default connect(mapStateToProps)(Account);
