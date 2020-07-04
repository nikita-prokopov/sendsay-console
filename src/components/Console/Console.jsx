import React from 'react';
import { cn } from '@bem-react/classname';
import Header from './Header';
import History from '../History';
import Fields from './Fields';
import Footer from './Footer';
import './Console.scss';

const classes = cn('Console');

const Console = () => {
  return (
    <div className={classes()}>
      <Header />
      <History />
      <div className={classes('FieldsContainer')}>
        <Fields />
      </div>
      <Footer />
    </div>
  );
};

export default Console;
