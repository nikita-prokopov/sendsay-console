import React from 'react';
import { cn } from '@bem-react/classname';
import Logo from '../../UI/Logo';
import Account from '../Account';
import ExitButton from '../ExitButton';
import FullScreenButton from '../FullScreenButton';
import './Header.scss';

const classes = cn('Console');

const Header = () => {
  return (
    <header className={classes('Header')}>
      <Logo className={classes('Logo')} />
      <h2 className={classes('Heading')}>API-консолька</h2>
      <Account className={classes('Account')} />
      <ExitButton className={classes('ExitButton')} />
      <FullScreenButton className={classes('FullScreenButton')} />
    </header>
  );
};

export default Header;
