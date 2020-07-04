/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';
import PropTypes from 'prop-types';
import { cn } from '@bem-react/classname';
import './TextField.scss';

const classes = cn('TextField');

const TextField = React.memo(
  ({
    isValid,
    value,
    onChange,
    placeholder,
    disabled,
    monospace,
    name,
    label,
    optional,
    type,
    className,
    labelGrey,
    labelSmall,
  }) => {
    const commonFieldProps = { value, onChange, placeholder, disabled, name };
    let Field;

    if (type === 'textarea') {
      Field = (
        <textarea
          autoComplete='off'
          className={classes('Field', {
            invalid: !isValid,
            type: 'textarea',
            font_monospace: monospace,
          })}
          {...commonFieldProps}
        />
      );
    } else {
      Field = (
        <input
          autoComplete='off'
          className={classes('Field', { invalid: !isValid })}
          type={type}
          {...commonFieldProps}
        />
      );
    }

    return (
      <div className={`${classes()} ${className}`}>
        <div className={classes('TextContainer')}>
          <label
            className={classes('Label', {
              invalid: !isValid,
              color_grey: labelGrey,
              size_small: labelSmall,
            })}
            htmlFor={name}
          >
            {label}
          </label>
          <span className={classes('Optional', { invalid: !isValid, hidden: !optional })}>
            Опционально
          </span>
        </div>
        {Field}
      </div>
    );
  }
);

TextField.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  name: PropTypes.string,
  isValid: PropTypes.bool,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  label: PropTypes.string,
  optional: PropTypes.bool,
  type: PropTypes.string,
  className: PropTypes.string,
  labelGrey: PropTypes.bool,
  labelSmall: PropTypes.bool,
  monospace: PropTypes.bool,
};

TextField.defaultProps = {
  isValid: true,
  disabled: false,
  optional: false,
  labelSmall: false,
  monospace: false,
  labelGrey: false,
  onChange: null,
  type: 'text',
  placeholder: '',
  label: '',
  className: '',
  name: '',
};

export default TextField;
