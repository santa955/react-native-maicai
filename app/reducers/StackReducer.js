import { NavigationActions } from 'react-navigation';
import { AppStackNavigator } from '../navigator/AppNavigator';

// Start with two routes: The Main screen, with the Login screen on top.
const Tabs = AppStackNavigator.router.getActionForPathAndParams('Tabs');
const Detail = AppStackNavigator.router.getActionForPathAndParams('Detail');
const initialNavState = AppStackNavigator.router.getStateForAction(
  NavigationActions.init()
);

const StackReducer = (state = initialNavState, action) => {
  let nextState = AppStackNavigator.router.getStateForAction(action, state);
  // Simply return the original `state` if `nextState` is null or undefined.
  return nextState || state;
}

export default StackReducer