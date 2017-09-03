import { combineReducers } from 'redux';
import { NavigationActions } from 'react-navigation';
import { AppStackNavigator } from '../navigator/AppNavigator';
import StackReducer from './StackReducer';
import HomeReducer from './HomeReducer';
import ProductDetailReducer from './ProductDetailReducer';
import CategoriesReducer from './CategoriesReducer';
import CategoryDetailReducer from './CategoryDetailReducer';
import SearchProducts from './SearchProductReducer';
const Reducer = combineReducers({
    nav: StackReducer,
    home: HomeReducer,
    detail: ProductDetailReducer,
    categories: CategoriesReducer,
    categoryDetail: CategoryDetailReducer,
    searchProducts: SearchProducts
});

export default Reducer