import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchRequestValue } from '../../../redux/actions';
import { isStringEmpty } from '../../../services/validation';
import UIButton from '../../UI/Button';

const SendRequestButton = ({
  fetchRequestValue,
  isLoading,
  children,
  isFieldsValid,
  requestValue,
}) => {
  function handleClick() {
    fetchRequestValue(requestValue);
  }

  return (
    <UIButton
      onClick={handleClick}
      className='Console-SendRequestButton'
      isLoading={isLoading}
      isDisabled={!isFieldsValid || isStringEmpty(requestValue)}
      // isStringEmpty can be computed in selectors "reselect" library
    >
      {children}
    </UIButton>
  );
};

SendRequestButton.propTypes = {
  fetchRequestValue: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  isLoading: PropTypes.bool.isRequired,
  isFieldsValid: PropTypes.bool.isRequired,
  requestValue: PropTypes.string.isRequired,
};

const mapStateToProps = ({ request: { isLoading, isValid, value } }) => {
  return { isLoading, isFieldsValid: isValid, requestValue: value };
};

export default connect(mapStateToProps, { fetchRequestValue })(SendRequestButton);
