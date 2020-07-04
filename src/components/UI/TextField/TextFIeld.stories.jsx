import React, { useState } from 'react';
import TextField from './TextField';

export default {
  component: TextField,
  title: 'UI/TextField',
};

export const Text = () => {
  const [value, setValue] = useState('');

  return (
    <TextField
      type='text'
      value={value}
      onChange={e => setValue(e.target.value)}
      name='text'
      placeholder='type: text'
    />
  );
};

export const Textarea = () => {
  const [value, setValue] = useState('');

  return (
    <TextField
      type='textarea'
      value={value}
      onChange={e => setValue(e.target.value)}
      name='textarea'
      placeholder='type: textarea'
    />
  );
};

export const Password = () => {
  const [value, setValue] = useState('');

  return (
    <TextField
      type='password'
      value={value}
      onChange={e => setValue(e.target.value)}
      name='password'
      placeholder='type: password'
    />
  );
};

export const WithLabel = () => {
  const [value, setValue] = useState('');

  return (
    <TextField
      type='text'
      value={value}
      onChange={e => setValue(e.target.value)}
      name='label'
      placeholder='with label'
      label='Логин'
    />
  );
};

export const WithOptional = () => {
  const [value, setValue] = useState('');

  return (
    <TextField
      type='text'
      value={value}
      onChange={e => setValue(e.target.value)}
      name='optional'
      placeholder='with optional'
      label='Логин'
      optional
    />
  );
};

export const Invalid = () => {
  const [value, setValue] = useState('');

  return (
    <TextField
      type='text'
      value={value}
      onChange={e => setValue(e.target.value)}
      name='optional'
      placeholder='with optional'
      label='Логин'
      optional
      isValid={false}
    />
  );
};

export const Disabled = () => {
  const [value, setValue] = useState('');

  return (
    <TextField
      type='text'
      value={value}
      onChange={e => setValue(e.target.value)}
      name='optional'
      placeholder='Disabled'
      label='Логин'
      optional
      disabled
    />
  );
};
