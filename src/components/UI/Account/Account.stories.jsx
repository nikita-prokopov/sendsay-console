import React from 'react';
import Account from './Account';

export default {
  component: Account,
  title: 'UI/Account',
};

export const WithSublogin = () => <Account login='Login' sublogin='Sublogin' />;

export const WithoutSublogin = () => <Account login='Login' />;
