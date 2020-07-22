import { formatJson } from '../../services/sendsayFormatter';

/* Элемент истории
{
    actionName: '',
    requestJson: '',
    responseJson: '',
    isSuccess: true,
    id: '',
}
*/

const MAX_LENGTH = 15;

// {
//   history: [1,2],
//   edntities: {
//     1: {
//       actionName: '',
//       requestJson: '',
//       responseJson: '',
//       isSuccess: true,
//       id: 1,
//     }
//     ,2: {
//       actionName: '',
//       requestJson: '',
//       responseJson: '',
//       isSuccess: true,
//       id: 2,
//     }
//   }
// }

// https://redux.js.org/recipes/structuring-reducers/normalizing-state-shape

export default function history(state = [], action) {
  switch (action.type) {
    case 'SET_HISTORY':
      return action.history.slice(0, MAX_LENGTH);

    case 'CLEAR_HISTORY':
      return [];

    case 'ADD_ITEM_TO_HISTORY': {
      const newState = [...state];

      const requestJson = formatJson(action.item.requestJson);
      const responseJson = formatJson(action.item.responseJson);
      const newItem = { ...action.item, requestJson, responseJson };

      const indexOfNonuniqueItem = state.findIndex(item => {
        return item.requestJson === requestJson;
      });

      if (indexOfNonuniqueItem !== -1) {
        newState.splice(indexOfNonuniqueItem, 1);
      }

      newState.unshift(newItem);
      return newState.slice(0, MAX_LENGTH);
    }

    case 'REMOVE_ITEM_FROM_HISTORY': {
      return state.filter(item => {
        return item.id !== action.id;
      });
    }

    default:
      return state;
  }
}
