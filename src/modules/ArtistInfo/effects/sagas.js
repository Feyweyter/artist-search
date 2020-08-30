import {
    put,
    call,
} from 'redux-saga/effects';

import {
    axiosAdapter,
    sagaGenerator,
} from '../../../store/helpers';

import actions from './actions';

const {
    getArtistInfoRequest,
    getArtistInfoFailure,
    getArtistInfoSuccess,
    getArtistAlbumsSuccess,
    clearArtistInfoResults,
} = actions;

const HANDLERS = {
    * [getArtistInfoRequest]({payload = ''}) {
        try {
            if (payload) {
                const response = yield call(axiosAdapter, {
                    method: 'get',
                    params: {
                        method: 'artist.getinfo',
                        artist: payload,
                    }
                });
                const {artist} = response.data;
                const responseDisco = yield call(axiosAdapter, {
                    method: 'get',
                    params: {
                        method: 'artist.gettopalbums',
                        artist: payload,
                    }
                });
                const {topalbums} = responseDisco.data;
                yield put(getArtistAlbumsSuccess(topalbums));
                yield put(getArtistInfoSuccess(artist));
            } else {
                yield put(clearArtistInfoResults());
            }
        } catch (error) {
            yield put(getArtistInfoFailure());
        }
    },
};

export default sagaGenerator(HANDLERS);
