import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import Router from './Router';
import { store } from '@/store';
import { userLoggedIn } from '@/store/account';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const App: React.FC = (props: { children?: React.ReactNode }) => {
  useEffect(() => {
    // 在这里请求服务端看看是否已经登陆
    store.dispatch(userLoggedIn(false));
  }, []);
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
};

export default App;
