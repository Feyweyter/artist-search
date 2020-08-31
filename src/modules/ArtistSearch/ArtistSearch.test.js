import React from 'react';
import Input from '@material-ui/core/Input';
import configureStore from 'redux-mock-store';
import {shallow, mount} from "enzyme";
import {Provider} from "react-redux";

import ArtistSearch from './index';
import ArtistList from './components/ArtistList';

describe('ArtistList with items', () => {
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
});
