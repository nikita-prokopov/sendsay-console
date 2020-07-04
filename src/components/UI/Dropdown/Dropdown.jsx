import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { cn } from '@bem-react/classname';
import PropTypes from 'prop-types';
import './Dropdown.scss';

const classes = cn('Dropdown');

const Dropdown = ({ list, className }) => {
  const items = list.map(item => {
    switch (item) {
      case 'divider':
        return <li className={classes('Divider')} key={uuidv4()} />;

      default:
        return (
          <li className={classes('ItemContainer')} key={uuidv4()}>
            <button
              className={classes('Item', {
                background: item.background ? item.background : 'blue',
              })}
              onClick={item.onClick}
            >
              {item.text}
            </button>
          </li>
        );
    }
  });

  return <ul className={`${classes()} ${className}`}>{items}</ul>;
};

Dropdown.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.oneOfType([
      PropTypes.oneOf(['divider']),
      PropTypes.shape({
        onClick: PropTypes.func,
        text: PropTypes.string.isRequired,
        background: PropTypes.oneOf(['red']),
      }),
    ])
  ).isRequired,
  className: PropTypes.string,
};

Dropdown.defaultProps = {
  className: '',
};

export default Dropdown;
