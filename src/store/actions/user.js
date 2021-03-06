import * as actionTypes from './actionTypes';

export const login = (user) => {
  return {
    type: actionTypes.LOGIN,
    user: user,
  };
};

export const logout = () => {
  return {
    type: actionTypes.LOGOUT,
  };
};

export const finishLoading = () => {
  return {
    type: actionTypes.FINISH_LOADING,
  };
};
