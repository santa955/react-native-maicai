import * as ACTIONS_TYPE from '../actions/constant';
let initialState = {
    isFetching: false,
    themes: []
}

const Themes = (state = initialState, action) => {
    switch (action.type) {
        case ACTIONS_TYPE.REQUEST_POSTS:
            return Object.assign({}, state, {
                isFetching: action.isFetching
            });
        case ACTIONS_TYPE.REQUEST_DONE:
            return Object.assign({}, state, {
                themes: action.preload,
                date: action.date,
                isFetching: action.isFetching
            });
        case ACTIONS_TYPE.REQUEST_FAIL:
            return Object.assign({}, state, {
                error: action.preload,
                date: action.date,
                isFetching: action.isFetching
            });
        default:
            return state;
    }
}

export default Themes;