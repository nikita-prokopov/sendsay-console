import React from 'react';
import Split from '../../UI/Split';
import Response from '../Response';
import Request from '../Request';
import './Fields.scss';

const Fields = () => {
  return (
    <div className='Console-Fields'>
      <Split shouldSaveSizes minSize={640}>
        <Request />
        <Response />
      </Split>
    </div>
  );
};

export default Fields;
