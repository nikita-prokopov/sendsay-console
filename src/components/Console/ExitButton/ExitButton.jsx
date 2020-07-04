import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logout } from '../../../redux/actions';
import UIExitButton from '../../UI/ExitButton';
import './ExitButton.scss';

const ExitButton = ({ logout }) => {
  return <UIExitButton onClick={logout} className='Console-ExitButton' />;
};

ExitButton.propTypes = {
  logout: PropTypes.func.isRequired,
};

export default connect(null, { logout })(ExitButton);
