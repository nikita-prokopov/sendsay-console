import React from 'react';
import { action } from '@storybook/addon-actions';
import ExitButton from './ExitButton';

export default {
  component: ExitButton,
  title: 'UI/ExitButton',
};

export const Default = () => <ExitButton onClick={action('onClick')}>Выйти</ExitButton>;
