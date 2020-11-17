import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './store/reducer/reducer';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import * as firebaseui from 'firebaseui';

// Firebase intialisation
const firebaseConfig = {
  apiKey: 'AIzaSyC0hKFnDKrzZm4P8vLbJHxV1zCqp6Fwzh8',
  authDomain: 'library-top-495ec.firebaseapp.com',
  databaseURL: 'https://library-top-495ec.firebaseio.com',
  projectId: 'library-top-495ec',
  storageBucket: 'library-top-495ec.appspot.com',
  messagingSenderId: '855450153433',
  appId: '1:855450153433:web:865a912ef06b82d00ee9c8',
};

firebase.initializeApp(firebaseConfig);

// FirebaseUI
const uiConfig = {
  signInSuccessUrl: '<url-to-redirect-to-on-success>',
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.EmailAuthProvider.PROVIDER_ID,
  ],
  tosUrl: '<your-tos-url>',
};

const ui = new firebaseui.auth.AuthUI(firebase.auth());
ui.start('#firebaseui-auth-container', uiConfig);

// Redux Store
const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);
