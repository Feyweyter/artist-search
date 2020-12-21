import React, {useCallback, useState} from 'react';
import Input from '@material-ui/core/Input';
import actions from './effects/actions';
import {useDispatch, useSelector} from 'react-redux';
import { createSelector } from 'reselect';
import ArtistList from './components/ArtistList';
import {LoaderScreen} from '../../components';

import styles from './index.module.scss';

const selectAllData = createSelector(
    state => state.ArtistSearch,
    allData => allData
);

const Index = () => {
    const dispatch = useDispatch();
    const {query, list, isLoading} = useSelector(selectAllData);
    const [input, setInput] = useState(query);

    const handleChange = useCallback((e) => {
        e.preventDefault();
        e.stopPropagation();
        const val = e.target.value;
        setInput(val);
        dispatch(actions.getArtistsRequest(val));
    }, [dispatch]);

    return (
        <div className={styles.main} key="search">
            <Input autoFocus fullWidth value={input} onChange={handleChange}
                   placeholder="Search for your favorite artist"/>
            {isLoading ? <LoaderScreen/> : <ArtistList list={list} query={input}/>}
        </div>
    );
};

Index.propTypes = {};

export default Index;
