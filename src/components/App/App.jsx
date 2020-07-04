import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { authFromSession } from '../../redux/actions';
import Auth from '../Auth';
import Console from '../Console';
import './App.scss';

function App({ page, authFromSession }) {
  useEffect(() => {
    authFromSession();
  }, [authFromSession]);

  function getPage() {
    if (page === 'console') {
      return <Console />;
    }

    if (page === 'auth') {
      return <Auth />;
    }

    return null;
  }

  return <div className='App'>{getPage()}</div>;
}

App.propTypes = {
  page: PropTypes.string.isRequired,
  authFromSession: PropTypes.func.isRequired,
};

const mapStateToProps = ({ page }) => {
  return { page };
};

export default connect(mapStateToProps, { authFromSession })(App);
