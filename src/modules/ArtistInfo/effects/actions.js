import {createActions} from 'redux-actions';

const syncTypes = [
    'GET_ARTIST_INFO_REQUEST',
    'GET_ARTIST_INFO_SUCCESS',
    'GET_ARTIST_INFO_FAILURE',

    'GET_ARTIST_ALBUMS_SUCCESS',

    'CLEAR_ARTIST_INFO_RESULTS',

];
export default createActions(...syncTypes);
