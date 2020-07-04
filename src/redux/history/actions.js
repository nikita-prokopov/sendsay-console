export function setHistory(history) {
  return {
    type: 'SET_HISTORY',
    history,
  };
}

export function addItemToHistory(item) {
  return {
    type: 'ADD_ITEM_TO_HISTORY',
    item,
  };
}

export function removeItemFromHistory(id) {
  return {
    type: 'REMOVE_ITEM_FROM_HISTORY',
    id,
  };
}

export function clearHistory() {
  return {
    type: 'CLEAR_HISTORY',
  };
}
