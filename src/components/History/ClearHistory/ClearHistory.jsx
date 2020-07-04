import React from 'react';
import PropTypes from 'prop-types';
import { cn } from '@bem-react/classname';
import { connect } from 'react-redux';
import { clearHistory } from '../../../redux/actions';
import Cross from '../../UI/Cross';
import './ClearHistory.scss';

const classes = cn('History');

const ClearHistory = ({ clearHistory }) => {
  return (
    <button className={classes('ClearHistory')} onClick={clearHistory}>
      <Cross />
    </button>
  );
};

ClearHistory.propTypes = {
  clearHistory: PropTypes.func.isRequired,
};

export default connect(null, { clearHistory })(ClearHistory);
