import {UPDATE_SIGN_IN} from '../types';

export const SigninReducer = (
  state: any,
  action: {type: any; payload: any},
) => {
  switch (action.type) {
    case UPDATE_SIGN_IN:
      return {
        ...state,
        userToken: action.payload.userToken,
      };
  }
};
