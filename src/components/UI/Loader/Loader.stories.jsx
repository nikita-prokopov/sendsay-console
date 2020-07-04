import React from 'react';
import Loader from './Loader';

export default {
  component: Loader,
  title: 'UI/Loader',
};

const style = {
  width: '40px',
  height: '40px',

  display: 'inline-flex',
  justifyContent: 'center',
  alignItems: 'center',

  backgroundColor: 'black',
};

export const Default = () => (
  <div style={style}>
    <Loader />
  </div>
);
