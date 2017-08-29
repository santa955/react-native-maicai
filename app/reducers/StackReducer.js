import { NavigationActions } from 'react-navigation';
import { AppStackNavigator } from '../navigator/AppNavigator';
import * as ACTIONS_TYPE from '../actions/constant';

// Start with two routes: The Main screen, with the Login screen on top.
const Tabs = AppStackNavigator.router.getActionForPathAndParams('Tabs');
const Detail = AppStackNavigator.router.getActionForPathAndParams('Detail');
const initialNavState = AppStackNavigator.router.getStateForAction(
  NavigationActions.init()
);

const StackReducer = (state = initialNavState, action) => {
  let nextState;
  switch (action.type) {
    case ACTIONS_TYPE.NAVGATION_HOME:
      nextState = AppStackNavigator.router.getStateForAction(
        NavigationActions.navigate({ routeName: 'Home' }),
        state
      );
      break;
    default:
      nextState = AppStackNavigator.router.getStateForAction(action, state);
  }
  return nextState || state;
}

export default StackReducer