import React from 'react';
import Split from './Split';

export default {
  component: Split,
  title: 'UI/Split',
};

export const Default = () => {
  return (
    <Split>
      <textarea />
      <textarea />
    </Split>
  );
};
