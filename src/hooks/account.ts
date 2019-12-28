import { useSelector } from 'react-redux';
import { RootState } from '@/store';
import React from 'react';

export const useAccountLoggedIn = () => {
  return useSelector((state: RootState) => state.account.loggedIn);
};

export const useLoading = () => {
  const [isLoading, setState] = React.useState(false);
  const load = (p: Promise<any>) => {
    setState(true);
    return p.finally(() => setState(false));
  };
  return [isLoading, load] as const; // infers [boolean, typeof load] instead of (boolean | typeof load)[]
};
