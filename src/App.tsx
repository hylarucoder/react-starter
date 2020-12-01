import React, {useEffect} from 'react';
import Router from './Router';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const App: React.FC = (props: { children?: React.ReactNode }) => {
    useEffect(() => {
    }, []);
    return (
        <Router/>
    );
};

export default App;
