import { useHistory } from 'react-router';
import React from 'react';
import { useAccountLoggedIn } from '@/hooks/account';

export const Button = () => {
  const history = useHistory();
  const loggedIn = useAccountLoggedIn();
  return loggedIn ? (
    <button
      onClick={() => {
        history.push('/');
      }}
    >
      logout
    </button>
  ) : (
    <p>you are not login</p>
  );
};
