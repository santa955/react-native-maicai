import React, { Component } from 'react';
import { Image, StyleSheet, View, Text, BackHandler, Platform } from 'react-native';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addNavigationHelpers } from 'react-navigation';
import AppStackNavigator from './AppStackNavigator'

// const AppWithNavigationState = ({ dispatch, nav }) => {
//   return <AppStackNavigator navigation={addNavigationHelpers({ dispatch, state: nav })} />
// };

export { AppStackNavigator }

class AppNavigator extends React.Component {
  componentWillMount() {
    if (Platform.OS === 'android') {
      BackHandler.addEventListener('hardwareBackPress', this.onBackAndroid.bind(this));
    }
  }
  componentWillUnmount() {
    if (Platform.OS === 'android') {
      BackHandler.removeEventListener('hardwareBackPress', this.onBackAndroid.bind(this));
    }
  }
  render() {
    let dispatch = this.props.dispatch;
    let state = this.props.nav;
    return <AppStackNavigator navigation={addNavigationHelpers({ dispatch, state })} />
  }
  onBackAndroid = () => {
    const { dispatch, navigation, nav } = this.props;
    if (nav.routes.length === 1 && (nav.routes[0].index != 0)) {
      dispatch({ type: 'NAVGATION_HOME' });
      return true
    }

    if (nav.routes.length > 1) {
      dispatch({ type: 'Navigation/BACK' });
      return true;
    }

    BackHandler.exitApp()
  }
}

const mapStateToProps = state => {
  return {
    nav: state.nav
  }
};

export default connect(mapStateToProps)(AppNavigator);