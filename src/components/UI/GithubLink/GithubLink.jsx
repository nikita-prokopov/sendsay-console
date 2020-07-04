import React from 'react';
import PropTypes from 'prop-types';
import './GithubLink.scss';

const GithubLink = ({ className }) => {
  return (
    <a
      href='https://github.com/nikita-prokopov'
      className={`GithubLink ${className}`}
      target='_blank'
      rel='noopener noreferrer'
    >
      @nikita-prokopov
    </a>
  );
};

GithubLink.propTypes = {
  className: PropTypes.string,
};

GithubLink.defaultProps = {
  className: '',
};

export default GithubLink;
