import React from 'react';
import { StackNavigator } from 'react-navigation';
import AppTabNavigator from './AppTabNavigator';
import Detail from '../container/Detail';
import CustomerAnimate from '../animations';
import Search from '../container/Search';
import WebView from '../container/WebView';

const AppStackNavigator = StackNavigator({
  Tabs: {
    screen: AppTabNavigator,
    navigationOptions: {
      header: null
    }
  },
  Detail: {
    screen: Detail,
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#2eb257',
        height: 20
      },
      headerTitleStyle: {
        color: 'white',
        fontSize: 14,
        textAlign: 'center'
      },
      headerBackTitleStyle: {
        color: 'white',
        fontSize: 14
      },
      headerTintColor: 'white'
    }
  },
  WebView: {
    screen: WebView,
    navigationOptions: {
      header: null
    }
  },
  Search: {
    screen: Search,
    navigationOptions: {
      header: null
    }
  }
}, {
    initialRouteName: 'Tabs',
    headerMode: 'screen',
    transitionConfig: () => {
      return {
        screenInterpolator: (sceneProps) => {
          return CustomerAnimate.Horizontal(sceneProps);
        }
      }
    }
  });

export default AppStackNavigator;