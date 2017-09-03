import React from 'react';
import { BackHandler, Platform } from 'react-native';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { addNavigationHelpers, StackNavigator } from 'react-navigation';
import SplashScreen from 'react-native-splash-screen';
import store from './store';
import AppNavigator from './navigator/AppNavigator';

export default class App extends React.Component {
  componentDidMount(){
    SplashScreen.hide();
  }
  render() {
    return (
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    );
  }
}
