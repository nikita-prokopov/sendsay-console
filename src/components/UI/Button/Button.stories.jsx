import React from 'react';
import { action } from '@storybook/addon-actions';
import Button from './Button';

export default {
  component: Button,
  title: 'UI/Button',
};

export const Default = () => <Button onClick={action('onClick')}>Войти</Button>;

export const Loading = () => (
  <Button onClick={action('onClick')} isLoading>
    Войти
  </Button>
);

export const Disabled = () => (
  <Button onClick={action('onClick')} disabled>
    Войти
  </Button>
);
