import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Alert } from 'react-native';
import OneSignal from 'react-native-onesignal';
import { createStackNavigator } from 'react-navigation';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { homeScreen } from './src/reducers/postHomeScreen_reducer';
import LoginScreen from './src/components/LoginScreen';
import PostHomeScreen from './src/components/PostHomeScreen';

console.disableYellowBox = true;

const RootStack = createStackNavigator(
  {
    Login: LoginScreen,
    PostHome: PostHomeScreen,
    navigationOptions: ({ navigation }) => ({
      header: null
    })
  },
  {
    initialRouteName: 'Login',
    headerMode: 'none' //anula el header del stack raiz que es el login y resto de la app(deberia volver para atras con algun boton)
  }
);

export default class App extends Component {
 
  render() {
    const appReducer = combineReducers({
      homeScreen
    });

    const createStoreWithMidddleware = applyMiddleware(thunk)(createStore);
    const store = createStoreWithMidddleware(appReducer);

    return (
      <Provider store={store}>
        <RootStack />
      </Provider>
    );
  }
}

