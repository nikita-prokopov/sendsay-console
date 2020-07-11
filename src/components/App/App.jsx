import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { authFromSession } from '../../redux/actions';
import Auth from '../Auth';
import Console from '../Console';
import './App.scss';

const App = ({ page, authFromSession }) => {
  useEffect(() => {
    authFromSession();
  }, [authFromSession]);

  return (
    <div className='App'>
      {page === 'console' && <Console />}
      {page === 'auth' && <Auth />}
    </div>
  );
};

App.propTypes = {
  page: PropTypes.string.isRequired,
  authFromSession: PropTypes.func.isRequired,
};

const mapStateToProps = ({ page }) => {
  return { page };
};

export default connect(mapStateToProps, { authFromSession })(App);
