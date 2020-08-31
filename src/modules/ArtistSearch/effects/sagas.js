import {call, put,} from 'redux-saga/effects';

import {axiosAdapter, sagaGenerator,} from '../../../store/helpers';

import actions from './actions';

const {
    getArtistsRequest,
    getArtistsFailure,
    getArtistsSuccess,
    clearArtistsResults,
} = actions;

const HANDLERS = {
    * [getArtistsRequest]({payload = ''}) {
        try {
            if (payload) {
                const response = yield call(axiosAdapter, {
                    method: 'get',
                    params: {
                        method: 'artist.search',
                        artist: payload,
                        limit: 100,
                    }
                });
                const {results} = response.data;
                yield put(getArtistsSuccess(results));
            } else {
                yield put(clearArtistsResults());
            }
        } catch (error) {
            yield put(getArtistsFailure());
        }
    },
};

export default sagaGenerator(HANDLERS);
