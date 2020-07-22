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

// https://formik.org/docs/overview
// https://github.com/final-form/react-final-form
// pristine/dirty/touched/focused
const LoginFormContainer = ({ className, setPage, setUser }) => {
  const [isLoading, setIsLoading] = useState(false);

  const [alert, setAlert] = useState({
    isShown: false,
    title: '',
    details: '',
  });

  const [inputs, setInputs] = useState({
    login: { value: '', isValid: true }, // pristine/dirty/touched/focused
    sublogin: { value: '', isValid: true },
    password: { value: '', isValid: true },
  });

  const { login, sublogin, password } = inputs;

  // handleBlur + handleFocus
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

  // validator can accept fields as argument to easy test
  // validater can be outside of component
  function validation() {
    // what if this function is async?
    // what if validation is async?
    // state machine concept
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

    // prepare object and then set state

    if (!isValid) {
      throw new Error();
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      validation();
    } catch {
      // dont eat errors
      return;
    }

    // try {
    //   validation(fields);
    // } catch (err) {
    //   if (err instanceof ValidationError) {
    //     setFormStateInvalid(err.errors); // {email: "Is Required"}
    //     return
    //   }

    //   throw err
    // }

    setIsLoading(true);

    const options = {
      login: login.value,
      password: password.value,
    };

    // if too much logic here
    // normalize function for data transfer object
    if (!isStringEmpty(sublogin.value)) {
      options.sublogin = sublogin.value;
    }

    // no need as component unmounts
    clearInputs();

    try {
      const user = await delayIfNeccesary(1000, authorization.bind(null, options));
      // https://rangle.slides.com/yazanalaboudi/deck#/10/0/0
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
    } finally {
      setIsLoading(false);
      // setTimeout(() => {
      //   setIsLoading(false);
      // }, 1000);
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
