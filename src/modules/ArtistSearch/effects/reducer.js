import {reducerGenerator} from '../../../store/helpers';

import actions from './actions';

const {
    getArtistsRequest,
    getArtistsFailure,
    getArtistsSuccess,
} = actions;

export const initialState = {
    list: null,
    isLoading: false,
    page: 1,
};

const HANDLERS = {
    [getArtistsRequest]: (state) => ({
        ...state,
        isLoading: true,
    }),
    [getArtistsSuccess]: (state, payload) => ({
        ...state,
        isLoading: false,
        list: payload['opensearch:totalResults'] ? payload.artistmatches.artist : [],
    }),
    [getArtistsFailure]: (state) => ({
        ...state,
        isLoading: false,
    }),
    ...initialState,
};

export default reducerGenerator(initialState, HANDLERS);
