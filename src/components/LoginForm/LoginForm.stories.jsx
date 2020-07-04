import React from 'react';
import { action } from '@storybook/addon-actions';
import LoginForm from './LoginForm';

export default {
  component: LoginForm,
  title: 'LoginForm',
};

const inputs = {
  login: { value: '', isValid: true },
  sublogin: { value: '', isValid: true },
  password: { value: '', isValid: true },
};

const inputsInvalid = {
  login: { value: '', isValid: true },
  sublogin: { value: '', isValid: false },
  password: { value: '', isValid: false },
};

const defaultAlert = {
  isShown: false,
  title: '',
  details: '',
};

const withAlert = {
  isShown: true,
  title: 'Title',
  details: 'Details',
};

function handleSubmit(e) {
  e.preventDefault();
  action('onSubmit')(e);
}

function handleChange(e) {
  action('onChange')(e);
}

export const Default = () => (
  <LoginForm
    onSubmit={handleSubmit}
    onChange={handleChange}
    inputs={inputs}
    isLoading={false}
    alert={defaultAlert}
  />
);

export const Invalid = () => (
  <LoginForm
    onSubmit={handleSubmit}
    onChange={handleChange}
    inputs={inputsInvalid}
    isLoading={false}
    alert={defaultAlert}
  />
);

export const Loading = () => (
  <LoginForm
    onSubmit={handleSubmit}
    onChange={handleChange}
    inputs={inputs}
    alert={defaultAlert}
    isLoading
  />
);

export const Alert = () => (
  <LoginForm
    onSubmit={handleSubmit}
    onChange={handleChange}
    inputs={inputs}
    alert={withAlert}
    isLoading={false}
  />
);
