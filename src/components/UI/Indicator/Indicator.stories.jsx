import React from 'react';
import Indicator from './Indicator';

export default {
  component: Indicator,
  title: 'UI/Indicator',
};

export const Success = () => <Indicator isSuccess />;
export const Failed = () => <Indicator isSuccess={false} />;
