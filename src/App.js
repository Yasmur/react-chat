import React, { useContext } from 'react';
import {BrowserRouter} from 'react-router-dom';
import AppRouter from './components/AppRouter';
import Navbar from './components/Navbar';
import './App.css';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Context } from '.';
import Loader from './components/Loader';

const App = () => {
  const {auth} = useContext(Context)
    const [user, loading, error] = useAuthState(auth)

    if (loading) {
       <Loader/>
    }
    return(
    <BrowserRouter>
     <Navbar/>
     <AppRouter/>
    </BrowserRouter>
  );
};

export default App;