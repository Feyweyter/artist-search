import React from 'react';
import ArtistList from './index';
import NoResultsComponent from '../../../../components/NoResults';
import {shallow} from "enzyme";

describe('ArtistList with items', () => {
    const list = [{
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
    }];
    const query = 'l';

    let container;

    beforeEach(() => {
        container = shallow(<ArtistList list={list} query={query}/>)
    });

    it('should render component', () => {
        expect(container.length).toEqual(1);
    });

    it('should display first artist name', () => {
        expect(container.find('#item0').text()).toEqual(list[0].name);
    });

    it('should display artists list length', () => {
        expect(container.find('div').length).toEqual(list.length);
    });
});

describe('ArtistList without items', () => {
    let container;
    beforeEach(() => {
        container = shallow(<ArtistList list={[]} query={'j'}/>)
    });

    it('should display NoResultsComponent', () => {
        expect(container.find(NoResultsComponent).length).toEqual(1);
    });

    it('should display no list items', () => {
        expect(container.find('div').length).toEqual(0);
    });
});
