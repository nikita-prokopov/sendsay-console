import React from 'react';
import Alert from './Alert';

export default {
  component: Alert,
  title: 'UI/Alert',
};

const title = 'Вход не вышел';
const details = `{id: "error/auth/failed", explain: "wrong_credentials"}`;

export const Default = () => <Alert title={title} details={details} />;
