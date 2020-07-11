import React from 'react';
import { cn } from '@bem-react/classname';
import PropTypes from 'prop-types';
import TextField from '../UI/TextField';
import Button from '../UI/Button';
import Alert from '../UI/Alert';
import { isStringEmpty } from '../../services/validation';
import './LoginForm.scss';

const classes = cn('LoginForm');

const LoginForm = ({ inputs, isLoading, alert, onSubmit, onChange, className }) => {
  const { login, sublogin, password } = inputs;

  function isButtonUnavailable() {
    const arr = Object.values(inputs);

    const invaldInput = arr.find(input => {
      return input.isValid === false;
    });

    if (invaldInput) {
      return true;
    }

    if (isStringEmpty(login.value) || isStringEmpty(password.value)) {
      return true;
    }

    return false;
  }

  return (
    <form onSubmit={onSubmit} className={`${classes()} ${className}`}>
      <h2 className={classes('Heading')}>API-консолька</h2>

      <Alert
        className={classes('Alert', { hidden: !alert.isShown })}
        title={alert.title}
        details={alert.details}
      />

      <TextField
        className={classes('TextField')}
        value={login.value}
        onChange={onChange}
        name='login'
        isValid={login.isValid}
        label='Логин'
      />

      <TextField
        className={classes('TextField')}
        value={sublogin.value}
        onChange={onChange}
        name='sublogin'
        isValid={sublogin.isValid}
        label='Сублогин'
        optional
      />

      <TextField
        className={classes('TextField')}
        value={password.value}
        onChange={onChange}
        name='password'
        isValid={password.isValid}
        label='Пароль'
        type='password'
      />

      <Button type='submit' isLoading={isLoading} isDisabled={isLoading || isButtonUnavailable()}>
        Войти
      </Button>
    </form>
  );
};

LoginForm.propTypes = {
  inputs: PropTypes.shape({
    login: PropTypes.shape({
      value: PropTypes.string.isRequired,
      isValid: PropTypes.bool.isRequired,
    }).isRequired,

    sublogin: PropTypes.shape({
      value: PropTypes.string.isRequired,
      isValid: PropTypes.bool.isRequired,
    }).isRequired,

    password: PropTypes.shape({
      value: PropTypes.string.isRequired,
      isValid: PropTypes.bool.isRequired,
    }).isRequired,
  }).isRequired,

  alert: PropTypes.shape({
    title: PropTypes.string.isRequired,
    details: PropTypes.string.isRequired,
    isShown: PropTypes.bool.isRequired,
  }).isRequired,

  isLoading: PropTypes.bool.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  className: PropTypes.string,
};

LoginForm.defaultProps = {
  className: '',
};

export default LoginForm;
