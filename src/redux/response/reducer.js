import { formatJson } from '../../services/sendsayFormatter';

const initialState = {
  value: '',
  isValid: true,
};

export default function response(state = initialState, action) {
  switch (action.type) {
    case 'SET_RESPONSE_VALUE':
      return { ...state, value: action.value };

    case 'FORMAT_RESPONSE_VALUE': {
      const formatted = formatJson(state.value);
      return { ...state, value: formatted };
    }

    case 'SET_RESPONSE_INVALID':
      return { ...state, isValid: false };

    case 'SET_RESPONSE_VALID':
      return { ...state, isValid: true };

    case 'RESET_RESPONSE':
      return {
        value: '',
        isValid: true,
      };

    default:
      return state;
  }
}
