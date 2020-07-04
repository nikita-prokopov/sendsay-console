import React from 'react';
import ReactDOM from 'react-dom';
import ReactSplit from 'react-split';
import PropTypes from 'prop-types';
import Dots from '../Dots';
import './Split.scss';

const gutterStyle = {
  width: '15px',
};

// В атрибут onDragEnd обязатльно должна передаваться функция,
// иначе split-react сломается

const Split = ({ children, shouldSaveSizes, minSize, expandToMin }) => {
  function saveSizes(sizes) {
    const json = JSON.stringify(sizes);
    sessionStorage.setItem('splitSizes', json);
  }

  function getSizes() {
    const json = sessionStorage.getItem('splitSizes');

    if (json) {
      return JSON.parse(json);
    }

    return [50, 50];
  }

  function styleGutter(direction) {
    const gutter = document.createElement('div');
    gutter.className = `gutter gutter-${direction} Split-Gutter`;

    ReactDOM.render(<Dots />, gutter);

    return gutter;
  }

  return (
    <ReactSplit
      minSize={minSize}
      expandToMin={expandToMin}
      sizes={getSizes()}
      gutterStyle={() => gutterStyle}
      onDragEnd={shouldSaveSizes ? sizes => saveSizes(sizes) : () => {}}
      className='Split'
      gutter={(index, direction) => styleGutter(direction)}
    >
      {children}
    </ReactSplit>
  );
};

Split.propTypes = {
  children: PropTypes.node.isRequired,
  shouldSaveSizes: PropTypes.bool,
  expandToMin: PropTypes.bool,
  minSize: PropTypes.oneOfType([PropTypes.number, PropTypes.arrayOf(PropTypes.number)]),
};

Split.defaultProps = {
  shouldSaveSizes: false,
  minSize: 100,
  expandToMin: true,
};

export default Split;
