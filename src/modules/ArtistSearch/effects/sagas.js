import {
    put,
    call,
} from 'redux-saga/effects';

import {
    axiosAdapter,
    sagaGenerator,
    constants,
} from '../../../store/helpers';

import actions from './actions';

const {
    getArtistsRequest,
    getArtistsFailure,
    getArtistsSuccess,
} = actions;

const HANDLERS = {
    * [getArtistsRequest]({payload = ''}) {
        try {
            const response = yield call(axiosAdapter, {
                method: 'get',
                params: {
                    method: 'artist.search',
                    artist: payload,
                }
            });
            const {results} = response.data;
            yield put(getArtistsSuccess(results));
        } catch (error) {
            yield put(getArtistsFailure);
        }
    },
};

export default sagaGenerator(HANDLERS);
