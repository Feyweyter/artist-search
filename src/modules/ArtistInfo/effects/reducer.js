import {reducerGenerator} from '../../../store/helpers';

import actions from './actions';

const {
    getArtistInfoRequest,
    getArtistInfoFailure,
    getArtistInfoSuccess,
    clearArtistInfoResults,
    getArtistAlbumsSuccess,
} = actions;

export const initialState = {
    bio: null,
    albums: [],
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
    [getArtistAlbumsSuccess]: (state, payload) => ({
        ...state,
        isLoading: false,
        albums: payload.album,
    }),
    [clearArtistInfoResults]: () => ({
        ...initialState,
    }),
    ...initialState,
};

export default reducerGenerator(initialState, HANDLERS);
