import {reducerGenerator} from '../../../store/helpers';

import actions from './actions';

const {
    getArtistInfoRequest,
    getArtistInfoFailure,
    getArtistInfoSuccess,
    clearArtistInfoResults,
} = actions;

export const initialState = {
    bio: null,
    isLoading: false,
};

const HANDLERS = {
    [getArtistInfoRequest]: (state) => ({
        ...state,
        isLoading: true,
    }),
    [getArtistInfoSuccess]: (state, payload) => ({
        ...state,
        isLoading: false,
        bio: payload.bio,
    }),
    [getArtistInfoFailure]: (state) => ({
        ...state,
        isLoading: false,
    }),
    [clearArtistInfoResults]: () => ({
        ...initialState,
    }),
    ...initialState,
};

export default reducerGenerator(initialState, HANDLERS);
