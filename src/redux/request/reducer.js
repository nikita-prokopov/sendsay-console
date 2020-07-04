import { formatJson } from '../../services/sendsayFormatter';
import { isValidJson, isPlainObject } from '../../services/validation';

const initialState = {
  value: '',
  isValid: true,
  isLoading: false,
};

export default function request(state = initialState, action) {
  switch (action.type) {
    case 'SET_REQUEST_VALUE':
      return { ...state, value: action.value };

    case 'FORMAT_REQUEST_VALUE': {
      if (!isValidJson(state.value)) {
        return { ...state, isValid: false };
      }

      const obj = JSON.parse(state.value);

      if (!isPlainObject(obj)) {
        return { ...state, isValid: false };
      }

      const formatted = formatJson(state.value);
      return { ...state, value: formatted };
    }

    case 'SET_REQUEST_INVALID':
      return { ...state, isValid: false };

    case 'SET_REQUEST_VALID':
      return { ...state, isValid: true };

    case 'SET_REQUEST_LOADING':
      return { ...state, isLoading: action.isLoading };

    case 'RESET_REQUEST':
      return {
        value: '',
        isValid: true,
        isLoading: false,
      };

    default:
      return state;
  }
}
