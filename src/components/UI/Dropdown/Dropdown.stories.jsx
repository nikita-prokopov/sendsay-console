import React from 'react';
import { action } from '@storybook/addon-actions';
import Dropdown from './Dropdown';

export default {
  component: Dropdown,
  title: 'UI/Dropdown',
};

export const Default = () => (
  <Dropdown
    list={[
      {
        onClick: action('onClickExecute'),
        text: 'Выполнить',
      },
      {
        onClick: action('onClickCopy'),
        text: 'Скопировать',
      },
      'divider',
      {
        onClick: action('onClickDelete'),
        text: 'Удалить',
        background: 'red',
      },
    ]}
  />
);

export const Customizable = () => (
  <Dropdown
    list={[
      {
        onClick: action('onClickExecute'),
        text: 'Выполнить',
      },
      'divider',
      {
        onClick: action('onClickCopy'),
        text: 'Скопировать',
      },
      'divider',
      {
        onClick: action('onClickDelete'),
        text: 'Удалить',
        background: 'red',
      },
      {
        onClick: action('onClickExecute'),
        text: 'Выполнить',
      },
      'divider',
      {
        onClick: action('onClickCopy'),
        text: 'Скопировать',
        background: 'red',
      },
    ]}
  />
);
