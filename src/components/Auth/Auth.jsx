import React from 'react';
import { cn } from '@bem-react/classname';
import Logo from '../UI/Logo';
import LoginFormContainer from '../LoginForm';
import GithubLink from '../UI/GithubLink';
import './Auth.scss';

const classes = cn('Auth');

const Auth = () => {
  return (
    <div className={classes()}>
      <div className={classes('Container')}>
        <Logo />
        <LoginFormContainer className={classes('Form')} />
        <GithubLink />
      </div>
    </div>
  );
};

export default Auth;
