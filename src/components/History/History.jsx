import React, { useEffect } from 'react';
import { cn } from '@bem-react/classname';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setHistory } from '../../redux/actions';
import List from './List';
import ClearHistory from './ClearHistory';
import './History.scss';

const classes = cn('History');

const History = ({ className, history, setHistory }) => {
  function getHistory() {
    const json = sessionStorage.getItem('sendsayHistory');
    // 1. saga for side effect
    // 2. https://github.com/rt2zz/redux-persist (sessionStorage/Cookie/localStorage/AsyncStorage)
    // redux -> component props

    if (json) {
      return JSON.parse(json);
    }

    return [];
  }

  // sesstionStorage -> redux -> component props
  // sesstionStorage -> saga -> redux -> component props
  // component event -> action -> saga -> sesstionStorage+redux

  function saveHistory() {
    const json = JSON.stringify(history);
    sessionStorage.setItem('sendsayHistory', json);
  }

  useEffect(() => {
    const history = getHistory();
    setHistory(history);
  }, [setHistory]);

  useEffect(() => {
    // call saveHistory on append/remove item from history
    window.addEventListener('beforeunload', saveHistory);
    return () => window.removeEventListener('beforeunload', saveHistory);
  });

  return (
    <div className={`${classes()} ${className}`}>
      <div className={classes('ScrolledContainer')}>
        <div className={classes('Track')}>
          <List history={history} />
        </div>
        <div className={classes('ContainerForDropdown')} />
        <div className={classes('Gradient')} />
      </div>
      <ClearHistory />
    </div>
  );
};

History.propTypes = {
  className: PropTypes.string,
  history: PropTypes.arrayOf(PropTypes.object),
  setHistory: PropTypes.func.isRequired,
};

History.defaultProps = {
  className: '',
  history: [],
};

const mapStateToProps = ({ history }) => {
  return { history };
};

export default connect(mapStateToProps, { setHistory })(History);
