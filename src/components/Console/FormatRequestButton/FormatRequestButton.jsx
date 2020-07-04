import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { formatRequestValue } from '../../../redux/actions';
import UIFormatButton from '../../UI/FormatButton';

const FormatRequestButton = ({ formatRequestValue }) => {
  return <UIFormatButton onClick={formatRequestValue} className='Console-FormatRequestButton' />;
};

FormatRequestButton.propTypes = {
  formatRequestValue: PropTypes.func.isRequired,
};

export default connect(null, { formatRequestValue })(FormatRequestButton);
