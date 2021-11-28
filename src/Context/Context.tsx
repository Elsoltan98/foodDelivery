import React, {createContext, useReducer} from 'react';
import {SigninReducer} from './reducers';

export const SignInContext = createContext();

export const SignInContextProvider = props => {
  const [SignedIn, dispatchSignedIn] = useReducer(SigninReducer, {
    userToken: null,
  });

  return (
    <SignInContext.Provider value={{SignedIn, dispatchSignedIn}}>
      {props.children}
    </SignInContext.Provider>
  );
};
