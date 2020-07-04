import React, { useEffect, useState, useRef } from 'react';
import ReactDOM from 'react-dom';
import UIDropdown from '../../UI/Dropdown';
import './Dropdown.scss';

const Dropdown = ({ list, requestButton, isShown, hideDropdown }) => {
  const [left, setLeft] = useState(null);
  const [top, setTop] = useState('50px');

  const dropdown = useRef();

  useEffect(() => {
    function handleScroll() {
      const { left } = requestButton.getBoundingClientRect();
      setLeft(left);
    }

    if (requestButton) {
      requestButton.closest('.History-Track').addEventListener('scroll', handleScroll);

      const { left } = requestButton.getBoundingClientRect();
      setLeft(left);
    }

    return () => {
      if (requestButton) {
        requestButton.closest('.History-Track').removeEventListener('scroll', handleScroll);
      }
    };
  }, [requestButton]);

  useEffect(() => {
    function handleClickOutside(event) {
      if (requestButton && requestButton.contains(event.target)) {
        return;
      }

      if (dropdown.current && !dropdown.current.contains(event.target)) {
        hideDropdown();
      }
    }

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdown, requestButton, hideDropdown]);

  useEffect(() => {
    function handleKeydownOutside(event) {
      if (event.code === 'Escape') {
        hideDropdown();
      }

      if (event.code === 'Enter' && requestButton && !requestButton.contains(event.target)) {
        hideDropdown();
      }
    }

    document.addEventListener('keydown', handleKeydownOutside);

    return () => {
      document.removeEventListener('keydown', handleKeydownOutside);
    };
  }, [dropdown, requestButton, hideDropdown]);

  useEffect(() => {
    function dropdownTop() {
      const dropdownInfo = dropdown.current.getBoundingClientRect();
      console.log(dropdownInfo);
    }

    if (dropdown.current) {
      window.addEventListener('resize', dropdownTop);
    }

    return () => {
      window.removeEventListener('resize', dropdownTop);
    };
  });

  if (!isShown || !left) return null;

  return ReactDOM.createPortal(
    <div className='History-Dropdown' style={{ left, top }} ref={dropdown}>
      <UIDropdown list={list} />
    </div>,
    document.querySelector('.History-ContainerForDropdown')
  );
};

export default Dropdown;
