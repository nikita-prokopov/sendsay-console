export function setUser(user) {
  return {
    type: 'SET_USER',
    user,
  };
}

export function resetUser() {
  return {
    type: 'RESET_USER',
  };
}
