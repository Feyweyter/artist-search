import React from 'react';
import Input from '@material-ui/core/Input';
import configureStore from 'redux-mock-store';
import {mount} from "enzyme";
import {Provider} from "react-redux";

import ArtistSearch from './index';
import ArtistList from './components/ArtistList';
import actions from './effects/actions';
import reducer from './effects/reducer';

const initialState = {
    ArtistSearch: {
        list: [{
            name: "Lady Gaga",
            listeners: "4100355",
            mbid: "650e7db6-b795-4eb5-a702-5ea2fc46c848",
            url: "https://www.last.fm/music/Lady+Gaga",
            streamable: "0",
        }, {
            name: "Gorillaz",
            listeners: "3781218",
            mbid: "e21857d5-3256-4547-afb3-4b6ded592596",
            url: "https://www.last.fm/music/Gorillaz",
            streamable: "0"
        }],
        isLoading: false,
        query: 'l',
        page: 1,
    }
};

const mockStore = configureStore();
let store, container;

const mockJSON = {
    artistmatches: {
        artist: [{
            name: "Lady Gaga",
            listeners: "4100355",
            mbid: "650e7db6-b795-4eb5-a702-5ea2fc46c848",
            url: "https://www.last.fm/music/Lady+Gaga",
            streamable: "0",
        }, {
            name: "Gorillaz",
            listeners: "3781218",
            mbid: "e21857d5-3256-4547-afb3-4b6ded592596",
            url: "https://www.last.fm/music/Gorillaz",
            streamable: "0"
        }],
    },
    'opensearch:Query': {
        searchTerms: "la",
        startPage: "1",
    },
    'opensearch:totalResults': "2"
};

describe('<ArtistSearch/>', () => {
    beforeEach(() => {
        store = mockStore(initialState);
        container = mount(<Provider store={store}><ArtistSearch/></Provider>);
    });

    it('should render component', () => {
        expect(container.length).toEqual(1);
    });

    it('should have <ArtistList/> component', () => {
        expect(container.find(ArtistList).length).toEqual(1);
    });

    it('<ArtistList/> should have necessary props', () => {
        const foundProps = container.find(ArtistList).props();
        expect(foundProps.query).toEqual('l');
        expect(JSON.stringify(foundProps.list)).toEqual(JSON.stringify(initialState.ArtistSearch.list));
    });

    it('should have <Input/> component', () => {
        expect(container.find(Input).length).toEqual(1);
    });

    it('<Input/> should have necessary props', () => {
        const foundProps = container.find(Input).props();
        expect(foundProps.value).toEqual('l');
    });

    it('check action on input change', () => {
        const event = {
            preventDefault() {
            },
            target: {value: 'ga'}
        };
        container.find(Input).find('input').simulate('change', event);
        const foundProps = container.find(Input).props();
        expect(foundProps.value).toEqual('ga');
        const action = store.getActions();
        expect(action[0].type).toBe("GET_ARTISTS_REQUEST");
        expect(action[0].payload).toBe("ga");
    });
});

describe('Test actions and reducer', () => {
    beforeEach(() => {
        store = mockStore(initialState);
    });

    it('check action on dispatching', () => {
        let action;
        store.dispatch(actions.getArtistsRequest('la'));
        action = store.getActions();
        expect(action[0].type).toBe("GET_ARTISTS_REQUEST");
        expect(action[0].payload).toBe("la");
    });

    it('test reducer request action', () => {
        let state = {...initialState.ArtistSearch};
        const payload = 'cher';
        state = reducer(state, {type: 'GET_ARTISTS_REQUEST', payload});
        expect(state).toEqual({...initialState.ArtistSearch, isLoading: true});
    });

    it('test reducer success action', () => {
        let state = {...initialState.ArtistSearch};
        state = reducer(state, {type: 'GET_ARTISTS_SUCCESS', payload: mockJSON});
        expect(state).toEqual({
            list: [{
                name: "Lady Gaga",
                listeners: "4100355",
                mbid: "650e7db6-b795-4eb5-a702-5ea2fc46c848",
                url: "https://www.last.fm/music/Lady+Gaga",
                streamable: "0",
            }, {
                name: "Gorillaz",
                listeners: "3781218",
                mbid: "e21857d5-3256-4547-afb3-4b6ded592596",
                url: "https://www.last.fm/music/Gorillaz",
                streamable: "0"
            }],
            isLoading: false,
            query: 'la',
            page: 1,
        });
    });
});

