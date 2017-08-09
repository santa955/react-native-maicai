import * as ACTION_TYPE from './constant';
import axios from 'axios';

const ajaxAS = axios.create({
    // baseURL: 'https://news-at.zhihu.com/api/4/news',
    baseURL: 'http://lovestreet.leanapp.cn/zhihu/',
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

export const failPosts = (error) => ({
    type: ACTION_TYPE.REQUEST_FAIL,
    preload: error,
    isFetching: false,
    date: Date.now()
})

//Fetch Last tnews
export const getLastNews = () => {
    return (dispatch) => {
        dispatch(requestPosts());
        ajaxAS.get('news/latest')
            .then((r) => {
                dispatch(receivePosts(r.data.stories || []))
            })
            .catch((error) => {
                dispatch(failPosts(error.message));
            })
    }
}

export const getBeforeNews = (date) => {
    return (dispatch) => {
        dispatch(requestPosts());
        ajaxAS.get('/before/' + date)
            .then((r) => {
                dispatch(receivePosts(r.data.stories || []))
            })
            .catch((error) => {
                dispatch(failPosts(error.message));
            })
    }
}

export const getNewsContents = (id) => {
    return (dispatch) => {
        dispatch(requestPosts());
        ajaxAS.get('/news/' + id)
            .then((r) => {
                dispatch(receivePosts(r.data || {}))
            })
            .catch((error) => {
                dispatch(failPosts(error.message));
            })
    }
}

export const getThemes = () => {
    return (dispatch) => {
        dispatch(requestPosts());
        ajaxAS.get('/themes')
            .then((r) => {
                dispatch(receivePosts(r.data.others || {}))
            })
            .catch((error) => {
                dispatch(failPosts(error.message));
            })
    }
}