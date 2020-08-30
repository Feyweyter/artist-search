import {reducerGenerator} from '../../../store/helpers';

import actions from './actions';

const {
    getArtistsRequest,
    getArtistsFailure,
    getArtistsSuccess,
    clearArtistsResults,
} = actions;

export const initialState = {
    list: [],
    isLoading: false,
    query: '',
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
        query: payload['opensearch:Query'].searchTerms,
    }),
    [getArtistsFailure]: (state) => ({
        ...state,
        isLoading: false,
    }),
    [clearArtistsResults]: () => ({
        ...initialState,
    }),
    ...initialState,
};

export default reducerGenerator(initialState, HANDLERS);
