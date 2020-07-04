import React from 'react';
import { action } from '@storybook/addon-actions';
import ComplexButton from './ComplexButton';

export default {
  component: ComplexButton,
  title: 'UI/ComplexButton',
};

const style = {
  backgroundColor: '#FFEEDB',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '200px',
  height: '100px',
};

function onButtonClick(e) {
  action('onButtonClick')(e);
}

function onDotsClick(e) {
  action('onDotsButtonClick')(e);
}

export const Success = () => {
  return (
    <div style={style}>
      <ComplexButton
        text='task.get'
        isSuccess
        onButtonClick={onButtonClick}
        onDotsClick={onDotsClick}
      />
    </div>
  );
};

export const Failed = () => {
  return (
    <div style={style}>
      <ComplexButton
        text='task.get'
        isSuccess={false}
        onButtonClick={onButtonClick}
        onDotsClick={onDotsClick}
      />
    </div>
  );
};
