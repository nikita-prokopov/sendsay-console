const initialState = {
  login: '',
  sublogin: '',
};

export default function user(state = initialState, action) {
  switch (action.type) {
    case 'SET_USER':
      return action.user;

    case 'RESET_USER':
      return {
        login: '',
        sublogin: '',
      };

    default:
      return state;
  }
}
