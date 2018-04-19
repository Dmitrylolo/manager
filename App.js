import React, { Component } from 'react';
//import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './src/reducers';
import Router from './src/Router';

class App extends Component {
    

  componentWillMount() {
    console.ignoredYellowBox = ['Setting a timer'];
    const config = {
      apiKey: 'AIzaSyBLtlNhdfXLDrPziQ5VMXkDMwcc9NzUK_I',
      authDomain: 'manager-b7a27.firebaseapp.com',
      databaseURL: 'https://manager-b7a27.firebaseio.com',
      projectId: 'manager-b7a27',
      storageBucket: 'manager-b7a27.appspot.com',
      messagingSenderId: '499555383071'
    };

    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
