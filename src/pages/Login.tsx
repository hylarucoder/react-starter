import React from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { userLoggedIn } from '@/store/account';

const Login: React.FC = () => {
  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: '/' } };
  const dispatch = useDispatch();

  const login = async () => {
    try {
      dispatch(userLoggedIn(true));
      history.replace(from);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <button onClick={login}>click me to login</button>
    </div>
  );
};

export default Login;
