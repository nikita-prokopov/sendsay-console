import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setPage, setUser } from '../../redux/actions';
import LoginForm from './LoginForm';
import {
  isLoginCorrect,
  isSubloginCorrect,
  isPasswordCorrect,
} from '../../services/sendsayValidation';
import { authorization } from '../../services/sendsay';
import { isStringEmpty } from '../../services/validation';
import { delayIfNeccesary } from '../../services/delay';

const LoginFormContainer = ({ className, setPage, setUser }) => {
  const [isLoading, setIsLoading] = useState(false);

  const [alert, setAlert] = useState({
    isShown: false,
    title: '',
    details: '',
  });

  const [inputs, setInputs] = useState({
    login: { value: '', isValid: true },
    sublogin: { value: '', isValid: true },
    password: { value: '', isValid: true },
  });

  const { login, sublogin, password } = inputs;

  const handleChange = useCallback(
    e => {
      const { name, value } = e.target;

      setInputs(prevState => {
        const newState = { ...prevState };
        newState[name].value = value;
        newState[name].isValid = true;
        return newState;
      });
    },
    [setInputs]
  );

  function setInputInvalid(name) {
    setInputs(prevState => {
      const newState = { ...prevState };
      newState[name].isValid = false;
      return newState;
    });
  }

  function clearInputs() {
    setInputs(prevState => {
      const newState = { ...prevState };

      newState.login.value = '';
      newState.sublogin.value = '';
      newState.password.value = '';

      return newState;
    });
  }

  function validation() {
    let isValid = true;

    if (!isLoginCorrect(login.value)) {
      setInputInvalid('login');
      isValid = false;
    }

    if (!isSubloginCorrect(sublogin.value)) {
      setInputInvalid('sublogin');
      isValid = false;
    }

    if (!isPasswordCorrect(password.value)) {
      setInputInvalid('password');
      isValid = false;
    }

    if (!isValid) {
      throw new Error();
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      validation();
    } catch {
      return;
    }

    setIsLoading(true);

    const options = {
      login: login.value,
      password: password.value,
    };

    if (!isStringEmpty(sublogin.value)) {
      options.sublogin = sublogin.value;
    }

    clearInputs();

    try {
      const user = await delayIfNeccesary(1000, authorization.bind(null, options));
      setUser(user);
      clearInputs();
      setIsLoading(false);
      setPage('console');
    } catch (err) {
      setAlert({
        isShown: true,
        title: 'Вход не вышел',
        details: err,
      });
      setIsLoading(false);
    }
  }

  return (
    <LoginForm
      className={className}
      onChange={handleChange}
      onSubmit={handleSubmit}
      alert={alert}
      isLoading={isLoading}
      inputs={inputs}
    />
  );
};

LoginFormContainer.propTypes = {
  className: PropTypes.string,
  setPage: PropTypes.func.isRequired,
  setUser: PropTypes.func.isRequired,
};

LoginFormContainer.defaultProps = {
  className: '',
};

export default connect(null, { setPage, setUser })(LoginFormContainer);
