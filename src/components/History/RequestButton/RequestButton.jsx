import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ComplexButton from '../../UI/ComplexButton';
import {
  setRequestValid,
  setResponseInvalid,
  setResponseValid,
  setRequestValue,
  setResponseValue,
} from '../../../redux/actions';
import './RequestButton.scss';

const RequestButton = ({
  isSuccess,
  actionName,
  requestJson,
  responseJson,
  setRequestValid,
  setResponseInvalid,
  setResponseValid,
  setRequestValue,
  setResponseValue,
  onDotsClick,
  onItemClick,
}) => {
  const handleItemClick = () => {
    onItemClick();
    setRequestValue(requestJson);
    setResponseValue(responseJson);

    if (isSuccess) {
      setRequestValid();
      setResponseValid();
    } else {
      setResponseInvalid();
    }
  };

  return (
    <ComplexButton
      isSuccess={isSuccess}
      text={actionName} // truncate with ...
      onButtonClick={handleItemClick}
      onDotsClick={onDotsClick}
      className='History-RequestButton'
    />
  );
};

RequestButton.propTypes = {
  isSuccess: PropTypes.bool.isRequired,
  actionName: PropTypes.string.isRequired,
  requestJson: PropTypes.string.isRequired,
  responseJson: PropTypes.string.isRequired,
  setRequestValid: PropTypes.func.isRequired,
  setResponseInvalid: PropTypes.func.isRequired,
  setResponseValid: PropTypes.func.isRequired,
  setRequestValue: PropTypes.func.isRequired,
  setResponseValue: PropTypes.func.isRequired,
  onDotsClick: PropTypes.func.isRequired,
  onItemClick: PropTypes.func.isRequired,
};

export default connect(null, {
  setRequestValid,
  setResponseInvalid,
  setResponseValid,
  setRequestValue,
  setResponseValue,
})(RequestButton);
