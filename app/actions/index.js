import * as ACTION_TYPE from './constant';
import axios from 'axios';

const ajaxAS = axios.create({
    // baseURL: 'http://112.74.64.217:3000',
    baseURL: 'http://192.168.0.103:3000',
    timeout: 3000,
    headers: { 'Access-Control-Allow-Origin': '*' }
});

//Show loading
export const requestPosts = () => ({
    type: ACTION_TYPE.REQUEST_POSTS,
    isFetching: true
})

//Finish from server.
export const receivePosts = (json) => ({
    type: ACTION_TYPE.REQUEST_DONE,
    preload: json,
    isFetching: false,
    date: Date.now()
})


export const receiveProductDetail = (json) => ({
    type: ACTION_TYPE.REQUEST_GETDETAIL,
    preload: json,
    isFetching: false,
    date: Date.now()
})

export const receiveHomeData = (json) => ({
    type: ACTION_TYPE.REQUEST_GETHOME,
    preload: json,
    isFetching: false,
    date: Date.now()
})

export const receiveCategories = (json) => ({
    type: ACTION_TYPE.REQUEST_GETCATEGORIES,
    preload: json,
    isFetching: false,
    date: Date.now()
})

export const receiveCategoryDetail = (json) => ({
    type: ACTION_TYPE.REQUEST_GETCATEGORYDETAIL,
    preload: json,
    isFetching: false,
    date: Date.now()
})


export const failPosts = (error) => ({
    type: ACTION_TYPE.REQUEST_FAIL,
    preload: error,
    isFetching: false,
    date: Date.now()
})

export const getHomeData = () => {
    return (dispatch, getState) => {
        //  console.log('state', getState())
        dispatch(requestPosts());
        ajaxAS.get('/home')
            .then((r) => {
                dispatch(receiveHomeData(r.data || {}))
            })
            .catch((error) => {
                dispatch(failPosts(error.message));
            })
    }
}

export const getProductDetail = (productId) => {
    return (dispatch, getState) => {
        dispatch(requestPosts());
        ajaxAS.get(`/detail?productId=${productId}`)
            .then((r) => {
                dispatch(receiveProductDetail(r.data || {}))
            })
            .catch((error) => {
                dispatch(failPosts(error.message));
            })
    }
}

export const getCategories = () => {
    return (dispatch, getState) => {
        dispatch(requestPosts());
        ajaxAS.get('/categories')
            .then((r) => {
                dispatch(receiveCategories(r.data || {}))
            })
            .catch((error) => {
                dispatch(failPosts(error.message));
            })
    }
}

export const getCategoryDetail = (categoryId) => {
    return (dispatch, getState) => {
        dispatch(requestPosts());
        ajaxAS.get(`/categoryDetail?categoryId=${categoryId}`)
            .then((r) => {
                dispatch(receiveCategoryDetail(r.data || {}))
            })
            .catch((error) => {
                dispatch(failPosts(error.message));
            })
    }
}

export const getLoation = () => {
    return (dispatch, getState) => {
        dispatch(requestPosts());
        ajaxAS.get('/home')
            .then((r) => {
                dispatch(receivePosts(r.data || []))
            })
            .catch((error) => {
                dispatch(failPosts(error.message));
            })
    }
}