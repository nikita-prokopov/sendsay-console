import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import TextField from '../../UI/TextField';

const Response = ({ isValid, value }) => {
  return (
    <TextField
      isValid={isValid}
      value={value}
      disabled
      label='Ответ:'
      type='textarea'
      labelGrey
      labelSmall
      className='Console-Field'
      monospace
    />
  );
};

Response.propTypes = {
  isValid: PropTypes.bool.isRequired,
  value: PropTypes.string.isRequired,
};

const mapStateToProps = ({ response: { isValid, value } }) => {
  return { isValid, value };
};

export default connect(mapStateToProps)(Response);
