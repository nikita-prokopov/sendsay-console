import React from 'react';
import PropTypes from 'prop-types';
import { cn } from '@bem-react/classname';
import { v4 as uuidv4 } from 'uuid';
import ListItem from '../ListItem';
import './List.scss';

const classes = cn('History');

const List = ({ history }) => {
  const Items = history.map(item => {
    return (
      <li className={classes('ListItem')} key={uuidv4()}>
        <ListItem
          isSuccess={item.isSuccess}
          actionName={item.actionName}
          requestJson={item.requestJson}
          responseJson={item.responseJson}
          id={item.id}
        />
      </li>
    );
  });

  return <ul className={classes('List')}>{Items}</ul>;
};

List.propTypes = {
  history: PropTypes.arrayOf(PropTypes.object),
};

List.defaultProps = {
  history: [],
};

export default List;
