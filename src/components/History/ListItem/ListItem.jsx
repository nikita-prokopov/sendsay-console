import React, { useState, useRef, useCallback } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import RequestButton from '../RequestButton';
import saveTextToClipboard from '../../../services/saveTextToClipboard';
import Dropdown from '../Dropdown';
import { fetchRequestValue, removeItemFromHistory, setRequestValue } from '../../../redux/actions';

const ListItem = ({
  isSuccess,
  actionName,
  requestJson,
  responseJson,
  fetchRequestValue,
  removeItemFromHistory,
  setRequestValue,
  id,
}) => {
  const [isDropdownShown, setIsDropdownShown] = useState(false);
  const requestButton = useRef();

  function notifyCopied() {
    const textElement = requestButton.current.firstElementChild.firstElementChild.lastElementChild;

    const notification = document.createElement('span');
    notification.classList.add('History-Copied');
    notification.textContent = 'Скопировано';

    function handleTransitionEnd() {
      notification.remove();
    }

    notification.addEventListener('transitionend', handleTransitionEnd);

    textElement.parentElement.append(notification);

    setTimeout(() => {
      notification.style = 'opacity: 0';
      notification.removeEventListener('transitionend', handleTransitionEnd);
    }, 600);
  }

  const onItemClick = useCallback(() => {
    setIsDropdownShown(false);
  }, [setIsDropdownShown]);

  const onDotsClick = useCallback(() => {
    setIsDropdownShown(prevState => !prevState);
  }, [setIsDropdownShown]);

  return (
    <div ref={requestButton}>
      <RequestButton
        isSuccess={isSuccess}
        actionName={actionName}
        requestJson={requestJson}
        responseJson={responseJson}
        onItemClick={onItemClick}
        onDotsClick={onDotsClick}
      />
      <Dropdown
        isShown={isDropdownShown}
        hideDropdown={() => setIsDropdownShown(false)}
        requestButton={requestButton.current}
        list={[
          {
            onClick() {
              setIsDropdownShown(false);
              setRequestValue(requestJson);
              fetchRequestValue(requestJson);
            },
            text: 'Выполнить',
          },
          {
            onClick: () => {
              setIsDropdownShown(false);
              saveTextToClipboard(requestJson);
              notifyCopied();
            },
            text: 'Скопировать',
          },
          'divider',
          {
            text: 'Удалить',
            background: 'red',
            onClick() {
              setIsDropdownShown(false);
              removeItemFromHistory(id);
            },
          },
        ]}
      />
    </div>
  );
};

ListItem.propTypes = {
  isSuccess: PropTypes.bool.isRequired,
  actionName: PropTypes.string.isRequired,
  requestJson: PropTypes.string.isRequired,
  responseJson: PropTypes.string.isRequired,
  fetchRequestValue: PropTypes.func.isRequired,
  removeItemFromHistory: PropTypes.func.isRequired,
  setRequestValue: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
};

export default connect(null, { fetchRequestValue, removeItemFromHistory, setRequestValue })(
  ListItem
);
