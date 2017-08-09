import {combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import News from './News';
import NewsContent from './NewsContent';
import Themes from './Themes';

const Reducer = combineReducers({
    news: News,
    newsContent: NewsContent,
    themes: Themes,
    routing: routerReducer
});

export default Reducer