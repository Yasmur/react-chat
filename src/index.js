import React, { createContext } from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firestore';

firebase.initializeApp({
  apiKey: "AIzaSyBsqo_u2XgX9DSL9Z7v8U9h9EWe9-jcSnQ",
  authDomain: "chat-react-39453.firebaseapp.com",
  projectId: "chat-react-39453",
  storageBucket: "chat-react-39453.appspot.com",
  messagingSenderId: "76262723779",
  appId: "1:76262723779:web:7537747eb725c74df09276",
  measurementId: "G-YG5NJ6Y3NF"
}
);

export const Context = createContext(null)
const auth = firebase.auth()
const firestore = firebase.firestore()
ReactDOM.render(
  <Context.Provider value={{
    firebase,
    auth,
    firestore
  }}>
 <App />
  </Context.Provider>,

   

  document.getElementById('root')
);

