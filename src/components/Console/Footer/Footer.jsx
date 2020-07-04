import React from 'react';
import { cn } from '@bem-react/classname';
import SendRequestButton from '../SendRequestButton';
import GithubLink from '../../UI/GithubLink';
import FormatRequestButton from '../FormatRequestButton';
import './Footer.scss';

const classes = cn('Console');

const Footer = () => {
  return (
    <footer className={classes('Footer')}>
      <SendRequestButton>Отправить</SendRequestButton>
      <GithubLink className={classes('GithubLink')} />
      <FormatRequestButton />
    </footer>
  );
};

export default Footer;
