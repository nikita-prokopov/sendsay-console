import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setRequestValid, setRequestValue } from '../../../redux/actions';
import TextField from '../../UI/TextField';

const Request = ({ setRequestValid, setRequestValue, value, isValid }) => {
  function handleChange(e) {
    setRequestValid();
    setRequestValue(e.target.value);
  }

  return (
    <TextField
      value={value}
      onChange={handleChange}
      isValid={isValid}
      label='Запрос:'
      type='textarea'
      labelGrey
      labelSmall
      className='Console-Field'
      monospace
    />
  );
};

Request.propTypes = {
  isValid: PropTypes.bool.isRequired,
  value: PropTypes.string.isRequired,
  setRequestValid: PropTypes.func.isRequired,
  setRequestValue: PropTypes.func.isRequired,
};

const mapStateToProps = ({ request: { value, isValid } }) => {
  return { value, isValid };
};

export default connect(mapStateToProps, { setRequestValid, setRequestValue })(Request);
