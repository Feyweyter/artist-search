import {createActions} from 'redux-actions';

const syncTypes = [
    'GET_ARTISTS_REQUEST',
    'GET_ARTISTS_SUCCESS',
    'GET_ARTISTS_FAILURE',
    'CLEAR_ARTISTS_RESULTS',
];
export default createActions(...syncTypes);
