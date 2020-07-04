import React from 'react';
import { action } from '@storybook/addon-actions';
import FormatButton from './FormatButton';

export default {
  component: FormatButton,
  title: 'UI/FormatButton',
};

export const Default = () => <FormatButton onClick={action('onClick')} />;
