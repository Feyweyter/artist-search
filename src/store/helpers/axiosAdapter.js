import axios from 'axios';
import {call} from 'redux-saga/effects';
import {constants} from './index';

const AXIOS_TIMEOUT = 10000;

function* axiosAdapter(options) {
    const headers = {
        Accept: 'application/json',
    };

    const reqOptions = {
        baseURL: 'http://ws.audioscrobbler.com/2.0',
        timeout: AXIOS_TIMEOUT,
        ...options,
        params: {
            ...constants.params,
            ...options.params,
        },
        headers,
    };

    return yield call(axios, reqOptions);
}

export default axiosAdapter;
