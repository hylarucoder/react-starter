import { useHistory } from 'react-router';
import React from 'react';
import { useDispatch } from 'react-redux';
import { userLoggedIn } from '@/store/account';
import { useAccountLoggedIn } from '@/hooks/account';

export const Button = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const loggedIn = useAccountLoggedIn();
  return loggedIn ? (
    <button
      onClick={() => {
        dispatch(userLoggedIn(false));
        history.push('/');
      }}
    >
      logout
    </button>
  ) : (
    <p>you are not login</p>
  );
};
